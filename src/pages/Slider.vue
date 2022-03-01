<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div 
          v-if="currentSlider == index" 
          :class="color"
          style="height:350px">
        </div>
      </transition>
    </div>
    <div class="w-full" style="height:340px">
      <div class="absolute bottom-0 flex w-full justify-center">
        <div 
        v-for="(slider,index) in sliders" 
        :key="slider" 
        @click="makeActive(index)"
        :class="currentSlider == index ? 'bg-gray-700' : 'bg-gray-300'"
        class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-lg">
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  data(){
    return{
      currentSlider: 1,
      sliders: ['bg-blue-500',
                'bg-yellow-500',
                'bg-green-400 '
               ],
      interval: '',
      isTitleShowing:true,
    };
  },
  methods:{
    makeActive(index){
      this.currentSlider = index;
    },
  },
  mounted(){
    this.interval = setInterval(()=>{
      this.currentSlider = this.currentSlider === 2 ? 0 : this.currentSlider+1;
    }, 2000);
  },
  beforeUnmount(){
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active{
  transition: all 1s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
</style>