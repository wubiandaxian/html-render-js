!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).HtmlRender={})}(this,function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e){var s=this;n(this,t),a(this,"params",{}),a(this,"create",function(){var e=s.params,n=e.title,a=e.name,t=e.className,e=e.list;if(0==e.length)throw new Error("value list can not be empty");var c='<div class="render-html-item '.concat(t,'">');return n&&(c+='<div class="title-class">'.concat(n,"</div>")),c+='<div class="render-html-continer">',e.forEach(function(e,n){c+='<div class="radio-box radio-box-'.concat(++seed,'">\n                    <input \n                        type="radio" \n                        ').concat(a?'name="'+a+'"':"",' \n                        value="').concat(e.value,'" \n                        id="').concat(e.id||"radio-"+seed,'" \n                        ').concat(e.className?'class="'+e.className+'"':"",' \n                    / ">\n                    <label for="').concat(e.id||"radio-"+seed,'" class="radio-label-').concat(seed,'">\n                        ').concat(e.label,"\n                    </label>\n                </div>")}),c+="</div></div>"}),this.params=e}function c(e){var s=this;n(this,c),a(this,"params",{}),a(this,"create",function(){var e=s.params,n=e.title,a=e.name,t=e.className,e=e.list;if(0==e.length)throw new Error("value list can not be empty");var c='<div class="render-html-item '.concat(t,'">');return n&&(c+='<div class="title-class">'.concat(n,"</div>")),c+='<div class="render-html-continer">',e.forEach(function(e,n){c+='<div class="checkbox-box checkbox-box-'.concat(++seed,'">\n                    <input \n                        type="checkbox" \n                        ').concat(a?'name="'+a+'"':"",' \n                        value="').concat(e.value,'" \n                        id="').concat(e.id||"checkbox-"+seed,'" \n                        ').concat(e.className?'class="'+e.className+'"':"",' \n                    / ">\n                    <label for="').concat(e.id||"checkbox-"+seed,'" class="checkbox-label-').concat(seed,'">\n                        ').concat(e.label,"\n                    </label>\n                </div>")}),c+="</div></div>"}),this.params=e}function s(e){var r=this;n(this,s),a(this,"params",{}),a(this,"create",function(){var e=r.params,n=e.title,a=e.name,t=e.className,c=e.label,s=e.value,i=e.id,e='<div class="render-html-item '.concat(t||"",'">');return n&&(e+='<div class="title-class">'.concat(n||"","</div>")),e+='<div class="render-html-continer">',e+='<div class="input-box ">',c&&(e+='<label for="input-label" class="input-label">\n                    '.concat(c||"","\n                </label>")),e+='<input \n                    type="text" \n                    name="'.concat(a||"",'"\n                    value="').concat(s||"",'" \n                    id="').concat(i||"",'" \n                    class="').concat(t||"",'"\n                / ">\n            </div>'),e+="</div></div>"}),this.params=e}function r(e){var i=this;n(this,r),a(this,"params",{}),a(this,"create",function(){var e=i.params,n=e.title,a=e.name,t=e.className,c=e.value,s=e.id,e='<div class="render-html-item '.concat(t||"",'">');return n&&(e+='<div class="title-class">'.concat(n||"","</div>")),e+='<div class="render-html-continer">\n                    <div class="input-box ">\n                        <textarea \n                            name="'.concat(a||"",'"\n                            id="textarea-label ').concat(s||"",'" \n                            class="').concat(t||"",'"\n                        ">').concat(c||"","</textarea>\n                \n                    </div>"),e+="</div></div>"}),this.params=e}function i(){}i.createInstance=function(e){switch(e.type){case"radio":return new t(e);case"checkbox":return new c(e);case"input":return new s(e);case"textarea":return new r(e)}},window.seed=1,e.render=function(e){return e.hasOwnProperty("length")?e.reduce(function(e,n,a){return e.push(i.createInstance(n).create()),e},[]):i.createInstance(e).create()},Object.defineProperty(e,"__esModule",{value:!0})});
