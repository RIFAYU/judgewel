<script setup>
import { ref } from "vue";
import { usePromptStore } from "@/store/promptmsg"
const promptStore = usePromptStore();
const hide_suggestion = ref(true);
const Suggestion = ref([
  "summary about ganasan case",
  "list out famous supreme court judgements",
  "list out famous crimal case judgements",
  "who is victim in parimala case"
]);

const sugg_click = (Suggestion) => {
  promptStore.message = Suggestion;
  hide_suggestion.value = false;
};
</script>

<template >
    <main v-if="hide_suggestion" class="flex flex-nowrap md:grid md:grid-cols-4 gap-4 overflow-x-auto">
      <div @click="sugg_click(Suggestion)"
        v-for="Suggestion in Suggestion"
        class="bg-gray-200 text-black p-2 rounded-lg flex-shrink-0 w-64 md:w-auto cursor-pointer"
      >
        <b>{{ Suggestion }}</b>
      </div>
    </main>
  </template>
  
