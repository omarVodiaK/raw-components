import { Component, h, Prop, Host, Watch, Listen } from '@stencil/core';
import { isString } from '../../utils/utils';

@Component({
  tag: 'web-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: false,
})
export class WebCheckbox {
  @Prop() _id?: string;
  @Prop() name?: string;
  @Prop() disabled?: boolean;
  @Prop() label: HTMLElement;
  @Prop() description?: string | HTMLElement;
  @Prop() error?: string | HTMLElement;
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    console.log('checked', isChecked);
    // this.change.emit({
    //   checked: isChecked,
    // });
  }

  // @Event() click: EventEmitter;

  @Listen('click')
  handleNativeClick() {
    console.log('native click event listener');
    this.checked = !this.checked;
  }

  /**
  //  * Emitted when the checked property has changed.
  //  */
  // @Event() change: EventEmitter;

  // /**
  //  * Emitted when the toggle has focus.
  //  */
  // @Event() focus!: EventEmitter<void>;

  // /**
  //  * Emitted when the toggle loses focus.
  //  */
  // @Event() blur!: EventEmitter<void>;

  private handleClick() {
    this.checked = !this.checked;
  }

  private handleBlur = () => {
    // this.blur.emit();
  };

  private handleFocus = (e: UIEvent) => {
    console.log('handle focus', e);
    // this.focus.emit();
  };

  render() {
    return (
      <Host>
        <div class="seb-checkbox" onClick={this.handleClick}>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              name={this.name}
              id={this._id}
              class="custom-control-input"
              checked={this.checked}
              disabled={this.disabled}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <label class={{ 'disabled': this.disabled, 'custom-control-label': true }} htmlFor={this._id}>
              {isString(this.label) ? this.label : <slot name="label"></slot>}
            </label>
          </div>
          {isString(this.description) ? <p class="custom-control-description">{this.description}</p> : <slot name="description"></slot>}
        </div>
        {isString(this.error) ? <span class="text-danger">{this.error}</span> : <slot name="error"></slot>}
      </Host>
    );
  }
}
