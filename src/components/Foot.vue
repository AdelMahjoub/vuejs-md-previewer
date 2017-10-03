<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>{{ appTilte }}</strong> by <a href="https://www.freecodecamp.org/adelmahjoub" target="_blank">{{ author }}</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY NC SA 4.0</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/AdelMahjoub/vuejs-md-previewer" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import store from '../store.js';

export default {
  name: 'foot',
  data() {
    return {
      appTitle: store.appTitle,
      author: store.author,
    };
  }  
}
</script>

<style scoped>
  footer {
    margin-top: 20px;
  }
</style>
