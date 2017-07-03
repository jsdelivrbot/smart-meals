import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  
})

new Vue({
	el: '#app',
	render: h => h(App),
    data: {
	  	test: {},
	  	showForm: false,
	    activeRecipe: {},
	    ingredients: [{
	    	id: 1,
	      name: "Milk",
	      servings: [
	      {
	      	id: 1,
	        unitId: 3,
	        unit: "cup"
	      },
	      {
	      	id: 2,
	        unitId: 5,
	        unit: "liter"
	      }
	      ]
	    },
	    {
	    	id: 2,
	      name: "Egg",
	      servings: [
	      {
	      	id: 1,
	        unitId: 1,
	        unit: "unit"
	      }
	      ]
	    },
	    {
	    	id: 3,
	      name: "Coffee",
	      servings: [
	      {
	      	id: 1,
	        unitId: 2,
	        unit: "tbsp"
	      },
	      {
	      	id: 2,
	        unitId: 4,
	        unit: "grams"
	      }
	      ]
	    }],
	    recipes: [],
	  	recipes2 : [{
	    	id: 1,
	    	name: "Recipe A",
	      ingredients: [
	      {
	      	id: 1,
	        ingredientId: 1,
	        servingId: 1,
	        name: "Milk",
	        amount: "2",
	        unit: "cup"
	      },
	      {
	      	id: 2,
	        name: "Egg",
	        amount: "10",
	        unit: "unit"
	      }
	      ]
	    },
	    {
	    	id: 2,
	    	name: "pbj",
	      ingredients: [
	      {
	      	id: 1,
	        name: "Milk",
	        amount: "2 cups"
	      },
	      {
	      	id: 2,
	        name: "Egg",
	        amount: "1 unit"
	      }
	    	]	
	  	}]
	  ,
	  units: [
	  	{
	    	id: 1,
	      name: "unit"
	    },
	    {
	    	id: 2,
	      name: "tbsp"
	    },
	    {
	    	id: 3,
	      name: "cup"
	    },
	    {
	    	id: 4,
	      name: "gram"
	    },
	    {
	    	id: 5,
	      name: "liter"
	    }
	  ]
	},
  methods: {
  	newRecipe () {
    	this.showForm = true;
      this.activeRecipe = {};
    },
    editRecipe (recipe) {
    	this.showForm = true;
      this.activeRecipe = recipe;
    },
    saveRecipe () {
    	this.showForm = false;
    },
    cancelRecipe () {
    	this.showForm = false;
    },    
    deleteRecipe () {
    	if(!confirm("Delete " + this.activeRecipe.name + "?")) {
      	alert("not deleted");
        return;
      }
      
      alert("deleted: " + this.activeRecipe.name);
      this.showForm = false;
    }
  },
  //computed: {
  	//counter() {
    	//return this.clicks*2;
    //}
  //}
});