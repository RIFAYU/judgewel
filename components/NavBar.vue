<template>
    <div>
        <nav class="bg-white shadow-md">
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <img src="/public/icons/bot_profile.jpeg"  alt="LawGPT logo" class="h-8 mr-4" />
          <ul class="hidden md:flex space-x-4 ml-auto">
            <li>
              <RouterLink to="/" class="text-black-700 hover:text-black-900 px-5 py-2"
                >HOME</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-black-700 hover:text-black-900 px-5 py-2"
                >ABOUT US</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-black-700 hover:text-black-900 px-5 py-2"
                >CONTACT</RouterLink>
            </li>
          </ul>
        </div>
        <div class="md:hidden">
          <button
            onclick="toggleMenu()"
            class="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden md:flex space-x-4">
            <RouterLink to="/auth/signin" class="bg-gray-500 hover:bg-gray-600 text-black px-5 py-2 rounded-md">Login</RouterLink>
        </div>
      </div>
      <div class="hidden sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a href="#" class="block text-black-700 hover:text-black-900">HOME</a>
          <a href="#" class="block text-black-700 hover:text-black-900"
            >ABOUT US</a
          >
          <a href="#" class="block text-black-700 hover:text-black-900"
            >CONTACT</a
          >
          <RouterLink to="auth/signin" class="block w-full bg-gray-500 hover:bg-gray-600 text-black px-5 py-2 rounded-md">Login</RouterLink>
          <button
            type="button"
            class="block w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md"
          >
            JOIN PRO
          </button>
        </div>
      </div>
    </nav>
    </div>
</template>
