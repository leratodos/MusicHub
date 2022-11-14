<template>
  <div id="app">
    <MusicplayerApp></MusicplayerApp>
  </div>
</template>

<script>


import  MusicplayerApp from './components/MusicplayerApp.vue'
export  default {
  name: 'App',
  components: {
    MusicplayerApp
  }
}
</script>



<style>
body, html {
  font-family: 'Manrope', 'icomoon', sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  }

body * {
  box-sizing: border-box;
}

p, h1, h2, h3 ,h4, h5, h6, li, svg {
  margin: 0;
  padding: 0;
}

ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  width: 100%;
}


</style>
