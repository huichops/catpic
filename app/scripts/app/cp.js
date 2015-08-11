Class(CP, 'App').includes(CustomEventSupport, NodeSupport, CoolMessage)({
  prototype: {
    _ui: null,

    init: function() {
      this._ui = {
        container:  document.querySelector('#app-container')
      }
    },
    
    run: function() {
      this.appendChild(new CP.UI.Thumb({
          name: 'thumb',
          src: 'http://placekitten.com/300/401',
          msg: this.getCoolMessage('cat')
        })).render(this._ui.container);

    }
  }
});
