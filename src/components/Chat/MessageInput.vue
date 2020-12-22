<template>
  <form v-on:submit.prevent="sendMessage">
    <input
      type="text"
      placeholder="Enter your message here"
      v-model="messageInput"
    />
    <button>Send</button>
  </form>
</template>

<script>
import { firestore } from "./../../firebase";
import firebase from "firebase/app";

export default {
  data() {
    return {
      messageInput: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.messageInput == "") return;

      let user = firebase.auth().currentUser;

      const messageObject = {
        content: this.messageInput,
        ts: firebase.firestore.Timestamp.now(),
        user: user.uid,
      };

      const messageRef = firestore.collection("messages").doc("staticChatId");
      messageRef.update({
        messages: firebase.firestore.FieldValue.arrayUnion(messageObject),
      });

      this.messageInput = "";
    },
  },
};
</script>

<style scoped>
form {
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
}
input {
  width: 100%;
  padding: 5px 10px;
  outline: none;
}
button {
  margin-left: 15px;
}
</style>