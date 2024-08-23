<template>
  <div>
    <h1>{{ typedText }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typedText = ref('');
const fullText = 'This is the text to be typed out.';
let index = 0;

onMounted(() => {
  typeWriter();
});

function typeWriter() {
  if (index < fullText.length) {
    typedText.value += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed here
  }
}
</script>