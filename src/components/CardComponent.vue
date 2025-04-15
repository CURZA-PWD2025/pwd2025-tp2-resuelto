<template>

    <div class="film-card">
        <h1>{{ props.film.titulo }} <span>({{ props.film.anio }})</span></h1>
        <p id="director">Director <span> {{ props.film.director }}</span></p>
        <p id="generos">Generos <strong>{{ props.film.generos }}</strong></p>

        <img :src="props.film.portada" alt="">
        <div id="likes">
            <p>Likes <span>{{ props.film.likes }}</span></p>
            <button :class="className" @click="addLike">{{ is_liked ? "-" : "+" }}</button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { type Pelicula } from '../interfaces/Pelicula.ts';
import { computed, ref } from 'vue';
const like = ref(1);

const is_liked = ref(false);
const props = defineProps<{ film: Pelicula }>()
const emits = defineEmits(['addLike'])
const className = computed(() => {
    return is_liked.value ? 'red' : 'blue';
});
const addLike = () => {
    if (!is_liked.value) {
        is_liked.value = true;
        emits('addLike', { id: props.film.id, likes: like.value })
    } else {
        is_liked.value = false;
        emits('addLike', { id: props.film.id, likes: like.value * -1 })
    }

};



</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.film-card {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 2px solid #373738;

    h1 {
        font-size: 1.5rem;
        margin: 0.7rem 0;
        color: #007BFF;
    }

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
    }

}


#director {
    font-size: 1rem;
    margin: 0.5rem 0;

    span {
        font-weight: bold;
    }
}

#likes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;

    span {
        font-size: 1.2rem;
        font-weight: bold;
    }

    button {
        width: 30px;
        height: 30px;
        margin: 0.25rem;
        color: white;
        border: none;
        border-radius: 50%;
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.5s ease;
        cursor: pointer;




    }
}

.blue {
    background-color: #007BFF;
    color: white;

    &:hover {
        background-color: #103d6c;
    }
}

.red {
    background-color: red;
    color: white;

    &:hover {
        background-color: #b64417;
    }
}
</style>