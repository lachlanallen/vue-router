<template>
  <div>
    <h1></h1>
    <HelloWorld />
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
};
</script>
