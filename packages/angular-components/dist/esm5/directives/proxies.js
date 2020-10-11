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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Jhdy1hbmd1bGFyLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Byb3hpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFnQnZFO0lBTUUsa0JBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQzFCLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQUpjLGlCQUFpQjtnQkFBSyxVQUFVO2dCQUFlLE1BQU07O0lBTnpELFFBQVE7UUFWcEIsUUFBUSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztTQUM5SSxDQUFDO1FBQ0QsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxF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QUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztTQUMxRCxDQUFDO1FBQ0QsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUN6RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEIsQ0FBQztPQUNXLFFBQVEsQ0FTcEI7SUFBRCxlQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAncmF3LWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCdXR0b24gYXMgSUJ1dHRvbiB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9teS1idXR0b24vbXktYnV0dG9uJztcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBNeUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuTXlCdXR0b24ge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydidXR0b25UeXBlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2V4cGFuZCcsICdmaWxsJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAnc2hhcGUnLCAnc2l6ZScsICdzdHJvbmcnLCAndGFyZ2V0JywgJ3R5cGUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWJ1dHRvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnYnV0dG9uVHlwZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdleHBhbmQnLCAnZmlsbCcsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3NoYXBlJywgJ3NpemUnLCAnc3Ryb25nJywgJ3RhcmdldCcsICd0eXBlJ10sXG4gIG91dHB1dHM6IFsnbXlGb2N1cycsICdteUJsdXInXVxufSlcbmV4cG9ydCBjbGFzcyBNeUJ1dHRvbiB7XG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBoYXMgZm9jdXMuICovXG4gIG15Rm9jdXMhOiBJQnV0dG9uWydteUZvY3VzJ107XG4gIC8qKiBFbWl0dGVkIHdoZW4gdGhlIGJ1dHRvbiBsb3NlcyBmb2N1cy4gKi9cbiAgbXlCbHVyITogSUJ1dHRvblsnbXlCbHVyJ107XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ215Rm9jdXMnLCAnbXlCbHVyJ10pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdlYkNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50cy5XZWJDaGVja2JveCB7fVxuQFByb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ19pZCcsICdjaGVja2VkJywgJ2Rlc2NyaXB0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2xhYmVsJywgJ25hbWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dlYi1jaGVja2JveCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBpbnB1dHM6IFsnX2lkJywgJ2NoZWNrZWQnLCAnZGVzY3JpcHRpb24nLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnbGFiZWwnLCAnbmFtZSddXG59KVxuZXhwb3J0IGNsYXNzIFdlYkNoZWNrYm94IHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuaW1wb3J0IHsgV2ViRGF0ZXBpY2tlciBhcyBJV2ViRGF0ZXBpY2tlciB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInO1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdlYkRhdGVwaWNrZXIgZXh0ZW5kcyBDb21wb25lbnRzLldlYkRhdGVwaWNrZXIge31cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydjbGFzcycsICdkaXNhYmxlZCcsICdmb3JjZUN1c3RvbScsICdsb2NhbGVDb2RlJywgJ21heCcsICdtaW4nLCAnbW9udGhQaWNrZXInLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dlYi1kYXRlcGlja2VyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGlucHV0czogWydjbGFzcycsICdkaXNhYmxlZCcsICdmb3JjZUN1c3RvbScsICdsb2NhbGVDb2RlJywgJ21heCcsICdtaW4nLCAnbW9udGhQaWNrZXInLCAncGxhY2Vob2xkZXInLCAndmFsdWUnXSxcbiAgb3V0cHV0czogWyd2YWx1ZUNoYW5nZSddXG59KVxuZXhwb3J0IGNsYXNzIFdlYkRhdGVwaWNrZXIge1xuICAvKiogICovXG4gIHZhbHVlQ2hhbmdlITogSVdlYkRhdGVwaWNrZXJbJ3ZhbHVlQ2hhbmdlJ107XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ3ZhbHVlQ2hhbmdlJ10pO1xuICB9XG59XG5cbmltcG9ydCB7IFdlYk1vZGFsIGFzIElXZWJNb2RhbCB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2Rpc3QvdHlwZXMvY29tcG9uZW50cy9tb2RhbC9tb2RhbCc7XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgV2ViTW9kYWwgZXh0ZW5kcyBDb21wb25lbnRzLldlYk1vZGFsIHt9XG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYmFja2Ryb3BEaXNtaXNzJywgJ2NlbnRlcmVkJywgJ3NpemUnLCAndG9nZ2xlJ11cbn0pXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ZWItbW9kYWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaW5wdXRzOiBbJ2JhY2tkcm9wRGlzbWlzcycsICdjZW50ZXJlZCcsICdzaXplJywgJ3RvZ2dsZSddLFxuICBvdXRwdXRzOiBbJ2RpbWlzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlYk1vZGFsIHtcbiAgLyoqICAqL1xuICBkaW1pc3MhOiBJV2ViTW9kYWxbJ2RpbWlzcyddO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydkaW1pc3MnXSk7XG4gIH1cbn1cbiJdfQ==