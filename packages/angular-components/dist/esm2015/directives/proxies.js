import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
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
MyButton = tslib_1.__decorate([
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
export { MyButton };
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
WebCheckbox = tslib_1.__decorate([
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
export { WebCheckbox };
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
WebDatepicker = tslib_1.__decorate([
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
export { WebDatepicker };
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
WebModal = tslib_1.__decorate([
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
export { WebModal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Jhdy1hbmd1bGFyLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Byb3hpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFnQnZFLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFNbkIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGLENBQUE7O1lBTGdCLGlCQUFpQjtZQUFLLFVBQVU7WUFBZSxNQUFNOztBQU56RCxRQUFRO0lBVnBCLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7S0FDOUksQ0FBQztJQUNELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRSwyQkFBMkI7UUFD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QUFpQjtZQUFLLFVBQVU7WUFBZSxNQUFNOztBQUp6RCxRQUFRO0lBVnBCLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO0tBQzFELENBQUM7SUFDRCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBQ3pELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUNwQixDQUFDO0dBQ1csUUFBUSxDQVNwQjtTQVRZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogYXV0by1nZW5lcmF0ZWQgYW5ndWxhciBkaXJlY3RpdmUgcHJveGllcyAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gJy4vYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJ3Jhdy1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQnV0dG9uIGFzIElCdXR0b24gfSBmcm9tICdyYXctY29tcG9uZW50cy9kaXN0L3R5cGVzL2NvbXBvbmVudHMvbXktYnV0dG9uL215LWJ1dHRvbic7XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTXlCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLk15QnV0dG9uIHt9XG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYnV0dG9uVHlwZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdleHBhbmQnLCAnZmlsbCcsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3NoYXBlJywgJ3NpemUnLCAnc3Ryb25nJywgJ3RhcmdldCcsICd0eXBlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1idXR0b24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaW5wdXRzOiBbJ2J1dHRvblR5cGUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZXhwYW5kJywgJ2ZpbGwnLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICdzaGFwZScsICdzaXplJywgJ3N0cm9uZycsICd0YXJnZXQnLCAndHlwZSddLFxuICBvdXRwdXRzOiBbJ215Rm9jdXMnLCAnbXlCbHVyJ11cbn0pXG5leHBvcnQgY2xhc3MgTXlCdXR0b24ge1xuICAvKiogRW1pdHRlZCB3aGVuIHRoZSBidXR0b24gaGFzIGZvY3VzLiAqL1xuICBteUZvY3VzITogSUJ1dHRvblsnbXlGb2N1cyddO1xuICAvKiogRW1pdHRlZCB3aGVuIHRoZSBidXR0b24gbG9zZXMgZm9jdXMuICovXG4gIG15Qmx1ciE6IElCdXR0b25bJ215Qmx1ciddO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydteUZvY3VzJywgJ215Qmx1ciddKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXZWJDaGVja2JveCBleHRlbmRzIENvbXBvbmVudHMuV2ViQ2hlY2tib3gge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydfaWQnLCAnY2hlY2tlZCcsICdkZXNjcmlwdGlvbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdsYWJlbCcsICduYW1lJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ZWItY2hlY2tib3gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaW5wdXRzOiBbJ19pZCcsICdjaGVja2VkJywgJ2Rlc2NyaXB0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2xhYmVsJywgJ25hbWUnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWJDaGVja2JveCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbmltcG9ydCB7IFdlYkRhdGVwaWNrZXIgYXMgSVdlYkRhdGVwaWNrZXIgfSBmcm9tICdyYXctY29tcG9uZW50cy9kaXN0L3R5cGVzL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyJztcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXZWJEYXRlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50cy5XZWJEYXRlcGlja2VyIHt9XG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY2xhc3MnLCAnZGlzYWJsZWQnLCAnZm9yY2VDdXN0b20nLCAnbG9jYWxlQ29kZScsICdtYXgnLCAnbWluJywgJ21vbnRoUGlja2VyJywgJ3BsYWNlaG9sZGVyJywgJ3ZhbHVlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ZWItZGF0ZXBpY2tlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnY2xhc3MnLCAnZGlzYWJsZWQnLCAnZm9yY2VDdXN0b20nLCAnbG9jYWxlQ29kZScsICdtYXgnLCAnbWluJywgJ21vbnRoUGlja2VyJywgJ3BsYWNlaG9sZGVyJywgJ3ZhbHVlJ10sXG4gIG91dHB1dHM6IFsndmFsdWVDaGFuZ2UnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWJEYXRlcGlja2VyIHtcbiAgLyoqICAqL1xuICB2YWx1ZUNoYW5nZSE6IElXZWJEYXRlcGlja2VyWyd2YWx1ZUNoYW5nZSddO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWyd2YWx1ZUNoYW5nZSddKTtcbiAgfVxufVxuXG5pbXBvcnQgeyBXZWJNb2RhbCBhcyBJV2ViTW9kYWwgfSBmcm9tICdyYXctY29tcG9uZW50cy9kaXN0L3R5cGVzL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwnO1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdlYk1vZGFsIGV4dGVuZHMgQ29tcG9uZW50cy5XZWJNb2RhbCB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2JhY2tkcm9wRGlzbWlzcycsICdjZW50ZXJlZCcsICdzaXplJywgJ3RvZ2dsZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2ViLW1vZGFsJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydiYWNrZHJvcERpc21pc3MnLCAnY2VudGVyZWQnLCAnc2l6ZScsICd0b2dnbGUnXSxcbiAgb3V0cHV0czogWydkaW1pc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWJNb2RhbCB7XG4gIC8qKiAgKi9cbiAgZGltaXNzITogSVdlYk1vZGFsWydkaW1pc3MnXTtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnZGltaXNzJ10pO1xuICB9XG59XG4iXX0=