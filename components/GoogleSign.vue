<script setup>
import {useAuthStore} from '@/store/auth'
const store = useAuthStore();
</script>

<template>
  <div class="mt-7 flex flex-col gap-2">
    <button 
    @click="store.SignInWithGoogle()"
      class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        class="h-[18px] w-[18px]"
      />Continue with Google
    </button>
  </div>
</template>
