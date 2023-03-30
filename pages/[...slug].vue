<script setup>

useHead({
  title: 'Project Detail',
  meta: [{ name: "description", content: "Background, description, and technology used in the project" }]
});

</script>

<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="slug container py-8 pt-10 pb-24 px-8 md:px-16 xl:px-36">
        <ContentDoc>
          <template #not-found>
            <div class="py-28">
              <h1>Page not found</h1>
            </div>
          </template>
        </ContentDoc>
      </div>
    </section>
  </main>
</template>

<style>
.slug h1 {
  @apply text-3xl text-center font-bold pb-16;
}

.slug img:first-of-type {
  @apply mx-auto pb-14 w-full md:w-[600px] lg:w-[880px] xl:w-[1000px];
}

.slug h2 {
  @apply text-2xl font-semibold pt-8;
}

.slug h3 {
  @apply text-xl font-semibold pt-6 pl-2;
}

.slug ul {
  @apply list-disc list-inside pl-2;
}

.slug .clink {
  @apply underline font-semibold transition-all;
}

.slug .clink:hover {
  @apply bg-orange-600 p-1 text-white no-underline;
}
</style>