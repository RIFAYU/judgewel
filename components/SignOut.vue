<script setup>
import {useAuthStore} from '@/store/auth'
const store = useAuthStore();
</script>

<template>
    <div>
        <button @click="store.SignOut()" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Sign Out
        </button>
    </div>
</template>