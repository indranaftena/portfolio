<template>
  <nav class="block relative w-full h-fit text-orange-200 bg-slate-900 border-b-8 border-orange-600 lg:fixed lg:top-0 lg:z-0">
    <div class="flex">
      <NuxtLink to="/">Bio</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/certificates">Certificates</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active, .router-link-active:hover {
  @apply bg-orange-600 text-white;
}

a {
  @apply p-3 bg-orange-800 text-orange-100;
}

a:hover {
  @apply bg-orange-700 text-orange-50;
}
</style>