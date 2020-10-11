import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
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
    return MyButton;
}());
export { MyButton };
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
    return WebCheckbox;
}());
export { WebCheckbox };
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
    return WebDatepicker;
}());
export { WebDatepicker };
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
    return WebModal;
}());
export { WebModal };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcHJveGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWdCdkU7SUFNRSxrQkFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBSmMsaUJBQWlCO2dCQUFLLFVBQVU7Z0JBQWUsTUFBTTs7SUFOekQsUUFBUTtRQVZwQixRQUFRLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1NBQzlJLENBQUM7UUFDRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUs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RUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO1NBQzFELENBQUM7UUFDRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQ3pELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNwQixDQUFDO09BQ1csUUFBUSxDQVNwQjtJQUFELGVBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3h5Q21wLCBwcm94eU91dHB1dHMgfSBmcm9tICcuL2FuZ3VsYXItY29tcG9uZW50LWxpYi91dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdyYXctY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJ1dHRvbiBhcyBJQnV0dG9uIH0gZnJvbSAncmF3LWNvbXBvbmVudHMvZGlzdC90eXBlcy9jb21wb25lbnRzL215LWJ1dHRvbi9teS1idXR0b24nO1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIE15QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5NeUJ1dHRvbiB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2J1dHRvblR5cGUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZXhwYW5kJywgJ2ZpbGwnLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICdzaGFwZScsICdzaXplJywgJ3N0cm9uZycsICd0YXJnZXQnLCAndHlwZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydidXR0b25UeXBlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2V4cGFuZCcsICdmaWxsJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAnc2hhcGUnLCAnc2l6ZScsICdzdHJvbmcnLCAndGFyZ2V0JywgJ3R5cGUnXSxcbiAgb3V0cHV0czogWydteUZvY3VzJywgJ215Qmx1ciddXG59KVxuZXhwb3J0IGNsYXNzIE15QnV0dG9uIHtcbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgYnV0dG9uIGhhcyBmb2N1cy4gKi9cbiAgbXlGb2N1cyE6IElCdXR0b25bJ215Rm9jdXMnXTtcbiAgLyoqIEVtaXR0ZWQgd2hlbiB0aGUgYnV0dG9uIGxvc2VzIGZvY3VzLiAqL1xuICBteUJsdXIhOiBJQnV0dG9uWydteUJsdXInXTtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnbXlGb2N1cycsICdteUJsdXInXSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2ViQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnRzLldlYkNoZWNrYm94IHt9XG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnX2lkJywgJ2NoZWNrZWQnLCAnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnbGFiZWwnLCAnbmFtZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2ViLWNoZWNrYm94JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydfaWQnLCAnY2hlY2tlZCcsICdkZXNjcmlwdGlvbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdsYWJlbCcsICduYW1lJ11cbn0pXG5leHBvcnQgY2xhc3MgV2ViQ2hlY2tib3gge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5pbXBvcnQgeyBXZWJEYXRlcGlja2VyIGFzIElXZWJEYXRlcGlja2VyIH0gZnJvbSAncmF3LWNvbXBvbmVudHMvZGlzdC90eXBlcy9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcic7XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2ViRGF0ZXBpY2tlciBleHRlbmRzIENvbXBvbmVudHMuV2ViRGF0ZXBpY2tlciB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NsYXNzJywgJ2Rpc2FibGVkJywgJ2ZvcmNlQ3VzdG9tJywgJ2xvY2FsZUNvZGUnLCAnbWF4JywgJ21pbicsICdtb250aFBpY2tlcicsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2ViLWRhdGVwaWNrZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaW5wdXRzOiBbJ2NsYXNzJywgJ2Rpc2FibGVkJywgJ2ZvcmNlQ3VzdG9tJywgJ2xvY2FsZUNvZGUnLCAnbWF4JywgJ21pbicsICdtb250aFBpY2tlcicsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddLFxuICBvdXRwdXRzOiBbJ3ZhbHVlQ2hhbmdlJ11cbn0pXG5leHBvcnQgY2xhc3MgV2ViRGF0ZXBpY2tlciB7XG4gIC8qKiAgKi9cbiAgdmFsdWVDaGFuZ2UhOiBJV2ViRGF0ZXBpY2tlclsndmFsdWVDaGFuZ2UnXTtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsndmFsdWVDaGFuZ2UnXSk7XG4gIH1cbn1cblxuaW1wb3J0IHsgV2ViTW9kYWwgYXMgSVdlYk1vZGFsIH0gZnJvbSAncmF3LWNvbXBvbmVudHMvZGlzdC90eXBlcy9jb21wb25lbnRzL21vZGFsL21vZGFsJztcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBXZWJNb2RhbCBleHRlbmRzIENvbXBvbmVudHMuV2ViTW9kYWwge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydiYWNrZHJvcERpc21pc3MnLCAnY2VudGVyZWQnLCAnc2l6ZScsICd0b2dnbGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dlYi1tb2RhbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnYmFja2Ryb3BEaXNtaXNzJywgJ2NlbnRlcmVkJywgJ3NpemUnLCAndG9nZ2xlJ10sXG4gIG91dHB1dHM6IFsnZGltaXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2ViTW9kYWwge1xuICAvKiogICovXG4gIGRpbWlzcyE6IElXZWJNb2RhbFsnZGltaXNzJ107XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2RpbWlzcyddKTtcbiAgfVxufVxuIl19