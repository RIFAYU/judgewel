<script setup>
import { usePromptStore } from '~/store/promptmsg';
const Store = usePromptStore();

// Copy Function
const copyText = (copy_data) => {
  navigator.clipboard.writeText(copy_data);
}

// Speak Function
const speakText = (speak_data) => {
  const utterance = new SpeechSynthesisUtterance(speak_data);
  window.speechSynthesis.speak(utterance);
}
</script>

<template>
  <div >
    <div class="flex w-full space-x-3 mt-8">
      <img src="/icons/bot_profile.jpeg" alt="Profile avatar" class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300"></img>
      <div v-if="!Store.Oload">
        <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
          <p class="text-sm">
            {{ Store.response }}
          </p>
        </div>
        <div class="flex w-5 h-5 mt-2 space-x-2">
            <img @click="copyText(Store.response)" src="/icons/copy.png" alt="copy" class="cursor-pointer">
            <img @click="speakText(Store.response)" src="/icons/speak.png" alt="speak" class="cursor-pointer">
            <img @click="Store.responsed()" src="/icons/translate.png" alt="translate" class="cursor-pointer">
        </div>
      </div>
    </div>
  </div>
</template>
