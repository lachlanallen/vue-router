<template>
  <div class="hello">
    <h1>Random Facts</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "93156b0422mshd37ebfced7b9b45p123b35jsn55f24b60b960",
          "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
        },
      })
        .then((response) => {
          response.json().then((data) => {
            this.fact = data[0].fact;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
