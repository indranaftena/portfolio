<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="slug container py-8 px-7 md:px-16">
        <ContentDoc />
      </div>
    </section>
  </main>
</template>

<style>
.slug h1 {
  @apply text-3xl text-center font-bold pb-16;
}

.slug img {
  @apply mx-auto pb-6 w-full md:w-[600px] lg:w-[800px];
}

.slug h2 {
  @apply text-xl font-semibold pt-4;
}

.slug ul {
  @apply list-disc list-inside pb-4;
}
</style>