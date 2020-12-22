<template>
    <div class="login-container">
        <h1>Login Page</h1>
        <div id="firebaseui-auth-container">
        </div>
    </div>
</template>

<script>

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/app";

    export default {
mounted(){
    let ui = firebaseui.auth.AuthUI.getInstance() ||  new firebaseui.auth.AuthUI(firebase.auth());

    ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    });
}
    }
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 25px;
}
</style>