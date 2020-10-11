import { __decorate } from 'tslib';
import { HostListener, ElementRef, Directive, ChangeDetectorRef, NgZone, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { applyPolyfills, defineCustomElements } from 'raw-components/loader';

class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
__decorate([
    HostListener('focusout')
], ValueAccessor.prototype, "_handleBlurEvent", null);

var NumericValueAccessor_1;
let NumericValueAccessor = NumericValueAccessor_1 = class NumericValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    registerOnChange(fn) {
        super.registerOnChange(value => {
            fn(value === '' ? null : parseFloat(value));
        });
    }
};
NumericValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
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

var TextValueAccessor_1;
let TextValueAccessor = TextValueAccessor_1 = class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
};
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
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

const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
        });
    });
};
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
// tslint:disable-next-line: only-arrow-functions
function ProxyCmp(opts) {
    const decorator = function (cls) {
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

let MyButton = class MyButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['myFocus', 'myBlur']);
    }
};
MyButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
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
let WebCheckbox = class WebCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
WebCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
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
let WebDatepicker = class WebDatepicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['valueChange']);
    }
};
WebDatepicker.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
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
let WebModal = class WebModal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['dimiss']);
    }
};
WebModal.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
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

applyPolyfills().then(() => defineCustomElements(window));
const DECLARATIONS = [
    // proxies
    WebCheckbox,
    WebDatepicker,
    WebModal,
    MyButton,
    // Value Accessors
    NumericValueAccessor,
    TextValueAccessor,
];
let RawModule = class RawModule {
};
RawModule = __decorate([
    NgModule({
        declarations: DECLARATIONS,
        exports: DECLARATIONS,
        imports: [],
        providers: [],
    })
], RawModule);

// DIRECTIVES

/**
 * Generated bundle index. Do not edit.
 */

export { MyButton, NumericValueAccessor, RawModule, TextValueAccessor, WebCheckbox, WebDatepicker, WebModal, ValueAccessor as ɵa, ProxyCmp as ɵb };
//# sourceMappingURL=angular-components.js.map
