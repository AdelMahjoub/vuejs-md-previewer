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
    <foot></foot>
    <transition enter-active-class="animated bounceInDown" leave-to-class="animated bounceOutUp">
      <modal-form v-show="modalIsOpen"></modal-form>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import ToolBar from './components/ToolBar';
import Preview from './components/Preview';
import Markdown from './components/Markdown';
import ModalForm from './components/ModalForm';
import Foot from './components/Foot';
import store from './store.js';

export default {
  name: 'app',
  components: {
    Navbar,
    ToolBar,
    Markdown,
    Preview,
    ModalForm,
    Foot
  },
  data() {
    return {
      title: store.appTitle,
      modalIsOpen: false,
    }
  },
  created() {
    this.$on('prepare-link', linkType => {
      this.modalIsOpen = true;
      this.$emit('open-modal', linkType);
    })
    this.$on('close-modal', () => {
      this.modalIsOpen = false;
    })
  }
}
</script>

<style>
#markdown, #preview {
  font-size: 14px;
}
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
   background-color: #999;
}
.markdown-body ul {
  list-style: initial;
}
</style>