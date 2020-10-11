import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'raw-components';
import { Button as IButton } from 'raw-components/dist/types/components/my-button/my-button';
export declare interface MyButton extends Components.MyButton {
}
export declare class MyButton {
    protected z: NgZone;
    /** Emitted when the button has focus. */
    myFocus: IButton['myFocus'];
    /** Emitted when the button loses focus. */
    myBlur: IButton['myBlur'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface WebCheckbox extends Components.WebCheckbox {
}
export declare class WebCheckbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { WebDatepicker as IWebDatepicker } from 'raw-components/dist/types/components/datepicker/datepicker';
export declare interface WebDatepicker extends Components.WebDatepicker {
}
export declare class WebDatepicker {
    protected z: NgZone;
    /**  */
    valueChange: IWebDatepicker['valueChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { WebModal as IWebModal } from 'raw-components/dist/types/components/modal/modal';
export declare interface WebModal extends Components.WebModal {
}
export declare class WebModal {
    protected z: NgZone;
    /**  */
    dimiss: IWebModal['dimiss'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
