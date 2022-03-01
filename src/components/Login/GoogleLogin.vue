<template>
    <section class="mt-5 text-center">
        <button @click="loginWithGoogle" class=" bg-white hover:bg-gray-100 py-2 px-4 text-gray-800 font-semibold  border border-gray-400 rounded shadow">Login with Google</button> 
    </section>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
    methods:{
        loginWithGoogle(){
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider).then(()=>{
                this.$emit('close-login-from-google');
            });
        },
    },
}
</script>