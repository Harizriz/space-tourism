/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
      body: ['Barlow']
    },
    extend: {
      colors: {
        'very-dark-blue': '#0B0D17',
        'light-gray-blue': '#D0D6F9',
        header: '#ffffff0a'
      },
      letterSpacing: {
        nav: '2.7px'
      },
      fontSize: {
        'heading-1': '150px',
        'heading-2': '100px',
        'heading-3': '56px',
        'heading-4': '32px',
        'heading-5': ['28px', '33.6px'],
        'subheading-1': '28px',
        'subheading-2': ['14px', '17px'],
        nav: ['16px', '19px'],
        body: ['18px', '32px']
      },
      backgroundImage: {
        'gradient-radial-tl': 'radial-gradient(circle at 0 0, rgba(204,0,0,0) 19px, #0B0D17 20px)',
        'gradient-radial-tr':
          'radial-gradient(circle at 100% 0, rgba(204,0,0,0) 19px, #0B0D17 20px)',
        'gradient-radial-bl':
          'radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 19px, #0B0D17 20px)',
        'gradient-radial-br':
          'radial-gradient(circle at 0 100%, rgba(204,0,0,0) 19px, #0B0D17 20px)',
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'destination-desktop': "url('/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'technology-desktop': "url('/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/technology/background-technology-mobile.jpg')",
        'vehicle-portrait': "url('/technology/image-launch-vehicle-portrait.jpg')",
        'capsule-portrait': "url('/technology/image-space-capsule-portrait.jpg')",
        'spaceport-portrait': "url('/technology/image-spaceport-portrait.jpg')",
        'vehicle-landscape': "url('/technology/image-launch-vehicle-landscape.jpg')",
        'capsule-landscape': "url('/technology/image-space-capsule-landscape.jpg')",
        'spaceport-landscape': "url('/technology/image-spaceport-landscape.jpg')",
        moon: "url('/destination/image-moon.webp')",
        mars: "url('/destination/image-mars.webp')",
        europa: "url('/destination/image-europa.webp')",
        titan: "url('/destination/image-titan.webp')",
        douglas: "url('/crew/image-douglas-hurley.webp')",
        mark: "url('/crew/image-mark-shuttleworth.webp')",
        victor: "url('/crew/image-victor-glover.webp')",
        ansari: "url('/crew/image-anousheh-ansari.webp')"
      }
    }
  },
  plugins: []
}
