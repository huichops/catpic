Class(CP.UI, 'Image').inherits(Widget)({
    HTML : '<img></img>',
    prototype : {
        init : function init(config) {
            Widget.prototype.init.call(this, config);
            this.setSrc(config.src);
        },

        getElement: function getElement() {
            return this.element;
        },

        setSrc: function setSrc(url) {
            this.element.attr('src', url);

            return this;
        },

        destroy : function destroy() {
            Widget.prototype.destroy.call(this);

            return null;
        }
    }
})

