<template>
  <header class="block fixed top-0 w-full z-50">
    <nav class="h-fit bg-slate-900/70 backdrop-blur-lg">
      <div class="container py-2 md:flex md:justify-between">
        <NuxtLink to="/" class="inline">
          <img class="w-auto h-10 px-7 py-1 inline" src="@/assets/logo.svg" alt="naftena logo">
        </NuxtLink>
        <input type="checkbox" id="nav-button" class="hidden">
        <div class="float-right px-4 md:hidden">
          <label for="nav-button" class="block h-7 w-7 p-0">
            <span class="line block my-1 h-1 w-full bg-slate-400"></span>
            <span class="line block my-1 h-1 w-full bg-slate-400"></span>
            <span class="line block my-1 h-1 w-full bg-slate-400"></span>
          </label>
        </div>
        <div class="nav-links overflow-y-hidden px-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/certificates">Certificates</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.nav-links .router-link-active, .nav-links .router-link-active:hover {
  @apply text-white;
}

.nav-links a {
  @apply block px-3 py-2 text-slate-400 hover:text-slate-100 md:inline-flex;
}

@media screen and (max-width: 720px) {
  nav #nav-button:not(:checked)~.nav-links {
    @apply h-0;
  }
  nav #nav-button:checked~.nav-links {
    @apply h-fit py-3;
  }
  nav #nav-button:checked~.nav-links a {
    @apply py-4;
  }
}

</style>