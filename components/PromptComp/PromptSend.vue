<script setup>
import {usePromptStore} from '@/store/promptmsg.js'
const Store = usePromptStore();
</script>

<template lang="">
  <div>
    <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
      <div>
        <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
        <p class="text-sm">{{ Store.messages }}</p>
        </div>
      </div>
      <img  src="/icons/defaulr_profile_image.jpg" alt="Profile avatar" class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></img>
    </div>
  </div>
</template>
