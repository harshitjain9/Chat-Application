<template>
    <div v-if="users[from]" class="message" v-bind:class=" { right: from===currentUser.uid, left: from !== currentUser.uid } ">
        <span class="displayName">{{users[from].displayName}}</span>
        <span class="content">{{content}}</span>
        <span class="timestamp">{{time}}</span>  
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: ['content', 'from', 'timestamp', 'currentUser', 'users'],
    computed: {
        time() {
            return moment(this.timestamp.seconds * 1000).format('LT')
        }
    }
}
</script>

<style scoped>
.message{
    width: auto;
    max-width: 300px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    position: relative;
    border-radius: 10px;
}
.message.left{
    align-self: flex-start;
    background-color: white;
    color: #4d4d4d;
}
.message.right{
    align-self: flex-end;
    background-color: #1A233B;
    color: #DDD;
}
.displayName{
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 0.2rem;
    display: block;
    font-size: 0.9rem;
}
.timestamp{
    width: auto;
    font-size: 0.8rem;
    padding-left: 0.5rem;
    text-align: right;
    float: right;
    position: relative;
    bottom: -0.2rem;
}
</style>