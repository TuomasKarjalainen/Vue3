<template>
    <nav class="w-full bg-gradient-to-r from-blue-900 to-blue-300 text-white px-4 py-2 active shadow-xl">
        <!-- <router-link class="mx-2 font-bold" to="/">Home</router-link>
        <router-link class="mx-2" to="/dc-heroes">Dc Heroes</router-link>
        <router-link class="mx-2" to="/calendar">Calendar</router-link>
        <router-link class="mx-2" to="/markdown">Markdown</router-link> -->
        <router-link class="mx-2 mr-5 font-bold hover:text-blue-200 border rounded inline-block px-4 py-2 border-white" to="/">Home</router-link>
        <router-link 
        v-for="item in list" 
        :key="item.to"
        class="mx-2 hover:text-blue-200" 
        :to="item.to">{{item.title}}
        </router-link>
        <button v-if="isLoggedIn" class="mx-2 hover:text-blue-200" @click="logout">Logout</button>
        <button v-else class="mx-2 hover:text-blue-200" @click="$emit('open-login-model')">Login</button>
    </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  props:{'isLoggedIn':{type:Boolean, required: false}},
  data(){
    return{
      list:[
        {title: "Dc Heroes", to:"/dc-heroes"},
        {title: "Calendar", to:"/calendar"},
        {title: "Markdown", to:"/markdown"},
        {title: "Slider", to:"/slider-carousel"},
        {title: "Calculator", to:"/calculator"},
        {title: "Modal", to:"/reuseable-modal"},
        {title: "Chat", to:"/chat"},
      ],
    };
  },
  methods:{
    logout(){
      const auth = getAuth();
      signOut(auth);
      // .then((res) => {
      //   // Sign-out successful.
      // }).catch((e) => {
      //   // An error happened.
      // });
    }
  }
}
</script>