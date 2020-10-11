import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var NumericValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(NumericValueAccessor, _super);
    function NumericValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    NumericValueAccessor_1 = NumericValueAccessor;
    NumericValueAccessor.prototype.registerOnChange = function (fn) {
        _super.prototype.registerOnChange.call(this, function (value) {
            fn(value === '' ? null : parseFloat(value));
        });
    };
    var NumericValueAccessor_1;
    NumericValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return NumericValueAccessor;
}(ValueAccessor));
export { NumericValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9udW1iZXItdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCakQ7SUFBMEMsZ0RBQWE7SUFDckQsOEJBQVksRUFBYztlQUN4QixrQkFBTSxFQUFFLENBQUM7SUFDWCxDQUFDOzZCQUhVLG9CQUFvQjtJQUkvQiwrQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBOEI7UUFDN0MsaUJBQU0sZ0JBQWdCLFlBQUMsVUFBQSxLQUFLO1lBQzFCLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O2dCQVBlLFVBQVU7O0lBRGYsb0JBQW9CO1FBZGhDLFNBQVMsQ0FBQztZQUNULGlEQUFpRDtZQUNqRCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLElBQUksRUFBRTtnQkFDSixZQUFZLEVBQUUsd0NBQXdDO2FBQ3ZEO1lBQ0QsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxzQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO09BQ1csb0JBQW9CLENBU2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVRELENBQTBDLGFBQWEsR0FTdEQ7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi92YWx1ZS1hY2Nlc3Nvcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4gIHNlbGVjdG9yOiAnbXktaW5wdXRbdHlwZT1udW1iZXJdJyxcbiAgaG9zdDoge1xuICAgICcobXlDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBOdW1lcmljVmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE51bWVyaWNWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWwpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIgfCBudWxsKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIucmVnaXN0ZXJPbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICBmbih2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=