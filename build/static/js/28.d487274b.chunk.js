(this.webpackJsonpcoldgate=this.webpackJsonpcoldgate||[]).push([[28],{304:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_photo_picker",(function(){return l}));var r=i(21),o=i(12),a=i(11),l=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerTitle=a.a.PHOTO_PICKER_TITLE,this.headerHint=a.a.PHOTO_PICKER_HINT,this.placeholderHint=a.a.PHOTO_PICKER_PLACEHOLDER_HINT,this.buttonText=a.a.PHOTO_PICKER_BUTTON_TEXT,this.handleClick=function(){},this.handleInput=function(e){t.file=e.target.files[0];var i=new FileReader;i.onload=function(e){var r=i.result;t.previewState=r},i.readAsDataURL(t.file)}}return e.prototype.componentWillLoad=function(){this.previewState=this.previewSrc},e.prototype.render=function(){var e=this;return Object(r.i)("div",{class:"photo-picker-container"},Object(r.i)("amplify-section",null,Object(r.i)("div",{class:"header"},o.a.get(this.headerTitle)),Object(r.i)("div",{class:"header-hint"},o.a.get(this.headerHint)),Object(r.i)("amplify-picker",{acceptValue:"image/*",inputHandler:this.handleInput},Object(r.i)("div",{class:"picker-body",slot:"picker"},this.previewState?Object(r.i)("img",{src:""+this.previewState}):Object(r.i)("amplify-icon",{name:"photoPlaceholder"}))),Object(r.i)("div",{class:"placeholder-hint"},o.a.get(this.placeholderHint)),Object(r.i)("amplify-button",{handleButtonClick:function(){return e.handleClick(e.file)}},o.a.get(this.buttonText))))},e}();l.style=":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}"}}]);
//# sourceMappingURL=28.d487274b.chunk.js.map