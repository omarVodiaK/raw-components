import * as tslib_1 from "tslib";
var NumericValueAccessor_1;
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
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
NumericValueAccessor = NumericValueAccessor_1 = tslib_1.__decorate([
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
export { NumericValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9udW1iZXItdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFnQmpELElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFxQixTQUFRLGFBQWE7SUFDckQsWUFBWSxFQUFjO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUE4QjtRQUM3QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUFSaUIsVUFBVTs7QUFEZixvQkFBb0I7SUFkaEMsU0FBUyxDQUFDO1FBQ1QsaURBQWlEO1FBQ2pELFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsSUFBSSxFQUFFO1lBQ0osWUFBWSxFQUFFLHdDQUF3QztTQUN2RDtRQUNELFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxzQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FTaEM7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi92YWx1ZS1hY2Nlc3Nvcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4gIHNlbGVjdG9yOiAnbXktaW5wdXRbdHlwZT1udW1iZXJdJyxcbiAgaG9zdDoge1xuICAgICcobXlDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBOdW1lcmljVmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE51bWVyaWNWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWwpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIgfCBudWxsKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIucmVnaXN0ZXJPbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICBmbih2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=