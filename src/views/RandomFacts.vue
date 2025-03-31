<template>
  <div>
    <h1></h1>
    <HelloWorld />
    <br />
    <router-link to="/" class="back-button">Back</router-link>
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
