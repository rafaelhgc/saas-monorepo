import{Ba as s,V as r,Z as i,na as n}from"./chunk-K7HKDJCH.js";var u=(()=>{class e{dsButton="primary";modifiers="";elementRef=r(n);renderer=r(s);get hostElement(){return this.elementRef.nativeElement}ngOnInit(){this.renderer.addClass(this.hostElement,"ds-button"),this.renderer.addClass(this.hostElement,`ds-button-${this.dsButton}`),this.modifiers.split(" ").map(t=>t.trim()).filter(t=>t.length).forEach(t=>this.renderer.addClass(this.hostElement,`--is-${t}`))}static \u0275fac=function(d){return new(d||e)};static \u0275dir=i({type:e,selectors:[["a","dsButton",""],["button","dsButton",""]],inputs:{dsButton:"dsButton",modifiers:"modifiers"},standalone:!0})}return e})();var h=(()=>{class e{elementRef=r(n);renderer=r(s);get hostElement(){return this.elementRef.nativeElement}ngOnInit(){this.renderer.addClass(this.hostElement,"ds-input-field")}static \u0275fac=function(d){return new(d||e)};static \u0275dir=i({type:e,selectors:[["input","dsInputField",""],["textarea","dsInputField",""],["select","dsInputField",""]],standalone:!0})}return e})();export{u as a,h as b};
