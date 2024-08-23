<template>
<!-- Message Container -->
<div class="flex-1 overflow-y-scroll p-4 bg-gray-100">
    <div class="space-y-4">
           <PromptCompChat />
    </div>
  </div>
  <section class="p-4">
    <PromptCompPromptSugg />
  </section>
</template>

<script setup>
import {usePromptStore} from '@/store/promptmsg.js'
const Store = usePromptStore();
</script>