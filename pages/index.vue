<template>
  <section class="section">
    <h2 class="title">Películas</h2>
    <!-- Empieza la parte de la búsqueda -->
<div class="columns">
  <div class="column">
    <form action="" v-on:submit.prevent="search">
      <b-input
        type="text"
        id="searchInput"
        v-model="searchText"
        placeholder="Filtro por título"
        required>
      </b-input>
    </form>
  </div>
  <div class="column">
    <a class="button is-primary" @click="search">Buscar</a> &nbsp;
    <a class="button is-info" @click="clear">Limpiar</a>
  </div>
</div>
<br>
<!-- Fin de la búsqueda -->
    <div class="columns is-mobile is-multiline">
      <Pelicula
      v-for="peli in pelis"
      :key="peli.id"
      :peli="peli"
      />
    </div>
  </section>
</template>

<script>
import Pelicula from "~/components/Pelicula";

export default {
  name: "HomePage",

  components: {
    Pelicula
  },
  data: function () {
   return {     
     searchText:''
   };
  },
  asyncData({$axios}){
    return $axios.get("peliculas/?ordering=-favoritos").then(res=>{
      // console.log(res);
      return {
        pelis: res.data
      };      
    });  
  },
  methods:{
    search () {
      this.pelis = []
      this.$el.querySelector('#searchInput').blur()  // esconder teclado
      return this.$axios.get('/peliculas/', {
        params: {
          'search': this.searchText,
          'ordering': '-favoritos'
        }
      })
      .then((res) => {
        this.pelis = res.data
      })
    },
    clear () {
      this.searchText = '';
      this.search()
    }
  }
};
</script>
