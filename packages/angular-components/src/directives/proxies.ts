/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'raw-components';

import { Button as IButton } from 'raw-components/dist/types/components/my-button/my-button';
export declare interface MyButton extends Components.MyButton {}
@ProxyCmp({
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'shape', 'size', 'strong', 'target', 'type'],
  outputs: ['myFocus', 'myBlur']
})
export class MyButton {
  /** Emitted when the button has focus. */
  myFocus!: IButton['myFocus'];
  /** Emitted when the button loses focus. */
  myBlur!: IButton['myBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myFocus', 'myBlur']);
  }
}


export declare interface WebCheckbox extends Components.WebCheckbox {}
@ProxyCmp({
  inputs: ['_id', 'checked', 'description', 'disabled', 'error', 'label', 'name']
})
@Component({
  selector: 'web-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['_id', 'checked', 'description', 'disabled', 'error', 'label', 'name']
})
export class WebCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { WebDatepicker as IWebDatepicker } from 'raw-components/dist/types/components/datepicker/datepicker';
export declare interface WebDatepicker extends Components.WebDatepicker {}
@ProxyCmp({
  inputs: ['class', 'disabled', 'forceCustom', 'localeCode', 'max', 'min', 'monthPicker', 'placeholder', 'value']
})
@Component({
  selector: 'web-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['class', 'disabled', 'forceCustom', 'localeCode', 'max', 'min', 'monthPicker', 'placeholder', 'value'],
  outputs: ['valueChange']
})
export class WebDatepicker {
  /**  */
  valueChange!: IWebDatepicker['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { WebModal as IWebModal } from 'raw-components/dist/types/components/modal/modal';
export declare interface WebModal extends Components.WebModal {}
@ProxyCmp({
  inputs: ['backdropDismiss', 'centered', 'size', 'toggle']
})
@Component({
  selector: 'web-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backdropDismiss', 'centered', 'size', 'toggle'],
  outputs: ['dimiss']
})
export class WebModal {
  /**  */
  dimiss!: IWebModal['dimiss'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dimiss']);
  }
}
