<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-useable Modal</h1>

      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title>
          Modal 1
        </template>
        <template #body>
          <p>This is the body slot for Model 1</p>
        </template>
      </Modal> 
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-10" @click="isModal1Open = true">Modal 1</button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <template #title>
          Modal 2 
        </template>
        <template #body>
          <p>This is the body slot for Model 2</p>
        </template>
      </Modal> 
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-10" @click="isModal2Open = true">Modal 2</button>
      
    </div>
  </section>
</template>

<script>
import Modal from '../components/Modal';
import {ref} from 'vue';
export default {
  components: { Modal },
  setup(){
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    return { isModal1Open, isModal2Open };
  },

}
</script>

<style>

</style>