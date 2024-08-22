<template>
  <div>
    <nav class="bg-white shadow-md">
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <img
            src="/public/icons/bot_profile.jpeg"
            alt="LawGPT logo"
            class="h-10 w-10 mr-4 rounded-full"
          />
          <ul class="hidden md:flex space-x-4 ml-auto">
            <li>
              <RouterLink
                to="/"
                class="text-black-700 hover:text-black-900 px-5 py-2 font-semibold"
                >HOME</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                class="text-black-700 hover:text-black-900 px-5 py-2 font-semibold"
                >ABOUT US</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-black-700 hover:text-black-900 px-5 py-2 font-semibold"
                >CONTACT</RouterLink
              >
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
        <section class="flex">
          <div class="hidden md:flex px-0 space-x-4 mr-10">
            <RouterLink
              to="/auth/signin"
              class="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-md"
              >Login</RouterLink
            >
          </div>
          <div class="hidden md:flex space-x-4">
            <RouterLink
              to="/auth/signup"
              class="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-md"
              >SignUp</RouterLink
            >
          </div>
        </section>
      </div>
    </nav>
  </div>
</template>
