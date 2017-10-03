<template>
  <div class="navbar is-light">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <div class="navbar-item">
          <div class="level">
            <a href="/">
              <img 
              id="brand-logo"
              src="../assets/markdown-512.png" 
              alt="markdown previewer">
            </a>
            <span id="brand-title">{{ brand }}</span>
          </div>
        </div>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a
          class="navbar-item has-text-dark" 
          :href="socials.github"
          target="_blank">
            <span class="has-icon">
              <i class="fa fa-github fa-lg"></i>
              <span>Github</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'navbar',
  data() {
    return {
      brand: store.appTitle,
      socials: store.socials
    };
  }
}
</script>

<style scoped>
#brand-title {
  margin-left: 5px;
  text-transform: capitalize;
}
.navbar-brand > .navbar-item {
  padding-left: 0;
}
</style>
