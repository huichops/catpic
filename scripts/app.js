Class(CP,"App").includes(CustomEventSupport,NodeSupport,CoolMessage)({prototype:{_ui:null,init:function(){this._ui={container:document.querySelector("#app-container")}},run:function(){this.appendChild(new CP.UI.Slider({name:"width",min:200,max:600,value:250})).render(this._ui.container),this.appendChild(new CP.UI.Slider({name:"height",min:100,max:500,value:200})).render(this._ui.container),this.appendChild(new CP.UI.Thumb({name:"thumb",src:"http://placekitten.com/500/499",msg:this.getCoolMessage("cat")})).render(this._ui.container),this._bindEvents(),this.setNewImage()},setNewImage:function(){this.thumb.setSize(this.width.value,this.height.value)},_bindEvents:function(){CP.UI.Slider.bind("change",function(e){this._sliderChangeHandler.call(this,e)}.bind(this))},_sliderChangeHandler:function(e){this.setNewImage()}}}),function(){cp=new CP.App,cp.run()}();