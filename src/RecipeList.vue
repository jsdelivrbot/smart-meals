<template>
  <p>recipes</p>
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

</style>
