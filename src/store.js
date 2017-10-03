const store = {
  appTitle: 'markdown previewer',
  author: 'Adel Mahjoub',
  socials: {
    github: 'https://github.com/AdelMahjoub/vuejs-md-previewer',
  },
  toolbar: {
    fontEvents: [
      {
        title: 'Selection text to uppercase',
        class: 'fa fa-font',
        textContent: null,
        function: 'titlecase'
      },
      {
        title: 'Selection text to lowercase',
        class: 'fa',
        textContent: 'a',
        function: 'lowercase'
      },
      {
        title: 'Capitalize selected text',
        class: 'fa',
        textContent: 'Aa',
        function: 'capitalize'
      },
      {
        title: 'Selection text to bold',
        class: 'fa fa-bold',
        textContent: null,
        function: 'bold'
      },
      {
        title: 'Selection text to italic',
        class: 'fa fa-italic',
        textContent: null,
        function: 'italic'
      },
      {
        title: 'Strikethrough selected text',
        class: 'fa fa-strikethrough',
        textContent: null,
        function: 'strikethrough'
      }
    ],
    keyEvents: [
      {
        title: 'Undo',
        class: 'fa fa-undo',
        trigger: 'undo'
      },
      {
        title: 'Redo',
        class: 'fa fa-repeat',
        trigger: 'redo'
      }
    ],
    listEvents: [
      {
        title: 'Unordered list',
        class: 'fa fa-list-ul',
        trigger: 'unordered'
      },
      {
        title: 'Ordered list',
        class: 'fa fa-list-ol',
        trigger: 'ordered'
      }
    ],
    linkEvents: [
      {
        title: 'Inline link',
        class: 'fa fa-link',
        trigger: 'link'
      },
      {
        title: 'Image',
        class: 'fa fa-picture-o',
        trigger: 'image'
      }
    ],
    miscEvents: [
      {
        title: 'Clear',
        class: 'fa fa-eraser',
        trigger: 'clear'
      }
    ]
  }
}

export default store;