Class(CP, 'App').includes(CustomEventSupport, NodeSupport)({
  prototype: {
    _ui: null,
    init: function() {
      this._ui = {
        container: $('#container')
      }
    },
    
    run: function() {
      this.appendChild(new CP.UI.Image({
          name: 'image',
          src: 'http://placekitten.com/500/450'
        }));

      this.image.render(this._ui.container);
    }
  }
});
