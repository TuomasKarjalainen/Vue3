<template>
    <div class="m-auto border rounded px-4 py-2 shadow-lg mt-20">
    <h1 class="text-2xl text-center mt-2">Dc Heroes {{ heroesCount }} </h1>
    <ul>
      <li class="flex justify-between mt-2" v-for="(hero, index) in dcHeroes" :key="hero.name">
        <div>
          {{hero.name}} 
        </div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" v-on:click="deleteHero(index)">Delete</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input class="bg-gray-50 border rounded px-4 py-2 shadow-md" v-model="newHero" placeholder="Type Hero Name Here" ref="newHeroRef">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-10" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
export default {
  setup(){
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeroes = ref([
      { name: "SuperGirl"},
      { name: "Flash"},
      { name: "Batman"},
      { name: "Arrow"},
      { name: "SuperMan"},
    ]);

    onMounted(()=>{
      newHeroRef.value.focus();
    });

    const heroesCount = computed({
      get:() => dcHeroes.value.length,
    });

    function deleteHero(index){
    // this.dcHeroes.splice(index,1)
      dcHeroes.value = dcHeroes.value.filter((hero,i) => i != index);
    }

    function addHero(){
      if(newHero.value !== ''){
        dcHeroes.value.push({ name: newHero.value});
        newHero.value = "";
      }
    }
    return{ dcHeroes, newHero, deleteHero, addHero, newHeroRef, heroesCount };
  },
}
</script>
