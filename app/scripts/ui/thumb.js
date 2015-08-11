Class(CP.UI, 'Thumb').inherits(Widget)({
  HTML : '\
      <div class="outer">\
        <div class="inner">\
          <div class="content">\
          <h4 class="msg"></h4>\
          </div>\
          <div class="img">\
          </div>\
        </div>\
      </div>\
  ',

  prototype : {

    imgContainer:  null,
    msgContainer: null,
    _kittenURL: 'http://placekitten.com',

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

    setSize: function setSrc(width, height) {
      this.image.setSrc(this._getKittenURL(width, height));

      return this;
    },

    _getKittenURL: function _getKittenURL(width, height) {
      return this._kittenURL + '/' + width + '/' + height;
    },

    destroy: function destroy() {
      imgContainer =  null;
      msgContainer = null;
      Widget.prototype.destroy.call(this);
    }
  }
})

