<template>
  <section class="flex w-full">
    <div class=" bg-gray-50 mt-20 m-auto border rounded py-2 px-4 shadow-lg border-gray-400">
      <h1 class="text-2xl text-center">Calculator</h1>    
      <p class="bg-white bottom-0 border rounded shadow border-gray-400 text-3xl text-right mt-10 w-60 h-10 overflow-x-auto" style="direction:rtl">{{ currentNumber }}</p>
      <div class="mt-4 h-5" >
        <small class="font-semibold" v-if="selectedOpretaion"> {{ prevNumber }} {{ selectedOpretaion }} {{ currentNumber }}</small>
      </div>
      <div class="mt-5 grid grid-cols-4 gap-4" >
        <button @click="pressed('1')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">1</button>
        <button @click="pressed('2')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">2</button>
        <button @click="pressed('3')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">3</button>
        <button @click="pressed('+')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">+</button>
        <button @click="pressed('4')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">4</button>
        <button @click="pressed('5')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">5</button>
        <button @click="pressed('6')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">6</button>
        <button @click="pressed('-')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">-</button>
        <button @click="pressed('7')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">7</button>
        <button @click="pressed('8')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">8</button>
        <button @click="pressed('9')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">9</button>
        <button @click="pressed('*')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-200 text-gray-800 border-gray-400 shadow">×</button>
        <button @click="pressed('c')" class="bg-gray-200 p-2 border rounded h-10 font-semibold hover:bg-gray-100 text-gray-800 border-gray-400 shadow">C</button>
        <button @click="pressed('0')" class="bg-white p-2 border rounded h-10 font-semibold hover:bg-gray-100 text-gray-800 border-gray-400 shadow">0</button>
        <button @click="pressed('=')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-100 text-gray-800 border-gray-400 shadow">=</button>
        <button @click="pressed('/')" class="bg-white p-2 border rounded w-10 h-10 font-semibold hover:bg-gray-100 text-gray-800 border-gray-400 shadow">÷</button>
      </div>
    </div>
  </section>
</template>

<script>

import { ref } from 'vue'
import useWindowEvent from '../utilities/composition/useWindowEvent';

export default {
  setup(){

    // const calculations = ref("");
    const operations = ['+', '-', '*', '/',];
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const currentNumber = ref("");
    const prevNumber = ref("");
    const selectedOpretaion = ref("");

    function pressed(value){
      if(value === '=' || value === "Enter") calculate();
      else if (value === 'c') clear(); 
      else if (operations.includes(value)) applyOperation(value);
      else if(numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value){
      currentNumber.value = currentNumber.value + value;
    }

    function applyOperation(value){
      calculate();
      prevNumber.value = currentNumber.value;
      currentNumber.value = "";
      selectedOpretaion.value = value;
    }

    function calculate(){
      if(selectedOpretaion.value === '*') multiply();
      else if(selectedOpretaion.value === '/') divide();
      else if(selectedOpretaion.value === '-') subtract();
      else if(selectedOpretaion.value === '+') sum();
      prevNumber.value = "";
      selectedOpretaion.value = "";
    }

    function multiply(){
      currentNumber.value = prevNumber.value * currentNumber.value;
    }

    function divide(){
      currentNumber.value = prevNumber.value / currentNumber.value;
    }
    function subtract(){
      currentNumber.value = prevNumber.value - currentNumber.value;
    }

    function sum(){
      currentNumber.value = +prevNumber.value + +currentNumber.value;
    }

    function clear(){
      currentNumber.value = "";
    }

    const handleKeydown = (e) => pressed(e.key);
    useWindowEvent('keydown',handleKeydown);
    return { currentNumber, pressed, selectedOpretaion, prevNumber, handleKeydown };
  },
}
</script>