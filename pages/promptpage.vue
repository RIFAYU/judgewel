<script setup>
import {useAuthStore} from '@/store/auth'
const state = useAuthStore();
// definePageMeta({
//     middleware: 'authe',
// })
</script>

<template>
  <main class="flex flex-col h-screen">
    <PromptCompPromptNav />
    <PromptCompPromptMessages />
    <PromptCompPromptInput />
  </main>
</template>