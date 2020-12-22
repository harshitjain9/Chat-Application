<template>
    <div class="user-icon" :style="`--user-color: ${color};--user-name: '${displayName}';`">
        {{displayName.substring(0,1).toUpperCase()}}
    </div>
</template>

<script>
export default {
    props: ['displayName', 'color', 'uid'],

}
</script>

<style scoped>
.user-icon{
    height: 36px;
    width: 36px;
    background-color: var(--user-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 100vh;
    color: white;
    position: relative;
}
.user-icon::after{
    content: var(--user-name);
    position: absolute;
    bottom: -35px;
    left: 0;
    background-color: #4d4d4d;
    padding: 5px 10px;
    border-radius: 10px;
    opacity: 0;
    white-space: nowrap;
    transition: 200ms ease-out opacity;
    z-index: 5;
}
.user-icon:hover::after{
    opacity: 1;
}
</style>