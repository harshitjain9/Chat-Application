<template>
  <div id="app">
    <Navbar v-if="isLoggedIn" v-on:logout="clearUser"></Navbar>
    <Chat v-if="isLoggedIn"></Chat>
    <Login v-else></Login>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Chat from "./components/Chat/Chat";
import firebase from "firebase/app";
import "./assets/main.css";

export default {
  name: "App",
  components: {
    Navbar,
    Login,
    Chat,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = firebase.auth().currentUser;
  },
  computed: {
    isLoggedIn() {
      return this.user == null ? false : true;
    },
  },
  methods: {
    clearUser() {
      this.user = null;
      this.$$nextTick(() => {
        this.$$forceUpdate();
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  padding-top: 56px;
  min-width: 100vh;
}
</style>
