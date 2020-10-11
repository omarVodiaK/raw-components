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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcHJveGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWdCdkUsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQU1uQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFMZ0IsaUJBQWlCO1lBQUssVUFBVTtZQUFlLE1BQU07O0FBTnpELFFBQVE7SUFWcEIsUUFBUSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztLQUM5SSxDQUFDO0lBQ0QsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBQzdJLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7S0FDL0IsQ0FBQztHQUNXLFFBQVEsQ0FXcEI7U0FYWSxRQUFRO0FBd0JyQixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBRXRCLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBOztZQUpnQixpQkFBaUI7WUFBSyxVQUFVO1lBQWUsTUFBTTs7QUFGekQsV0FBVztJQVR2QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7S0FDaEYsQ0FBQztJQUNELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0tBQ2hGLENBQUM7R0FDVyxXQUFXLENBTXZCO1NBTlksV0FBVztBQW9CeEIsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUl4QixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2xFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMxQixZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBOztZQUxnQixpQkFBaUI7WUFBSyxVQUFVO1lBQWUsTUFBTTs7QUFKekQsYUFBYTtJQVZ6QixRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztLQUNoSCxDQUFDO0lBQ0QsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDO1FBQy9HLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUN6QixDQUFDO0dBQ1csYUFBYSxDQVN6QjtTQVRZLGFBQWE7QUF1QjFCLElBQWEsUUFBUSxHQUFyQixNQUFhLFFBQVE7SUFJbkIsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTs7WUFMZ0IsaUJBQWlCO1lBQUssVUFBVTtZQUFlLE1BQU07O0FBSnpELFFBQVE7SUFWcEIsUUFBUSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7S0FDMUQsQ0FBQztJQUNELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFDekQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0tBQ3BCLENBQUM7R0FDVyxRQUFRLENBU3BCO1NBVFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAncmF3LWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCdXR0b24gYXMgSUJ1dHRvbiB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9teS1idXR0b24vbXktYnV0dG9uJztcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBNeUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuTXlCdXR0b24ge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydidXR0b25UeXBlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2V4cGFuZCcsICdmaWxsJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAnc2hhcGUnLCAnc2l6ZScsICdzdHJvbmcnLCAndGFyZ2V0JywgJ3R5cGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWJ1dHRvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnYnV0dG9uVHlwZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdleHBhbmQnLCAnZmlsbCcsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3NoYXBlJywgJ3NpemUnLCAnc3Ryb25nJywgJ3RhcmdldCcsICd0eXBlJ10sXG4gIG91dHB1dHM6IFsnbXlGb2N1cycsICdteUJsdXInXVxufSlcbmV4cG9ydCBjbGFzcyBNeUJ1dHRvbiB7XG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBoYXMgZm9jdXMuICovXG4gIG15Rm9jdXMhOiBJQnV0dG9uWydteUZvY3VzJ107XG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBsb3NlcyBmb2N1cy4gKi9cbiAgbXlCbHVyITogSUJ1dHRvblsnbXlCbHVyJ107XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ215Rm9jdXMnLCAnbXlCbHVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdlYkNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50cy5XZWJDaGVja2JveCB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ19pZCcsICdjaGVja2VkJywgJ2Rlc2NyaXB0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2xhYmVsJywgJ25hbWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dlYi1jaGVja2JveCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnX2lkJywgJ2NoZWNrZWQnLCAnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnbGFiZWwnLCAnbmFtZSddXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNoZWNrYm94IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuaW1wb3J0IHsgV2ViRGF0ZXBpY2tlciBhcyBJV2ViRGF0ZXBpY2tlciB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInO1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdlYkRhdGVwaWNrZXIgZXh0ZW5kcyBDb21wb25lbnRzLldlYkRhdGVwaWNrZXIge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjbGFzcycsICdkaXNhYmxlZCcsICdmb3JjZUN1c3RvbScsICdsb2NhbGVDb2RlJywgJ21heCcsICdtaW4nLCAnbW9udGhQaWNrZXInLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dlYi1kYXRlcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydjbGFzcycsICdkaXNhYmxlZCcsICdmb3JjZUN1c3RvbScsICdsb2NhbGVDb2RlJywgJ21heCcsICdtaW4nLCAnbW9udGhQaWNrZXInLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXSxcbiAgb3V0cHV0czogWyd2YWx1ZUNoYW5nZSddXG59KVxuZXhwb3J0IGNsYXNzIFdlYkRhdGVwaWNrZXIge1xuICAvKiogICovXG4gIHZhbHVlQ2hhbmdlITogSVdlYkRhdGVwaWNrZXJbJ3ZhbHVlQ2hhbmdlJ107XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ3ZhbHVlQ2hhbmdlJ10pO1xuICB9XG59XG5cbmltcG9ydCB7IFdlYk1vZGFsIGFzIElXZWJNb2RhbCB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbCc7XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2ViTW9kYWwgZXh0ZW5kcyBDb21wb25lbnRzLldlYk1vZGFsIHt9XG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYmFja2Ryb3BEaXNtaXNzJywgJ2NlbnRlcmVkJywgJ3NpemUnLCAndG9nZ2xlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ZWItbW9kYWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaW5wdXRzOiBbJ2JhY2tkcm9wRGlzbWlzcycsICdjZW50ZXJlZCcsICdzaXplJywgJ3RvZ2dsZSddLFxuICBvdXRwdXRzOiBbJ2RpbWlzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlYk1vZGFsIHtcbiAgLyoqICAqL1xuICBkaW1pc3MhOiBJV2ViTW9kYWxbJ2RpbWlzcyddO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydkaW1pc3MnXSk7XG4gIH1cbn1cbiJdfQ==