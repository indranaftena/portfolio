<template>
  <main class="text-slate-50">
    <section class="bg-slate-900 w-full">
      <div class="limiter px-20 flex flex-wrap justify-center">
        <div class="hero-area justify-end">
          <div>Hi, I'm</div>
          <h1 class="text-3xl font-bold">Indra Kurnaiwan</h1>
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
          <div class="project">
            <img src="@/assets/naftena-blog.png" alt="naftena blog">
          </div>
          <div class="project">
            <img src="@/assets/joey-render.png" alt="naftena blog">
          </div>
          <div class="project">
            <img src="@/assets/donut-maze.png" alt="naftena blog">
          </div>
        </div>
        <div class="flex justify-center pb-8">
          <NuxtLink class="py-2 px-4 text-white bg-orange-600 hover:bg-orange-500" to="/projects">Show More >></NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-slate-700 w-full">
      <div class="limiter">
        <h2 class="text-2xl text-center font-bold pb-10">Contact Me</h2>
        <div class="flex flex-wrap justify-between">
          <div class="w-80 mx-auto pb-10 px-4">
            <div class="font-bold">Address</div>
            <div>Rumah Mbah Karsanto</div>
            <div>Bulu RT 3 RW 4, Punduhsari, Manyaran, Wonogiri</div>
            <div>57662</div>
            <div>Central Java, Indonesia</div>
            <div class="font-bold pt-4">Email</div>
            <div>indranaftena@gmail.com</div>
          </div>
          <form action="/dummy" class="w-80 mx-auto p-4 bg-slate-800">
            <h3 class="font-bold pb-2">Leave a Message</h3>
            <label class="block ml-2" for="username">Name*</label>
            <input class="input ml-2" type="text" id="username" placeholder="Fulan">
            <label class="block ml-2" for="email">Email*</label>
            <input class="input ml-2" type="email" id="email" placeholder="fulan@mail.com">
            <label class="block ml-2" for="message">Message*</label>
            <textarea class="input ml-2" name="message" id="message" cols="0" rows="5"
              placeholder="What you want to say...."></textarea>
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

.project {
  @apply w-80 h-80 m-2 overflow-hidden flex justify-center;
}

.project img {
  @apply h-full object-cover;
}

form .input {
  @apply text-slate-50 w-60 bg-slate-700 border-2 border-slate-500 focus:outline-slate-200 placeholder:text-sm placeholder:text-slate-400;
  display: block;
  padding: 4px 8px;
  margin-bottom: 16px;
}
</style>