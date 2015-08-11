Class(CP.UI, 'Image').inherits(Widget)({
  HTML : '<img></img>',
  prototype : {
    rounded:  false,

    init : function init(config) {
      Widget.prototype.init.call(this, config);
      if (config.rounded) this.setRounded();
      this.setSrc(config.src);
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

