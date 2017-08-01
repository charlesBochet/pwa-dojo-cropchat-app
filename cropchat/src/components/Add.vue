<template>
  <div>
    <md-card
      class="add-card"
    >
      <form>
        <md-input-container>
          <label>Image Url</label>
          <md-input v-model="url"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Title</label>
          <md-input v-model="title"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary" @click="pushCat">Save</md-button>
      </form>
    </md-card>
  </div>
</template>

<script>
  import { catsRef } from '../database'
  import router from '../router'
  export default {
    name: 'hello',
    data: {
      url: '',
      title: ''
    },
    firebase: {
      cats: catsRef
    },
    methods: {
      pushCat: function () {
        catsRef.push({
          title: this.title,
          url: this.url
        })
        router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .add-card {
    margin: 20px;
    padding: 20px;
    z-index: 0;
  }
  .home__add-button {
    position: fixed;
    bottom: 15px;
    right: 10px;
    z-index: 1;
  }
</style>
