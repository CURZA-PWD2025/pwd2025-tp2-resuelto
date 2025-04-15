<template>
  <div :class="['title']">
    <h1>catalogo de películas</h1>
  </div>
  
  <div class="cards-container">
    <CardComponent :film="pelicula" v-for="pelicula in peliculasList" :key="pelicula.id" @addLike="addLike" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import peliculas from './resource/movies';
import type { Pelicula } from './interfaces/Pelicula.ts';
import CardComponent from './components/CardComponent.vue';

const peliculasList = ref<Array<Pelicula>>(peliculas);




const addLike = (like: { id: number; likes: number }) => {
  const pelicula = peliculasList.value.find((p) => p.id === like.id);
  console.log(like.likes);
  if (pelicula) {
    pelicula.likes += like.likes;
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.title {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  background-color: #373738;
  width: 100%;
  transition: all 0.25s ease-in;

}

.title.fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  z-index: 100;

  h1 {
    font-size: 2rem;
  }

}

h1 {
  z-index: 101;
  ;
  margin: 10px;
  background: linear-gradient(to right, #007BFF, #00BFFF);
  background-clip: text;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.25s ease-in;
  text-align: center;
}

.title::after {
  content: '';
  position: fixed;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #007BFF, #00BFFF);
  top: 0px;
  left: 0;
}
</style>