<template>
  <div id="app">
    <h1>Smart Meals</h1>
    
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/ingredients">View Ingredients</router-link>
      <router-link to="/recipes">View Recipes</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    importIngredients() {
      // make call to /import
      var servings = localStorage.getItem("ingredient_nutrition"); 
      alert(0);
      alert(servings);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
