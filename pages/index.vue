<script setup>

useHead({
  title: 'Naftena Portfolio',
  meta: [{ name: "description", content: "I'm Indra Kurniawan and I'm a web developer" }],
});

</script>

<template>
  <main class="">
    <section class="bg-slate-900 w-full">
      <div class="limiter px-20 flex flex-wrap justify-center">
        <div class="hero-area justify-end">
          <div class="text-xl">Hi, I'm</div>
          <h1 class="text-4xl font-bold">Indra Kurniawan</h1>
        </div>
        <img class="hero-area rounded-full" src="@/assets/croped.jpg" alt="indra's photo">
        <div class="hero-area justify-start text-right">
          An adaptable web developer interested in both backend and frontend.
          Willing to learn anything new and challenging.
        </div>
      </div>
    </section>
    <section class="bg-slate-800 w-full">
      <div class="limiter">
        <h2 class="text-3xl text-center font-bold pb-16">Recent Projects</h2>
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
        <h2 class="text-3xl text-center font-bold pb-10">Contact Me</h2>
        <div class="flex flex-wrap justify-between">
          <div class="w-80 mx-auto pb-10 px-4 flex flex-col justify-center">
            <div class="font-bold">Address</div>
            <div>Mbah Karsanto's House</div>
            <div>Bulu, Punduhsari, Manyaran, Wonogiri</div>
            <div>Central Java, Indonesia</div>
            <div class="font-bold pt-4">Email</div>
            <div>indranaftena@gmail.com</div>
          </div>
          <form class="w-80 mx-auto px-4 pt-4 pb-6 bg-slate-800" name="contact" method="post" data-netlify="true">
            <h3 class="font-bold pb-2 text-center text-xl">Leave a Message</h3>
            <div class="mx-auto w-fit">
              <label class="block" for="username">Name*</label>
              <input class="input" type="text" id="username" name="name" placeholder="Fulan" pattern="[\w]+"
                maxlength="10" minlength="2" required />
              <label class="block" for="email">Email*</label>
              <input class="input" type="email" id="email" name="email" placeholder="fulan@mail.com"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required />
              <label class="block" for="text">Message*</label>
              <textarea class="input" name="message" id="message" cols="0" rows="5"
                placeholder="What's in your mind or heart...." maxlength="280" required></textarea>
            </div>
            <button class="block py-1 px-4 mx-auto text-white bg-orange-600 hover:bg-orange-500"
              type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section .limiter {
  @apply container py-24 px-7;
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