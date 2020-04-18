function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _createSuper(t){return function(){var e,n=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{s7LF:function(t,e,n){"use strict";var r=n("8Y7J"),i=(n("cUpR"),n("HDdC")),o=n("DH7j"),a=n("lJxs"),u=n("XoHu"),l=n("Cfvw");function s(t,e){return new i.a((function(n){var r=t.length;if(0!==r)for(var i=new Array(r),o=0,a=0,u=function(u){var s=Object(l.a)(t[u]),c=!1;n.add(s.subscribe({next:function(t){c||(c=!0,a++),i[u]=t},error:function(t){return n.error(t)},complete:function(){++o!==r&&c||(a===r&&n.next(e?e.reduce((function(t,e,n){return t[e]=i[n],t}),{}):i),n.complete())}}))},s=0;s<r;s++)u(s);else n.complete()}))}n.d(e,"f",(function(){return M})),n.d(e,"h",(function(){return x})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return N})),n.d(e,"b",(function(){return U}));var c=new r.o("NgValueAccessor"),h=function(t){_inherits(n,t);var e=_createSuper(n);function n(){return _classCallCheck(this,n),e.apply(this,arguments)}return _createClass(n,[{key:"formDirective",get:function(){return null}},{key:"path",get:function(){return null}}]),n}(function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"reset",value:function(t){this.control&&this.control.reset(t)}},{key:"hasError",value:function(t,e){return!!this.control&&this.control.hasError(t,e)}},{key:"getError",value:function(t,e){return this.control?this.control.getError(t,e):null}},{key:"value",get:function(){return this.control?this.control.value:null}},{key:"valid",get:function(){return this.control?this.control.valid:null}},{key:"invalid",get:function(){return this.control?this.control.invalid:null}},{key:"pending",get:function(){return this.control?this.control.pending:null}},{key:"disabled",get:function(){return this.control?this.control.disabled:null}},{key:"enabled",get:function(){return this.control?this.control.enabled:null}},{key:"errors",get:function(){return this.control?this.control.errors:null}},{key:"pristine",get:function(){return this.control?this.control.pristine:null}},{key:"dirty",get:function(){return this.control?this.control.dirty:null}},{key:"touched",get:function(){return this.control?this.control.touched:null}},{key:"status",get:function(){return this.control?this.control.status:null}},{key:"untouched",get:function(){return this.control?this.control.untouched:null}},{key:"statusChanges",get:function(){return this.control?this.control.statusChanges:null}},{key:"valueChanges",get:function(){return this.control?this.control.valueChanges:null}},{key:"path",get:function(){return null}}]),t}()),f=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){return _classCallCheck(this,n),e.call(this,t)}return n}(function(){function t(e){_classCallCheck(this,t),this._cd=e}return _createClass(t,[{key:"ngClassUntouched",get:function(){return!!this._cd.control&&this._cd.control.untouched}},{key:"ngClassTouched",get:function(){return!!this._cd.control&&this._cd.control.touched}},{key:"ngClassPristine",get:function(){return!!this._cd.control&&this._cd.control.pristine}},{key:"ngClassDirty",get:function(){return!!this._cd.control&&this._cd.control.dirty}},{key:"ngClassValid",get:function(){return!!this._cd.control&&this._cd.control.valid}},{key:"ngClassInvalid",get:function(){return!!this._cd.control&&this._cd.control.invalid}},{key:"ngClassPending",get:function(){return!!this._cd.control&&this._cd.control.pending}}]),t}());function d(t){return null==t||0===t.length}var y=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,v=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"min",value:function(t){return function(e){if(d(e.value)||d(t))return null;var n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}},{key:"max",value:function(t){return function(e){if(d(e.value)||d(t))return null;var n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}},{key:"required",value:function(t){return d(t.value)?{required:!0}:null}},{key:"requiredTrue",value:function(t){return!0===t.value?null:{required:!0}}},{key:"email",value:function(t){return d(t.value)?null:y.test(t.value)?null:{email:!0}}},{key:"minLength",value:function(t){return function(e){if(d(e.value))return null;var n=e.value?e.value.length:0;return n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}},{key:"maxLength",value:function(t){return function(e){var n=e.value?e.value.length:0;return n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}},{key:"pattern",value:function(e){return e?("string"==typeof e?(r="","^"!==e.charAt(0)&&(r+="^"),r+=e,"$"!==e.charAt(e.length-1)&&(r+="$"),n=new RegExp(r)):(r=e.toString(),n=e),function(t){if(d(t.value))return null;var e=t.value;return n.test(e)?null:{pattern:{requiredPattern:r,actualValue:e}}}):t.nullValidator;var n,r}},{key:"nullValidator",value:function(t){return null}},{key:"compose",value:function(t){if(!t)return null;var e=t.filter(p);return 0==e.length?null:function(t){return g(function(t,e){return e.map((function(e){return e(t)}))}(t,e))}}},{key:"composeAsync",value:function(t){if(!t)return null;var e=t.filter(p);return 0==e.length?null:function(t){return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(1===e.length){var r=e[0];if(Object(o.a)(r))return s(r,null);if(Object(u.a)(r)&&Object.getPrototypeOf(r)===Object.prototype){var i=Object.keys(r);return s(i.map((function(t){return r[t]})),i)}}if("function"==typeof e[e.length-1]){var l=e.pop();return s(e=1===e.length&&Object(o.a)(e[0])?e[0]:e,null).pipe(Object(a.a)((function(t){return l.apply(void 0,_toConsumableArray(t))})))}return s(e,null)}(function(t,e){return e.map((function(e){return e(t)}))}(t,e).map(_)).pipe(Object(a.a)(g))}}}]),t}();function p(t){return null!=t}function _(t){var e=Object(r.vb)(t)?Object(l.a)(t):t;if(!Object(r.ub)(e))throw new Error("Expected validator to return Promise or Observable.");return e}function g(t){var e=t.reduce((function(t,e){return null!=e?Object.assign({},t,e):t}),{});return 0===Object.keys(e).length?null:e}function C(t){return t.validate?function(e){return t.validate(e)}:t}function k(t){return t.validate?function(e){return t.validate(e)}:t}var m=function(){function t(){_classCallCheck(this,t),this._accessors=[]}return _createClass(t,[{key:"add",value:function(t,e){this._accessors.push([t,e])}},{key:"remove",value:function(t){for(var e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}},{key:"select",value:function(t){var e=this;this._accessors.forEach((function(n){e._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)}))}},{key:"_isSameGroup",value:function(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}]),t}();function V(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function b(t,e){var n;throw n=t.path.length>1?"path: '".concat(t.path.join(" -> "),"'"):t.path[0]?"name: '".concat(t.path,"'"):"unspecified name attribute",new Error("".concat(e," ").concat(n))}function A(t){return null!=t?v.compose(t.map(C)):null}function E(t){return null!=t?v.composeAsync(t.map(k)):null}function O(t){var e=w(t)?t.validators:t;return Array.isArray(e)?A(e):e||null}function S(t,e){var n=w(e)?e.asyncValidators:t;return Array.isArray(n)?E(n):n||null}function w(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}var D=function(){function t(e,n){_classCallCheck(this,t),this.validator=e,this.asyncValidator=n,this._onCollectionChange=function(){},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}return _createClass(t,[{key:"setValidators",value:function(t){this.validator=O(t)}},{key:"setAsyncValidators",value:function(t){this.asyncValidator=S(t)}},{key:"clearValidators",value:function(){this.validator=null}},{key:"clearAsyncValidators",value:function(){this.asyncValidator=null}},{key:"markAsTouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}},{key:"markAllAsTouched",value:function(){this.markAsTouched({onlySelf:!0}),this._forEachChild((function(t){return t.markAllAsTouched()}))}},{key:"markAsUntouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=!1,this._pendingTouched=!1,this._forEachChild((function(t){t.markAsUntouched({onlySelf:!0})})),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}},{key:"markAsDirty",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}},{key:"markAsPristine",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!0,this._pendingDirty=!1,this._forEachChild((function(t){t.markAsPristine({onlySelf:!0})})),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}},{key:"markAsPending",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}},{key:"disable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild((function(e){e.disable(Object.assign({},t,{onlySelf:!0}))})),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach((function(t){return t(!0)}))}},{key:"enable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild((function(e){e.enable(Object.assign({},t,{onlySelf:!0}))})),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach((function(t){return t(!1)}))}},{key:"_updateAncestors",value:function(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}},{key:"setParent",value:function(t){this._parent=t}},{key:"updateValueAndValidity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}},{key:"_updateTreeValidity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{emitEvent:!0};this._forEachChild((function(e){return e._updateTreeValidity(t)})),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}},{key:"_setInitialStatus",value:function(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}},{key:"_runValidator",value:function(){return this.validator?this.validator(this):null}},{key:"_runAsyncValidator",value:function(t){var e=this;if(this.asyncValidator){this.status="PENDING";var n=_(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe((function(n){return e.setErrors(n,{emitEvent:t})}))}}},{key:"_cancelExistingSubscription",value:function(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}},{key:"setErrors",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}},{key:"get",value:function(t){return function(t,e,n){return null==e?null:(e instanceof Array||(e=e.split(".")),e instanceof Array&&0===e.length?null:e.reduce((function(t,e){return t instanceof T?t.controls.hasOwnProperty(e)?t.controls[e]:null:t instanceof I&&t.at(e)||null}),t))}(this,t)}},{key:"getError",value:function(t,e){var n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}},{key:"hasError",value:function(t,e){return!!this.getError(t,e)}},{key:"_updateControlsErrors",value:function(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}},{key:"_initObservables",value:function(){this.valueChanges=new r.m,this.statusChanges=new r.m}},{key:"_calculateStatus",value:function(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}},{key:"_anyControlsHaveStatus",value:function(t){return this._anyControls((function(e){return e.status===t}))}},{key:"_anyControlsDirty",value:function(){return this._anyControls((function(t){return t.dirty}))}},{key:"_anyControlsTouched",value:function(){return this._anyControls((function(t){return t.touched}))}},{key:"_updatePristine",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}},{key:"_updateTouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}},{key:"_isBoxedValue",value:function(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}},{key:"_registerOnCollectionChange",value:function(t){this._onCollectionChange=t}},{key:"_setUpdateStrategy",value:function(t){w(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}},{key:"_parentMarkedDirty",value:function(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}},{key:"parent",get:function(){return this._parent}},{key:"valid",get:function(){return"VALID"===this.status}},{key:"invalid",get:function(){return"INVALID"===this.status}},{key:"pending",get:function(){return"PENDING"==this.status}},{key:"disabled",get:function(){return"DISABLED"===this.status}},{key:"enabled",get:function(){return"DISABLED"!==this.status}},{key:"dirty",get:function(){return!this.pristine}},{key:"untouched",get:function(){return!this.touched}},{key:"updateOn",get:function(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}},{key:"root",get:function(){for(var t=this;t._parent;)t=t._parent;return t}}]),t}(),P=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;return _classCallCheck(this,n),(t=e.call(this,O(i),S(o,i)))._onChange=[],t._applyFormState(r),t._setUpdateStrategy(i),t.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),t._initObservables(),t}return _createClass(n,[{key:"setValue",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.value=this._pendingValue=t,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach((function(t){return t(e.value,!1!==n.emitViewToModelChange)})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setValue(t,e)}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}},{key:"_updateValue",value:function(){}},{key:"_anyControls",value:function(t){return!1}},{key:"_allControlsDisabled",value:function(){return this.disabled}},{key:"registerOnChange",value:function(t){this._onChange.push(t)}},{key:"_clearChangeFns",value:function(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=function(){}}},{key:"registerOnDisabledChange",value:function(t){this._onDisabledChange.push(t)}},{key:"_forEachChild",value:function(t){}},{key:"_syncPendingControls",value:function(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}},{key:"_applyFormState",value:function(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}]),n}(D),T=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,r,i){var o;return _classCallCheck(this,n),(o=e.call(this,O(r),S(i,r))).controls=t,o._initObservables(),o._setUpdateStrategy(r),o._setUpControls(),o.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),o}return _createClass(n,[{key:"registerControl",value:function(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}},{key:"addControl",value:function(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"removeControl",value:function(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange((function(){})),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}},{key:"setControl",value:function(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange((function(){})),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"contains",value:function(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}},{key:"setValue",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(t),Object.keys(t).forEach((function(r){e._throwIfControlMissing(r),e.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach((function(r){e.controls[r]&&e.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._forEachChild((function(n,r){n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})})),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}},{key:"getRawValue",value:function(){return this._reduceChildren({},(function(t,e,n){return t[n]=e instanceof P?e.value:e.getRawValue(),t}))}},{key:"_syncPendingControls",value:function(){var t=this._reduceChildren(!1,(function(t,e){return!!e._syncPendingControls()||t}));return t&&this.updateValueAndValidity({onlySelf:!0}),t}},{key:"_throwIfControlMissing",value:function(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error("Cannot find form control with name: ".concat(t,"."))}},{key:"_forEachChild",value:function(t){var e=this;Object.keys(this.controls).forEach((function(n){return t(e.controls[n],n)}))}},{key:"_setUpControls",value:function(){var t=this;this._forEachChild((function(e){e.setParent(t),e._registerOnCollectionChange(t._onCollectionChange)}))}},{key:"_updateValue",value:function(){this.value=this._reduceValue()}},{key:"_anyControls",value:function(t){var e=this,n=!1;return this._forEachChild((function(r,i){n=n||e.contains(i)&&t(r)})),n}},{key:"_reduceValue",value:function(){var t=this;return this._reduceChildren({},(function(e,n,r){return(n.enabled||t.disabled)&&(e[r]=n.value),e}))}},{key:"_reduceChildren",value:function(t,e){var n=t;return this._forEachChild((function(t,r){n=e(n,t,r)})),n}},{key:"_allControlsDisabled",value:function(){for(var t=0,e=Object.keys(this.controls);t<e.length;t++){var n=e[t];if(this.controls[n].enabled)return!1}return Object.keys(this.controls).length>0||this.disabled}},{key:"_checkAllValuesPresent",value:function(t){this._forEachChild((function(e,n){if(void 0===t[n])throw new Error("Must supply a value for form control with name: '".concat(n,"'."))}))}}]),n}(D),I=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,r,i){var o;return _classCallCheck(this,n),(o=e.call(this,O(r),S(i,r))).controls=t,o._initObservables(),o._setUpdateStrategy(r),o._setUpControls(),o.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),o}return _createClass(n,[{key:"at",value:function(t){return this.controls[t]}},{key:"push",value:function(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"insert",value:function(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}},{key:"removeAt",value:function(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange((function(){})),this.controls.splice(t,1),this.updateValueAndValidity()}},{key:"setControl",value:function(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange((function(){})),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}},{key:"setValue",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(t),t.forEach((function(t,r){e._throwIfControlMissing(r),e.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"patchValue",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.forEach((function(t,r){e.at(r)&&e.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})})),this.updateValueAndValidity(n)}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._forEachChild((function(n,r){n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})})),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}},{key:"getRawValue",value:function(){return this.controls.map((function(t){return t instanceof P?t.value:t.getRawValue()}))}},{key:"clear",value:function(){this.controls.length<1||(this._forEachChild((function(t){return t._registerOnCollectionChange((function(){}))})),this.controls.splice(0),this.updateValueAndValidity())}},{key:"_syncPendingControls",value:function(){var t=this.controls.reduce((function(t,e){return!!e._syncPendingControls()||t}),!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}},{key:"_throwIfControlMissing",value:function(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index ".concat(t))}},{key:"_forEachChild",value:function(t){this.controls.forEach((function(e,n){t(e,n)}))}},{key:"_updateValue",value:function(){var t=this;this.value=this.controls.filter((function(e){return e.enabled||t.disabled})).map((function(t){return t.value}))}},{key:"_anyControls",value:function(t){return this.controls.some((function(e){return e.enabled&&t(e)}))}},{key:"_setUpControls",value:function(){var t=this;this._forEachChild((function(e){return t._registerControl(e)}))}},{key:"_checkAllValuesPresent",value:function(t){this._forEachChild((function(e,n){if(void 0===t[n])throw new Error("Must supply a value for form control at index: ".concat(n,"."))}))}},{key:"_allControlsDisabled",value:function(){var t,e=_createForOfIteratorHelper(this.controls);try{for(e.s();!(t=e.n()).done;){if(t.value.enabled)return!1}}catch(n){e.e(n)}finally{e.f()}return this.controls.length>0||this.disabled}},{key:"_registerControl",value:function(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}},{key:"length",get:function(){return this.controls.length}}]),n}(D),j=Promise.resolve(null),N=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,i){var o;return _classCallCheck(this,n),(o=e.call(this)).submitted=!1,o._directives=[],o.ngSubmit=new r.m,o.form=new T({},A(t),E(i)),o}return _createClass(n,[{key:"ngAfterViewInit",value:function(){this._setUpdateStrategy()}},{key:"addControl",value:function(t){var e=this;j.then((function(){var n=e._findContainer(t.path);t.control=n.registerControl(t.name,t.control),function(t,e){t||b(e,"Cannot find control with"),e.valueAccessor||b(e,"No value accessor for form control with"),t.validator=v.compose([t.validator,e.validator]),t.asyncValidator=v.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange((function(n){t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&V(t,e)}))}(t,e),function(t,e){t.registerOnChange((function(t,n){e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)}))}(t,e),function(t,e){e.valueAccessor.registerOnTouched((function(){t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&V(t,e),"submit"!==t.updateOn&&t.markAsTouched()}))}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange((function(t){e.valueAccessor.setDisabledState(t)})),e._rawValidators.forEach((function(e){e.registerOnValidatorChange&&e.registerOnValidatorChange((function(){return t.updateValueAndValidity()}))})),e._rawAsyncValidators.forEach((function(e){e.registerOnValidatorChange&&e.registerOnValidatorChange((function(){return t.updateValueAndValidity()}))}))}(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),e._directives.push(t)}))}},{key:"getControl",value:function(t){return this.form.get(t.path)}},{key:"removeControl",value:function(t){var e=this;j.then((function(){var n,r,i,o=e._findContainer(t.path);o&&o.removeControl(t.name),n=e._directives,r=t,(i=n.indexOf(r))>-1&&n.splice(i,1)}))}},{key:"addFormGroup",value:function(t){var e=this;j.then((function(){var n=e._findContainer(t.path),r=new T({});(function(t,e){null==t&&b(e,"Cannot find control with"),t.validator=v.compose([t.validator,e.validator]),t.asyncValidator=v.composeAsync([t.asyncValidator,e.asyncValidator])})(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})}))}},{key:"removeFormGroup",value:function(t){var e=this;j.then((function(){var n=e._findContainer(t.path);n&&n.removeControl(t.name)}))}},{key:"getFormGroup",value:function(t){return this.form.get(t.path)}},{key:"updateModel",value:function(t,e){var n=this;j.then((function(){n.form.get(t.path).setValue(e)}))}},{key:"setValue",value:function(t){this.control.setValue(t)}},{key:"onSubmit",value:function(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach((function(t){var e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})),this.ngSubmit.emit(t),!1;var e}},{key:"onReset",value:function(){this.resetForm()}},{key:"resetForm",value:function(t){this.form.reset(t),this.submitted=!1}},{key:"_setUpdateStrategy",value:function(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}},{key:"_findContainer",value:function(t){return t.pop(),t.length?this.form.get(t):this.form}},{key:"formDirective",get:function(){return this}},{key:"control",get:function(){return this.form}},{key:"path",get:function(){return[]}},{key:"controls",get:function(){return this.form.controls}}]),n}(h),L=new r.o("NgFormSelectorWarning"),x=function t(){_classCallCheck(this,t)},M=function t(){_classCallCheck(this,t)},U=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"withConfig",value:function(e){return{ngModule:t,providers:[{provide:L,useValue:e.warnOnDeprecatedNgFormSelector}]}}}]),t}()}}]);