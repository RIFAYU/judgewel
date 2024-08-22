<script setup>
</script>

<template>
  <main class="bg-gray-100">
    <!-- Navigation Bar -->
    <NavBar />

    <!-- Hero Section -->
    <div
      class="relative bg-cover bg-center h-screen flex items-center justify-center"
      style="
        background-image: url('/images/text_page_background.jpg');
      "
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-4xl font-bold mb-4">We Hold the Quality Standard!</h1>
        <p class="mb-6">
          Ethics is knowing the difference between what you have a right to do
          and what is right to do.....
        </p>
        <RouterLink to="/promptpage" class="bg-black text-white px-7 py-3 rounded-md">Get Started</RouterLink>
      </div>
    </div>

    <!-- Search Bar -->
    <!-- <div class="container mx-auto px-4 py-8">
        <div class="flex justify-center">
            <input type="text" placeholder="Browse Library" class="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="text-center mt-4">
            <p>LOCATION: INDIA</p>
        </div>
    </div> -->
  </main>
</template>