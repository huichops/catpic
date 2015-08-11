Class(CP.UI, 'Thumb').inherits(Widget)({
  HTML : '\
      <div class="outer">\
          <div class="content">\
          <p class="msg"></p>\
          </div>\
          <div class="img">\
          </div>\
      </div>\
  ',

  prototype : {

    imgContainer:  null,
    msgContainer: null,

    init : function init(config) {
      Widget.prototype.init.call(this, config);

      
      this.imgContainer = this.element[0].querySelector('.img');
      this.msgContainer = this.element[0].querySelector('.msg');

      this.appendChild(new CP.UI.Image({
        name: 'image',
        src: config.src
      })).render(this.imgContainer);

      this.msgContainer.textContent = config.msg;
    },

    getElement: function getElement() {
      return this.element;
    },

    setSrc: function setSrc(url) {
      this.image.attr('src', url);

      return this;
    },

    destroy: function destroy() {
      imgContainer =  null;
      msgContainer = null;
      Widget.prototype.destroy.call(this);
    }
  }
})

