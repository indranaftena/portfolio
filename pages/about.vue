<script setup>

useHead({
  title: 'About | Naftena Portfolio',
  meta: [{ name: "description", content: "Naftena Portfolio about page" }]
});

</script>

<template>
  <main class="">
    <section class="bg-slate-800 w-full">
      <div class="container py-8 px-8 md:px-16 xl:px-36">
        <h1 class="text-3xl font-bold text-center pb-16">About Me</h1>
        <h2 class="text-2xl font-bold pb-4">Personal Info</h2>
        <ul class="pl-4 pb-8">
          <li class="pb-2 flex">
            <div>BIRTH DATE:&nbsp;&nbsp;&nbsp;</div>
            <div>July 14<sup>th</sup>, 1996</div>
          </li>
          <li class="pb-2 flex">
            <div>ADDRESS:&nbsp;&nbsp;&nbsp;</div>
            <div>Bulu RT 3 RW 4, Punduhsari, Manyaran, Wonogiri<br>57662</div>
          </li>
          <li class="pb-2 flex">
            <div>HOBBIES:&nbsp;&nbsp;&nbsp;</div>
            <div>writing,
              <a href="https://naftena.netlify.app/" target="_blank" class="hover:underline">
                blogging
                <img src="@/assets/up-right-from-square-solid.svg" alt="link icon" class="inline-flex h-3">
              </a>,
              playing guitar
            </div>
          </li>
        </ul>
        <h2 class="text-2xl font-bold pb-4">Education</h2>
        <ul class="list-disc pl-8 pb-8">
          <li class="pb-2">
            <div>UNIVERSITAS GADJAH MADA (2017-2019)</div>
            <div>Master of Electrical Engineering (<i>Fast Track Program</i>)</div>
            <div>GPA 3.88 out of 4.00</div>
          </li>
          <li class="pb-2">
            <div>UNIVERSITAS GADJAH MADA (2014-2018)</div>
            <div>Bachelor of Electrical Engineering (<i>Fast Track Program</i>)</div>
            <div>GPA 3.60 out of 4.00</div>
          </li>
        </ul>
        <h2 class="text-2xl font-bold pb-4">Publication</h2>
        <ul class="list-disc pl-8 pb-8">
          <li class="pb-2">
            <div><i>
                "Tuning Fractional Order Proportional Integral Derivative Controller for DC
                Motor Control Model Using Cross-Entropy Method"
              </i></div>
            <div>
              <b>Published in:</b>
              2018 3rd International Conference on Information Technology, Information
              System and Electrical Engineering (ICITISEE)
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>