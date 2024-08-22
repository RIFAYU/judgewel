import os
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import google.generativeai as genai
from langchain.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFDirectoryLoader

app = FastAPI()

# List of allowed origins
origins = [
    "http://localhost:3000",  # Frontend running on a different port
    "http://0.0.0.0:8000",  # Replace with your domain
]

# Add CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)


# Loading google api key using dotenv
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Google embedding model
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# Prompt template
prompt_template = """
    you are a India law assistant.
    I am going to ask question about this judgement to clarify my doubt in simple manner.
    if content is not available in document get relevant response from internet
    ",\n\n
    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
"""

# Create conversational chain
model = ChatGoogleGenerativeAI(model="gemini-1.5-pro-latest", temperature=0.2)
prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

@app.get("/")
async def summarize(question: str = Query(..., description="The question to be answered")):
    # Load embeddings and search for similar documents
    new_db = FAISS.load_local("test_index", embeddings, allow_dangerous_deserialization=True)
    docs = new_db.similarity_search(question)
    
    # Get response from chain
    response = chain(
        {"input_documents": docs, "question": question},
        return_only_outputs=True
    )
    
    return {"response": response["output_text"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)