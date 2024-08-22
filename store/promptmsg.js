import { ref, onMounted } from "vue";
import { defineStore } from "pinia";



export const usePromptStore = defineStore("prompt", () => {
    // state
    const messages = ref('')
    const message = ref('');

    //Recive Message
    const response = ref('')

    const addMessage = (message) => {
      messages.value = message
    }

    const Oload = ref(false)

    // Send prompt from User
    const sendPrompt = () => {
      if (message.value.trim() !== '') {
        addMessage(message.value);
        Oload.value = true;
        responsed();
      }
      message.value = '';
    }

    // Response function
    const responsed = async () => {
      // `http://0.0.0.0:8000/?question=${message.value}`
      try {
        const res = await fetch(`http://0.0.0.0:8000/?question=${message.value}`);
        const datas = await res.json();
        Oload.value = false;
        response.value = datas['response'];
      } catch (error) {
        console.log('Sorry, I could not fetch the weather data.', false);
      }
    }


  return {
    addMessage,
    sendPrompt,
    responsed,
    messages,
    message,
    response,
    Oload
  };

});
