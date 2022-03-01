<template>
    <div class="m-auto border rounded px-4 py-2 shadow-lg mt-20">

      <h1 class="text-2xl my-2 text-center">Vue Calendar</h1> 

      <section class="mx-2 flex justify-between">
        <h2 class="font-bold">{{currentMonthName}}</h2>
        <h2 class="font-bold">{{currentYear}}</h2>
      </section>

      <section class="flex my-2">
        <p class="text-center" 
        style="width:14.28%" 
        v-for="day in days" 
        :key="day">{{day}}
        </p>
      </section>

      <section class="flex flex-wrap">
        <p 
        class="text-center" 
        style="width:14.28%" 
        v-for="num in startDay()" 
        :key="num">
        </p>

        <p class="text-center" 
        style="width:14.28%" 
        v-for="num in daysInMonth()" 
        :key="num"
        :class="currentDateClass(num)"
        >
        {{num}}
        </p>
      </section>
      <section class="flex justify-between my-4">
        <button class="border rounded g-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l shadow-lg" @click="previous">Previous</button>
        <button class="border rounded g-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l shadow-lg" @click="next">Next</button>
      </section>

    </div>
</template>

<script>
export default {
  data(){
    return{
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    }
  },
  methods:{
    daysInMonth(){
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay(){
      return new Date(this.currentYear, this.currentMonth, 0).getDay();
    },
    next(){
      if(this.currentMonth === 11){
        this.currentMonth = 0;
        this.currentYear++;
      } else{
        this.currentMonth++;
      }  
    },
    previous(){
      if(this.currentMonth === 0){
        this.currentMonth = 11;
        this.currentYear --;
      } else{
        this.currentMonth --;
      }  
    },
    currentDateClass(num){
      const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
      const curreFullDate = new Date().toDateString();
      return calendarFullDate === curreFullDate ? 'text-yellow-600 border rounded shadow-md' : '';
    },
  },
  computed:{
    currentMonthName(){
      return new Date(this.currentYear, this.currentMonth).toLocaleString('defaul', {month: 'long'});
    },
  },
}
</script>

