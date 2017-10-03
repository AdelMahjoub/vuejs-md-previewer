const store = {
  appTitle: 'markdown previewer',
  socials: {
    github: 'https://github.com/AdelMahjoub',
  },
  toolbar: {
    actions: [
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
    ]
  }
}

export default store;