(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('raw-components/loader')) :
    typeof define === 'function' && define.amd ? define('angular-components', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'raw-components/loader'], factory) :
    (global = global || self, factory(global['angular-components'] = {}, global.ng.core, global.ng.forms, global.rxjs, global.loader));
}(this, (function (exports, core, forms, rxjs, loader) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ValueAccessor = /** @class */ (function () {
        function ValueAccessor(el) {
            this.el = el;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        ValueAccessor.prototype.writeValue = function (value) {
            this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        };
        ValueAccessor.prototype.handleChangeEvent = function (value) {
            if (value !== this.lastValue) {
                this.lastValue = value;
                this.onChange(value);
            }
        };
        ValueAccessor.prototype._handleBlurEvent = function () {
            this.onTouched();
        };
        ValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        ValueAccessor.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        ValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this.el.nativeElement.disabled = isDisabled;
        };
        __decorate([
            core.HostListener('focusout')
        ], ValueAccessor.prototype, "_handleBlurEvent", null);
        return ValueAccessor;
    }());

    var NumericValueAccessor = /** @class */ (function (_super) {
        __extends(NumericValueAccessor, _super);
        function NumericValueAccessor(el) {
            return _super.call(this, el) || this;
        }
        NumericValueAccessor_1 = NumericValueAccessor;
        NumericValueAccessor.prototype.registerOnChange = function (fn) {
            _super.prototype.registerOnChange.call(this, function (value) {
                fn(value === '' ? null : parseFloat(value));
            });
        };
        var NumericValueAccessor_1;
        NumericValueAccessor.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        NumericValueAccessor = NumericValueAccessor_1 = __decorate([
            core.Directive({
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-input[type=number]',
                host: {
                    '(myChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor_1,
                        multi: true
                    }
                ]
            })
        ], NumericValueAccessor);
        return NumericValueAccessor;
    }(ValueAccessor));

    var TextValueAccessor = /** @class */ (function (_super) {
        __extends(TextValueAccessor, _super);
        function TextValueAccessor(el) {
            return _super.call(this, el) || this;
        }
        TextValueAccessor_1 = TextValueAccessor;
        var TextValueAccessor_1;
        TextValueAccessor.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        TextValueAccessor = TextValueAccessor_1 = __decorate([
            core.Directive({
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-input[type=text]',
                host: {
                    '(myChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor_1,
                        multi: true
                    }
                ]
            })
        ], TextValueAccessor);
        return TextValueAccessor;
    }(ValueAccessor));

    var proxyInputs = function (Cmp, inputs) {
        var Prototype = Cmp.prototype;
        inputs.forEach(function (item) {
            Object.defineProperty(Prototype, item, {
                get: function () {
                    return this.el[item];
                },
                set: function (val) {
                    var _this = this;
                    this.z.runOutsideAngular(function () { return (_this.el[item] = val); });
                },
            });
        });
    };
    var proxyMethods = function (Cmp, methods) {
        var Prototype = Cmp.prototype;
        methods.forEach(function (methodName) {
            Prototype[methodName] = function () {
                var _this = this;
                var args = arguments;
                return this.z.runOutsideAngular(function () { return _this.el[methodName].apply(_this.el, args); });
            };
        });
    };
    var proxyOutputs = function (instance, el, events) {
        events.forEach(function (eventName) { return (instance[eventName] = rxjs.fromEvent(el, eventName)); });
    };
    // tslint:disable-next-line: only-arrow-functions
    function ProxyCmp(opts) {
        var decorator = function (cls) {
            if (opts.inputs) {
                proxyInputs(cls, opts.inputs);
            }
            if (opts.methods) {
                proxyMethods(cls, opts.methods);
            }
            return cls;
        };
        return decorator;
    }

    var MyButton = /** @class */ (function () {
        function MyButton(c, r, z) {
            this.z = z;
            c.detach();
            this.el = r.nativeElement;
            proxyOutputs(this, this.el, ['myFocus', 'myBlur']);
        }
        MyButton.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        MyButton = __decorate([
            ProxyCmp({
                inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
            }),
            core.Component({
                selector: 'my-button',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type'],
                outputs: ['myFocus', 'myBlur']
            })
        ], MyButton);
        return MyButton;
    }());
    var WebCheckbox = /** @class */ (function () {
        function WebCheckbox(c, r, z) {
            this.z = z;
            c.detach();
            this.el = r.nativeElement;
        }
        WebCheckbox.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        WebCheckbox = __decorate([
            ProxyCmp({
                inputs: ['_id', 'checked', 'description', 'disabled', 'error', 'label', 'name']
            }),
            core.Component({
                selector: 'web-checkbox',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['_id', 'checked', 'description', 'disabled', 'error', 'label', 'name']
            })
        ], WebCheckbox);
        return WebCheckbox;
    }());
    var WebDatepicker = /** @class */ (function () {
        function WebDatepicker(c, r, z) {
            this.z = z;
            c.detach();
            this.el = r.nativeElement;
            proxyOutputs(this, this.el, ['valueChange']);
        }
        WebDatepicker.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        WebDatepicker = __decorate([
            ProxyCmp({
                inputs: ['class', 'disabled', 'forceCustom', 'localeCode', 'max', 'min', 'monthPicker', 'placeholder', 'value']
            }),
            core.Component({
                selector: 'web-datepicker',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['class', 'disabled', 'forceCustom', 'localeCode', 'max', 'min', 'monthPicker', 'placeholder', 'value'],
                outputs: ['valueChange']
            })
        ], WebDatepicker);
        return WebDatepicker;
    }());
    var WebModal = /** @class */ (function () {
        function WebModal(c, r, z) {
            this.z = z;
            c.detach();
            this.el = r.nativeElement;
            proxyOutputs(this, this.el, ['dimiss']);
        }
        WebModal.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        WebModal = __decorate([
            ProxyCmp({
                inputs: ['backdropDismiss', 'centered', 'size', 'toggle']
            }),
            core.Component({
                selector: 'web-modal',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['backdropDismiss', 'centered', 'size', 'toggle'],
                outputs: ['dimiss']
            })
        ], WebModal);
        return WebModal;
    }());

    loader.applyPolyfills().then(function () { return loader.defineCustomElements(window); });
    var DECLARATIONS = [
        // proxies
        WebCheckbox,
        WebDatepicker,
        WebModal,
        MyButton,
        // Value Accessors
        NumericValueAccessor,
        TextValueAccessor,
    ];
    var RawModule = /** @class */ (function () {
        function RawModule() {
        }
        RawModule = __decorate([
            core.NgModule({
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            })
        ], RawModule);
        return RawModule;
    }());

    exports.MyButton = MyButton;
    exports.NumericValueAccessor = NumericValueAccessor;
    exports.RawModule = RawModule;
    exports.TextValueAccessor = TextValueAccessor;
    exports.WebCheckbox = WebCheckbox;
    exports.WebDatepicker = WebDatepicker;
    exports.WebModal = WebModal;
    exports.ɵa = ValueAccessor;
    exports.ɵb = ProxyCmp;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-components.umd.js.map
