<template>
  <header
    class="block w-[100vw] h-fit py-8 px-4 bg-slate-800 lg:fixed lg:right-0 lg:h-[100vh] lg:w-[30%] lg:z-10">
    <div class="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden">
      <img src="@/assets/croped.jpg" alt="indra photo">
    </div>
    <h1 class="block py-8 font-semibold text-2xl text-center">My name is<br>Indra Kurniawan</h1>
    <div class="pt-4 flex flex-col items-center">
      <div>
        <div class="pt-4">EMAIL</div>
        <a class="" href="mailto: indranaftena@gmail.com">indranaftena@gmail.com</a>
        <div class="pt-4">SOCIAL</div>
        <div class="flex flex-row flex-wrap">
          <a href="https://www.linkedin.com/in/indranaftena/" target="_blank">
            <img src="@/assets/linkedin.svg" class="social-icon mr-2" alt="linkedin link">
          </a>
          <a href="https://twitter.com/indranaftena" target="_blank">
            <img src="@/assets/twitter.svg" class="social-icon mx-2" alt="twitter link">
          </a>
          <a href="https://www.instagram.com/indranaftena/" target="_blank">
            <img src="@/assets/instagram.svg" class="social-icon mx-2" alt="instagram link">
          </a>
          <a href="https://www.facebook.com/indranaftena" target="_blank">
            <img src="@/assets/facebook.svg" class="social-icon mx-2" alt="facebook link">
          </a>
          <a href="https://github.com/indranaftena" target="_blank">
            <img src="@/assets/github.svg" class="social-icon mx-2" alt="github link">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.social-icon {
  @apply w-7 h-7 my-2;
}
</style>