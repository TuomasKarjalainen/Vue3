<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
        <div class="border rounded-lg">
          <div class="h-64 p-2">
            <div v-for="chat in state.chats" :key="chat.message" class="w-full" :class="chat.userId === state.userId ? 'text-right' : '' ">
              {{ chat.message }}
            </div>
          </div>
          <div class="h-8 p-2">
            <input 
            v-model="state.message" 
            placeholder="Start Typing..." 
            class="p-1 border rounded shadow"
            @keydown.enter="addMessage"
            />
          </div>
        </div>
     </div>
  </section>
</template>

<script>

import { onMounted, reactive } from 'vue';
import app, {chatsRef} from '../utilities/firebase';
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, push, set} from "firebase/database";

export default {

  setup(){
    const state = reactive({
      chats: [],
      message:"",
      userId: null,
    });

    const auth = getAuth(app);

    onMounted(async () => {
      onValue(chatsRef, (snapshot) => {
        state.userId = auth.currentUser.uid;
        state.chats.push({key:snapshot.key, ...snapshot.val()})
        // push(state.chats({key:snapshot.key, ...snapshot.val()}))
      })
    });

    function addMessage(){
      const db = getDatabase(app);
      const newChatRef = ref(db, 'chats');
      const newChat = push(newChatRef);
      set(newChat,{userId: state.userId, message:state.message});
      state.message = "";
    }

    return { state, addMessage };
  },
}
</script>