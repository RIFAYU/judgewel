<template>
<!-- Message Container -->
<div class="flex-1 overflow-y-scroll p-4 bg-gray-100">
    <div class="space-y-4">
        <div>
            <PromptCompPromptSend />
            <div class="flex">
                <PromptCompPromptRecive />
                <MsgLoader v-if="Store.Oload" class="float-left mt-[32px] ml-2"/>
            </div>
        </div>
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