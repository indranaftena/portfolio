<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="container py-8 px-7">
        <h1 class="text-3xl text-center font-bold pb-16">My Projects</h1>
        <div class="flex flex-wrap justify-center pb-8">
          <ContentQuery v-slot="{ data }">
            <ProjectWindow :data="data" />
          </ContentQuery>
        </div>
      </div>
    </section>
  </main>
</template>