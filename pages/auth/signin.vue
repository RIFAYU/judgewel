<script setup>
import {useAuthStore} from '@/store/auth'

const store = useAuthStore();

const pass_state = ref({
  type: "password",
  ico: "/icons/o_eye.svg",
});

const passwordVisiblity = () => {
  if (pass_state.value.type === "password") {
    pass_state.value.type = "text";
    pass_state.value.ico = "/icons/o_eye.svg";
  } else {
    pass_state.value.type = "password";
    pass_state.value.ico = "/icons/c_eye.svg";
  }
};
</script>

<template>
  <main
    class="relative h-screen bg-cover bg-center"
    style="background-image: url('/images/login_background_image.jpeg')"
  >
    <div
      id="login-popup"
      tabindex="-1"
      class="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow">
          <div class="p-5">
            <h3 class="text-2xl mb-0.5 font-medium"></h3>
            <p class="mb-4 text-sm font-normal text-gray-800"></p>

            <div class="text-center">
              <p class="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                !!! Welcome Back !!!
              </p>
              <p class="mt-2 text-sm leading-4 text-slate-600">
                Login to your account
              </p>
            </div>
            <!-- Google sign button -->
             <GoogleSign />
            <div
              class="flex w-full items-center gap-2 py-6 text-sm text-slate-600"
            >
              <div class="h-px w-full bg-slate-200"></div>
              OR
              <div class="h-px w-full bg-slate-200"></div>
            </div>

            <form class="w-full" @submit.prevent>
              <label for="email" class="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Email Address"
                v-model="store.login_data.email"
              />
              <div class="relative">
                <label for="password" class="sr-only">Password</label>
                <input
                  name="password"
                  :type="pass_state.type"
                  autocomplete="current-password"
                  required=""
                  class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                  value=""
                  v-model="store.login_data.password"
                />
                <button
                  @click="passwordVisiblity()"
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 "
                >
                  <img  :src="pass_state.ico" alt="eye icon" class="w-6 h-6" />
                </button>
              </div>
              <p class="mb-3 mt-2 text-sm text-gray-500">
                <a
                  href="#"
                  class="text-blue-800 hover:text-blue-600"
                  >Reset your password?</a
                >
              </p>
              <button
                @click="store.UserLoginFUN()"
                type="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
              >
                Continue
              </button>
            </form>
            <div class="mt-6 text-center text-sm text-slate-600">
              Don't have an account?
              <NuxtLink to="/auth/signup" class="font-medium text-[#4285f4]"
                >Sign up</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
