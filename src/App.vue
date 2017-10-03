<template>
  <div id="app">
    <navbar></navbar>
    <div class="container is-fluid">
      <tool-bar></tool-bar>
      <div class="columns">
        <markdown></markdown>
        <preview></preview>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import ToolBar from './components/ToolBar';
import Preview from './components/Preview';
import Markdown from './components/Markdown';
import store from './store.js';

export default {
  name: 'app',
  components: {
    Navbar,
    ToolBar,
    Markdown,
    Preview,
  },
  data() {
    return {
      title: store.appTitle
    }
  },
  created() {
  }
}
</script>

<style>
#markdown, #preview {
  font-size: 14px;
}
</style>
