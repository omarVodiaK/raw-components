import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
var TextValueAccessor = /** @class */ (function (_super) {
    tslib_1.__extends(TextValueAccessor, _super);
    function TextValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    TextValueAccessor_1 = TextValueAccessor;
    var TextValueAccessor_1;
    TextValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TextValueAccessor = TextValueAccessor_1 = tslib_1.__decorate([
        Directive({
            /* tslint:disable-next-line:directive-selector */
            selector: 'my-input[type=text]',
            host: {
                '(myChange)': 'handleChangeEvent($event.target.value)'
            },
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: TextValueAccessor_1,
                    multi: true
                }
            ]
        })
    ], TextValueAccessor);
    return TextValueAccessor;
}(ValueAccessor));
export { TextValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Jhdy1hbmd1bGFyLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3RleHQtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCakQ7SUFBdUMsNkNBQWE7SUFDbEQsMkJBQVksRUFBYztlQUN4QixrQkFBTSxFQUFFLENBQUM7SUFDWCxDQUFDOzBCQUhVLGlCQUFpQjs7O2dCQUNaLFVBQVU7O0lBRGYsaUJBQWlCO1FBZDdCLFNBQVMsQ0FBQztZQUNULGlEQUFpRDtZQUNqRCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLElBQUksRUFBRTtnQkFDSixZQUFZLEVBQUUsd0NBQXdDO2FBQ3ZEO1lBQ0QsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxtQkFBaUI7b0JBQzlCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO09BQ1csaUJBQWlCLENBSTdCO0lBQUQsd0JBQUM7Q0FBQSxBQUpELENBQXVDLGFBQWEsR0FJbkQ7U0FKWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi92YWx1ZS1hY2Nlc3Nvcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4gIHNlbGVjdG9yOiAnbXktaW5wdXRbdHlwZT10ZXh0XScsXG4gIGhvc3Q6IHtcbiAgICAnKG15Q2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogVGV4dFZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxufVxuIl19