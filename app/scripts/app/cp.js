Class(CP, 'App').includes(CustomEventSupport, NodeSupport, CoolMessage)({
  prototype: {
    _ui: null,

    init: function init() {
      this._ui = {
        container:  document.querySelector('#app-container')
      }
    },
    
    run: function run() {
      this.appendChild(new CP.UI.Slider({
        name: 'width',
        min: 100,
        max: 500,
        value: 200
      })).render(this._ui.container);

      this.appendChild(new CP.UI.Slider({
        name: 'height',
        min: 100,
        max: 500,
        value: 200
      })).render(this._ui.container);

      this.appendChild(new CP.UI.Thumb({
          name: 'thumb',
          src: 'http://placekitten.com/500/499',
          msg: this.getCoolMessage('cat')
        })).render(this._ui.container);

      this._bindEvents();
      this.setNewImage();
    },

    setNewImage: function setNewImage() {
      this.thumb.setSize(this.width.value, this.height.value);
    },
    
    _bindEvents: function bindEvents() {
      CP.UI.Slider.bind('change', function(data) {
        this._sliderChangeHandler.call(this, data);
      }.bind(this));
    },

    _sliderChangeHandler: function _sliderChangeHandler(element) {
      this.setNewImage();
    }
  }
});
