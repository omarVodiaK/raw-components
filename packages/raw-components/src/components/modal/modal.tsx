import { Component, Prop, h, EventEmitter, Event, ComponentInterface } from '@stencil/core';

export type ModalSize = 'lg' | 'sm' | null;

@Component({
  tag: 'web-modal',
  styleUrl: 'modal.scss',
  shadow: false,
})
export class WebModal implements ComponentInterface {
  @Prop() backdropDismiss?: boolean = true;
  @Prop() centered?: boolean;
  @Prop() toggle?: boolean;
  @Prop() size?: ModalSize;

  @Event() dimiss: EventEmitter;

  dismissModal(): void {
    this.dimiss?.emit();
  }

  backDropClick(event?: MouseEvent): void {
    console.log('clicked', event, this.backdropDismiss, this.toggle, this.centered);
    event?.stopPropagation();
    this.backdropDismiss && this.dismissModal();
  }

  render() {
    return (
      <div
        class={{ 'show': this.toggle, 'modal-centered': this.centered, 'ac modal': true }}
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        onClick={event => this.backDropClick(event)}
      >
        <div role="document" class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header" />
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  this.dismissModal();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
