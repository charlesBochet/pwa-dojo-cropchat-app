<template>
  <div>
    <md-card
      class="cat-card"
      v-for="(cat, index) in cats"
      v-bind:key="index"
    >
      <md-card-media>
        <img :src="cat.url" alt="People">
      </md-card-media>

      <md-card-content>
        {{ cat.title }}
      </md-card-content>
    </md-card>
    <router-link to="/add">
      <md-button class="md-fab md-primary home__add-button">
        <md-icon>add</md-icon>
      </md-button>
    </router-link>
  </div>
</template>

<script>
  import { catsRef } from '../database'
  export default {
    name: 'hello',
    firebase: {
      cats: catsRef
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .cat-card {
    margin: 20px;
    z-index: 0;
  }
  .home__add-button {
    position: fixed;
    bottom: 15px;
    right: 10px;
    z-index: 1;
  }
</style>
