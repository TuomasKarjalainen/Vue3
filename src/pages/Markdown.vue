<template>
<div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
        <article class="w-1/2 border shadow-xl">
            <textarea ref="markdownTextArea" class="w-full h-full px-4 py-2" :value="text" placeholder="Type something..."
            @input="update"></textarea>
        </article>
        <article class="w-1/2 border shadow-xl bg-gray-100 px-4 py-2"
        v-html="markedText"></article>
    </section>
</div>
</template>

<script>

import {marked} from "marked";
import useDebounce from "../utilities/composition/useDebounce"

export default {
    setup(){},
    
    data(){
        return{
            text: "",
            debounce: "",
        };
    },
    computed:{
        markedText(){
            return marked(this.text);
        },
    },
    methods:{
        update(e){
            const task = () => (this.text = e.target.value);
            this.debounce(task, 500);
        },

    },
    mounted(){
        this.debounce = useDebounce();
        this.$refs.markdownTextArea.focus();
    },
}
</script>

