<template>
    <div class="userlist-container">
        <User v-for="user in getOnlineUsers"
        :key="user.uid"
        :displayName="user.displayName"
        :color="user.color"
        :uid="user.uid"></User>
    </div>
</template>

<script>

import {db} from "./../../firebase";
import firebase from "firebase/app";
import faker from "faker";
import User from "./User";
export default {
    components: {
        User
    },
    props: ['users'],
    mounted() {
        this.enterRoom();
    },
    methods: {
        enterRoom() {
            const authUser = firebase.auth().currentUser;

            const user = {
                uid: authUser.uid,
                displayName: authUser.displayName,
                color: faker.internet.color(),
                online: true
            }

            const userListRef = db.ref(`staticChatId/${authUser.uid}`);

            userListRef.update(user);

            userListRef.onDisconnect().update({
                online: false
            })
        }
    },
    computed: {
        getOnlineUsers() {
            return Object.values(this.users).filter(item => item.online) 
        }
    }
}
</script>

<style scoped>
.userlist-container{
    height: 56px;
    display: flex;
    background-color: white;
    border-radius: 10px;
    align-items: center;
    padding: 15px;
    margin-bottom: 15px;
}
.userlist-container > div:not(:first-child){
    margin-left: 15px;
}
</style>