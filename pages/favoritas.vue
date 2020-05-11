<template>
 <section class="section">
   <h2 class="title">Favoritas</h2>
   <div class="columns is-multiline">
     <Pelicula
       v-for="favorita in favoritas"
       :key="favorita.pelicula.id"
       :peli="favorita.pelicula"
     />
   </div>
 </section>
</template>

<script>
import Pelicula from "~/components/Pelicula";
export default {

  components: {
    Pelicula
  },

  fetch({ store, redirect }) {
    if (!store.state.user) {
      return redirect("/");
    }
  },
  asyncData({ store, $axios }) {
    if (store.state.token) {
      return $axios
        .get("/favoritas/", {
          headers: {
            Authorization: `Token ${store.state.token}`
          }
        })
        .then(res => {
          return {
            favoritas: res.data
          };
        });
    }
  }
};
</script>