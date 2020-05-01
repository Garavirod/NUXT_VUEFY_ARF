<template>
  <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ peli.titulo }}</p>
      </header>
      <div class="card-image" @click="isModalActive = true">
        <figure class="image">
          <img :src="peli.imagen">
        </figure>
      </div>

      <!-- Modal para el resumen y año de estreno -->
      <b-modal :active.sync="isModalActive">
        <div class="card">
          <div class="card-content">
            <h2 class="title">
              {{ peli.titulo }}
              <small>({{ peli.estreno }})</small>
            </h2>
            <p>{{peli.resumen}}</p>
          </div>
        </div>
      </b-modal>
      <!-- Oie de página -->
      <footer class="card-footer">
        <a class="button is-light card-footer-item">
          <span>{{ peli.favoritos }}</span>
          <b-icon icon="star"></b-icon>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    peli: {
      type: Object
    }
  },
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>

<style>
.card-image,
.modal-background {
  cursor: pointer !important;
}
</style>