<template>
  <header class="block sticky top-0 z-10">
    <nav class="w-full h-fit bg-slate-900/70 backdrop-blur-lg">
      <div class="container">
        <div class="flex justify-between">
          <NuxtLink to="/">
            <img class="w-auto h-10 px-4" src="@/assets/logo.svg" alt="naftena logo">
          </NuxtLink>
          <div class="p-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/certificates">Certificates</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active,
.router-link-active:hover {
  @apply text-white;
}

a {
  @apply p-3 text-slate-400;
}

a:hover {
  @apply text-slate-100;
}
</style>