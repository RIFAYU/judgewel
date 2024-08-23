<script setup>
import { usePromptStore } from '@/store/promptmsg';
const Store = usePromptStore();

</script>

<template>
        <!-- loading fecthing messages -->
        <div v-if="Store.Oload" class="float-left">
            <MsgLoader />
        </div>
    <!-- Message Container -->
    <section v-for="message in Store.Messages" :key="message.id" :class="[message.sender === 'user' ? 'flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end': 'flex w-full space-x-3 mt-8']" >
        <div  v-if="message.sender === 'other'">
          <img src="/public/icons/bot_profile.jpeg" alt="Profile avatar" class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 mr-18">
        </div>
          <div :class="[message.sender === 'user' ? 'bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg' : 'bg-gray-300 p-3 rounded-r-lg rounded-bl-lg']">
            <p class="text-sm">{{ message.text }}</p>
          </div>
          <div v-if="message.sender === 'user'">
            <img  src="/public/icons/profile_avatar.png" alt="Profile avatar" class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></img>
          </div>
        </section>
</template>

<style>
.message {
  padding: 15px;
}
/* .user-message {
  margin: 18px;
  float:right;
  width: 90%;
}
.other-message {
  float: left;
} */
</style>