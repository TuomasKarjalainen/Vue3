<template>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto bg-white p-2 border rounded shadow-2xl font-semibold w-1/3">
                <div class="p-2 border rounded">
                    <h1 class="text-2xl text-center">Login</h1>
                    <GoogleLogin @close-login-from-google="close" />
                    <p class="my-3 text-center">Or</p>
                    <form class="p-2 my-2" @submit.prevent="submit">
                        <div>
                            <!-- <label>Email or Username</label> -->
                            <input ref="loginField" v-model="email" class="hover:bg-gray-100 text-gray-800  border rounded shadow-md p-2 w-full" placeholder="Email or Username" />
                        </div>
                        <div class="my-4">
                            <!-- <label>Password</label> -->
                            <input v-model="password" class="hover:bg-gray-100  mb-5 border rounded shadow-md p-2 w-full" type="password" placeholder="Password"/>
                        </div>
                        <div class="my-4">
                            <button type="submit" class="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                <span v-if="!isLoading">Login</span>
                                <span v-else> Loading ⏳</span>
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import app from '../utilities/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from '../components/Login/GoogleLogin.vue'

export default {
    components:{GoogleLogin},

    data(){
        return{
            email:'',
            password:'',
            isLoading: false,
        }
    },
    methods:{
        submit(){
            this.isLoading = true;
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((res) => {
                console.log(res);
                this.isLoading = false;
                this.close();

            })
            .catch((e) => {
                console.log(e);
                this.isLoading = false;

            });
        },
        close(){
            this.$emit("close-login");
        },
    },
    mounted(){
        this.$refs.loginField.focus();
    },
};
</script>

