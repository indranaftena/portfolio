<script setup>

useHead({
  title: 'Naftena Certifications',
  meta: [{ name: "description", content: "List of Indra Kurniawan's certifications" }]
});

</script>

<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="container py-8 pt-10 pb-24 px-8 md:px-16">
        <h1 class="text-3xl text-center font-bold pb-16">My Certifications</h1>
        <h2 class="text-2xl font-bold pb-4">freeCodeCamp Back End Development and APIs</h2>
        <a href="https://www.freecodecamp.org/certification/indranaftena/back-end-development-and-apis" class="group"
          target="_blank" title="go to certification page">
          <img src="@/assets/backend_api.png" class="w-full lg:w-[700px] mb-16 border-orange-600 group-hover:border-8"
            alt="freecodecamp javascript certificate">
        </a>
        <h2 class="text-2xl font-bold pb-4">freeCodeCamp JavaScript Algorithms and Data Structures</h2>
        <a href="https://www.freecodecamp.org/certification/indranaftena/javascript-algorithms-and-data-structures"
          class="group" target="_blank" title="go to certification page">
          <img src="@/assets/javascript.png" class="w-full lg:w-[700px] mb-16 border-orange-600 group-hover:border-8"
            alt="freecodecamp javascript certificate">
        </a>
        <h2 class="text-2xl font-bold pb-4">Udemy TensorFlow Developer Certificate in 2022: ZTM</h2>
        <a href="https://www.udemy.com/certificate/UC-09832def-125f-42e1-8ed7-086c9e271927/" class="group" target="_blank"
          title="go to certification page">
          <img src="@/assets/udemy_tensorflow.jpg" class="w-full lg:w-[700px] border-orange-600 group-hover:border-8"
            alt="freecodecamp javascript certificate">
        </a>
      </div>
    </section>
  </main>
</template>