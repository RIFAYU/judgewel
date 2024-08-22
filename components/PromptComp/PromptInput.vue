<script setup>
import {usePromptStore} from '@/store/promptmsg.js'
const Store = usePromptStore();
</script>

<template>
  <!-- Chat Input -->
  <div class="flex items-center border border-gray-300 rounded p-2">
    <!-- File Upload Button -->
    <button class="mr-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">
      <svg
        class="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    </button>

    <!-- Text Input -->
    <input
      @keydown.enter="Store.sendPrompt()"
      type="text"
      v-model="Store.message"
      class="flex-1 p-2 border border-gray-300 rounded focus:outline-none"
      placeholder="Type your message..."
      value=""
    />

    <!-- Send Button -->
    <button @click="Store.sendPrompt()" class="ml-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
      Send
    </button>
  </div>
</template>
