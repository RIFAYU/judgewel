<script setup>
import {useAuthStore} from '@/store/auth'
import { usePromptStore } from '@/store/promptmsg';
const state = useAuthStore();
const Sprompt = usePromptStore();
</script>

<template>
  <main class="flex flex-col h-screen">
    <PromptCompPromptNav v-if="state.isAuthUser" />
    <NavBar v-if="!state.isAuthUser"/>
    <PromptCompPromptMessages />
    <PromptCompPromptInput />
  </main>
</template>