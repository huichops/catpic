Class(CP.UI, 'Slider').inherits(Widget)({
  HTML : '\
  <div class="form-group">\
    <label></label>\
    <div class="row">\
      <div class="col-md-2">\
        <input class="form-control" type="text" disabled>\
      </div>\
      <div class="col-md-8">\
        <input type="range" step="1" class="slider">\
      </div>\
    </div>\
  </div>\
  </div>\
  ',

  prototype : {

    text: null,
    range: null,
    label: null,
    min: 100,
    max: 500,
    value: 200,
    init : function init(config) {
      Widget.prototype.init.call(this, config);
      this.min = config.min || this.min;
      this.max = config.max || this.max;
      this.value = config.value || this.value;

      this.text = this.element[0].querySelector('input[type="text"]') 
      this.range = this.element[0].querySelector('input[type="range"]') 
      this.label = this.element[0].querySelector('label') 

      this.label.setAttribute('for', config.name);
      this.label.textContent = config.name;
      this.text.setAttribute('id', config.name);
      this.range.setAttribute('id', 'slider-' + config.name);
      this.range.setAttribute('min', this.min);
      this.range.setAttribute('max', this.max);

      this.updateValues();

      this._bindEvents();
    },

    _bindEvents: function _bindEvents() {
      this.range.addEventListener('change', 
          this._rangeChangeHandler.bind(this), false);

    },

    _rangeChangeHandler: function _rangeChangeHandler() {
      this.updateValues(this.range.value);
      this.constructor.dispatch('change', this);
    },

    getElement: function getElement() {
      return this.element;
    },

    updateValues: function updateValues(value) {
      this.value = value || this.value;
      this.range.value = this.value;
      this.text.value = this.value;
    },

    destroy: function destroy() {
      this.label = null;
      this.text = null;
      this.range = null;

      Widget.prototype.destroy.call(this);
    }


  }
})

