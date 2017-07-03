<template>
<div>
  <h2>ingredients</h2>
  <button v-on:click="importIngredients">
    Import Ingredients
  </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  watch: {
    '$route' (to, from) {
        alert("load ingrs");
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

</style>
