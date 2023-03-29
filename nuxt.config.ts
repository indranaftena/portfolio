// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png'},
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
            ]
        }
    },
    modules: [
        '@nuxt/content'
    ]
})
