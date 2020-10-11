import { __decorate, __extends } from 'tslib';
import { HostListener, ElementRef, Directive, ChangeDetectorRef, NgZone, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { applyPolyfills, defineCustomElements } from 'raw-components/loader';

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
        HostListener('focusout')
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
        { type: ElementRef }
    ]; };
    NumericValueAccessor = NumericValueAccessor_1 = __decorate([
        Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'my-input[type=number]',
            host: {
                '(myChange)': 'handleChangeEvent($event.target.value)'
            },
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
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
        { type: ElementRef }
    ]; };
    TextValueAccessor = TextValueAccessor_1 = __decorate([
        Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'my-input[type=text]',
            host: {
                '(myChange)': 'handleChangeEvent($event.target.value)'
            },
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
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
    events.forEach(function (eventName) { return (instance[eventName] = fromEvent(el, eventName)); });
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
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyButton = __decorate([
        ProxyCmp({
            inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
        }),
        Component({
            selector: 'my-button',
            changeDetection: ChangeDetectionStrategy.OnPush,
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
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    WebCheckbox = __decorate([
        ProxyCmp({
            inputs: ['_id', 'checked', 'description', 'disabled', 'error', 'label', 'name']
        }),
        Component({
            selector: 'web-checkbox',
            changeDetection: ChangeDetectionStrategy.OnPush,
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
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    WebDatepicker = __decorate([
        ProxyCmp({
            inputs: ['class', 'disabled', 'forceCustom', 'localeCode', 'max', 'min', 'monthPicker', 'placeholder', 'value']
        }),
        Component({
            selector: 'web-datepicker',
            changeDetection: ChangeDetectionStrategy.OnPush,
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
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    WebModal = __decorate([
        ProxyCmp({
            inputs: ['backdropDismiss', 'centered', 'size', 'toggle']
        }),
        Component({
            selector: 'web-modal',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: '<ng-content></ng-content>',
            inputs: ['backdropDismiss', 'centered', 'size', 'toggle'],
            outputs: ['dimiss']
        })
    ], WebModal);
    return WebModal;
}());

applyPolyfills().then(function () { return defineCustomElements(window); });
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
        NgModule({
            declarations: DECLARATIONS,
            exports: DECLARATIONS,
            imports: [],
            providers: [],
        })
    ], RawModule);
    return RawModule;
}());

// DIRECTIVES

/**
 * Generated bundle index. Do not edit.
 */

export { MyButton, NumericValueAccessor, RawModule, TextValueAccessor, WebCheckbox, WebDatepicker, WebModal, ValueAccessor as ɵa, ProxyCmp as ɵb };
//# sourceMappingURL=raw-angular-components.js.map
