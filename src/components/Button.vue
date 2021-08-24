<template>
    <button class="btn" :style="{background: color, color:text_color}"> {{text}} </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
            color: String,
            text_color: String,
        },
        
    }
</script>

<style>
    .btn {
        padding: 9px 17px;
        border-radius: 0px 7px 7px 0px;
        border-width: 0px;
        font-family: Segoe 'Segoe UI';
        font-weight: 500;
        cursor: pointer;
    }
</style>