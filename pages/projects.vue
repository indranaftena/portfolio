<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="container py-8 px-7">
        <h1 class="text-3xl text-center font-bold pb-16">My Projects</h1>
        <div class="flex flex-wrap justify-center pb-8">
          <ContentQuery v-slot="{ data }">
            <div class="project" v-for="page of data">
              <NuxtLink :to="page._path">
                <img :src="`/${page.cover}`" :alt="`${page.coverAlt}`">
              </NuxtLink>
            </div>
          </ContentQuery>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project {
  @apply w-80 h-80 m-2 overflow-hidden flex justify-center;
}

.project img {
  @apply h-full object-cover;
}
</style>