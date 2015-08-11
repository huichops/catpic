Class(CP.UI, 'Image').inherits(Widget)({
  HTML : '<img></img>',
  prototype : {
    rounded:  false,
    errorURL: '/images/error.png',

    init: function init(config) {
      Widget.prototype.init.call(this, config);
      if (config.rounded) this.setRounded();
      this.setSrc(config.src);

      this._bindEvents();
    },

    _bindEvents: function _bindEvents() {
      this.element[0].addEventListener('error',
        this._errorLoadHandler.bind(this), false);
    },

    _errorLoadHandler: function _errorLoadHandler() {
      this.setSrc(this.errorURL);
    },

    getElement: function getElement() {
      return this.element;
    },

    setSrc: function setSrc(url) {
      this.element.attr('src', url);

      return this;
    },

    setRounded: function setRounded() {
      this.element.addClass('rounded');
      return this;
    },

    destroy : function destroy() {
      Widget.prototype.destroy.call(this);
    }
  }
})

