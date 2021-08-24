<template>
    <header>
        <h1 :style="{color:color}">
            {{ title }}
        </h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String,
            color: String,
        }
    }
</script>

<style scoped>
    h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: normal;
        font-size: 50px;
        text-align: center;
        text-shadow: 0px 0px 20px #68E6F5;
        display: block;
        
    }
</style>