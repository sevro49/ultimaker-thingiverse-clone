<template>
    <ThingHeader />

    <router-link to="/">
    </router-link>

    <router-view />

    <ThingFooter />
</template>

<script>
import ThingHeader from "./components/Layout/ThingHeader.vue";
import ThingFooter from "./components/Layout/ThingFooter.vue";

export default {
    name: "App",
    components: {
        ThingHeader,
        ThingFooter,
    },
};
</script>

<style>
:root {
    --thing-blue: #196ef0;
    --thing-dark-blue: #10469c;
}

a {
    text-decoration: none !important;
}

.bg-thing-blue {
    background: #196ef0;
}
.bg-thing-dark-blue {
    background: #10469c !important;
}

.text-thing-blue {
    color: #196ef0 !important;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
}
</style>
