<script setup>
defineProps(['data']);
</script>

<template>
  <div class="m-2 group" v-for="page of data">
    <NuxtLink class="relative" :to="page._path">
      <img class="w-80 h-80 object-cover" :src="`/${page.cover}`" :alt="`${page.coverAlt}`">
      <div class="absolute flex bottom-0 left-0 z-10 w-full h-1/2 group-hover:h-3/4 transition-all
        px-4 pb-6 font-bold
        bg-gradient-to-b from-transparent to-black/95">
        <span class="self-end">
          {{ page.title }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>