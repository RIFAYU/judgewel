import { ref, computed } from "vue";
import { defineStore } from "pinia";



export const usePromptStore = defineStore("prompt", () => {
    // state
    const Messages = ref([])
    const Newmessage = ref('');

    const Oload = ref(false)

    // Send prompt from User
    const sendPrompt = () => {
      Oload.value = true;
      Messages.value.push({
        id: Date.now(),
        text: Newmessage.value,
        sender: 'user'
      });
      Newmessage.value = '';

      responsed();
    }


    // Response function
    const responsed = async () => {
      // `http://0.0.0.0:8000/?question=${message.value}`
      try {
        const res = await fetch(`http://0.0.0.0:8000/?question=${Newmessage.value}`);
        const datas = await res.json();
        Messages.value.push({
          id: Date.now(),
          text: datas['response'],
          sender: 'other'
        })
        Oload.value = false;
      } catch (error) {
        console.log(error);
      }
    }

  return {
    sendPrompt,
    Messages,
    Newmessage,
    Oload,
  };

});
