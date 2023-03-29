<template>
  <main class="">
    <section class="bg-slate-900 w-full">
      <div class="limiter px-20 flex flex-wrap justify-center">
        <div class="hero-area justify-end">
          <div>Hi, I'm</div>
          <h1 class="text-3xl font-bold">Indra Kurniawan</h1>
        </div>
        <img class="hero-area rounded-full" src="@/assets/croped.jpg" alt="indra's photo">
        <div class="hero-area justify-start text-right">
          A motivated and adaptable Electrical Engineering graduated, recently interested in web development both
          backend and frontend. Willing to learn anything new and challenging.
        </div>
      </div>
    </section>
    <section class="bg-slate-800 w-full">
      <div class="limiter">
        <h2 class="text-2xl text-center font-bold pb-8">Recent Projects</h2>
        <div class="flex flex-wrap justify-center pb-8">
          <ContentQuery :limit=3 v-slot="{ data }">
            <ProjectWindow :data="data" />
          </ContentQuery>
        </div>
        <div class="flex justify-center pb-8">
          <NuxtLink class="py-2 px-4 text-white bg-orange-600 hover:bg-orange-500" to="/projects">Show More &raquo;
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-700 w-full">
      <div class="limiter">
        <h2 class="text-2xl text-center font-bold pb-10">Contact Me</h2>
        <div class="flex flex-wrap justify-between">
          <div class="w-80 mx-auto pb-10 px-4 flex flex-col justify-center">
            <div class="font-bold">Address</div>
            <div>Rumah Mbah Karsanto</div>
            <div>Bulu RT 3 RW 4, Punduhsari, Manyaran, Wonogiri</div>
            <div>57662</div>
            <div>Central Java, Indonesia</div>
            <div class="font-bold pt-4">Email</div>
            <div>indranaftena@gmail.com</div>
          </div>
          <form action="/dummy" class="w-80 mx-auto p-4 bg-slate-800">
            <h3 class="font-bold pb-2 text-center">Leave a Message</h3>
            <div class="mx-auto w-fit">
              <label class="block" for="username">Name*</label>
              <input class="input" type="text" id="username" placeholder="Fulan">
              <label class="block" for="email">Email*</label>
              <input class="input" type="email" id="email" placeholder="fulan@mail.com">
              <label class="block" for="message">Message*</label>
              <textarea class="input" name="message" id="message" cols="0" rows="5"
                placeholder="What you want to say...."></textarea>
            </div>
            <button class="block py-1 px-4 mx-auto text-white bg-orange-600 hover:bg-orange-500">Send</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section .limiter {
  @apply container py-8 px-7;
}

.limiter .hero-area {
  @apply w-80 h-80 p-8 flex flex-col;
}

form .input {
  @apply text-slate-50 w-60 bg-slate-700 border-2 border-slate-500 focus:outline-slate-400 placeholder:text-sm placeholder:text-slate-400;
  display: block;
  padding: 4px 8px;
  margin-bottom: 16px;
}
</style>