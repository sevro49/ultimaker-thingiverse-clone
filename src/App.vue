<template>
  <ThingHeader />
  <ThingCard />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
 

 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThingHeader from './components/ThingHeader.vue'
import ThingCard from './components/ThingCard.vue'


export default {
  name: 'App',
  components: {
    HelloWorld, ThingCard, ThingHeader
  }
}
</script>

<style>
:root{
  --thing-blue: #196ef0;
}

.bg-thing-blue{
  background: #196ef0;
}
.bg-thing-dark-blue{
  background: #10469c !important;
}

.text-thing-blue{
  color: #196ef0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
