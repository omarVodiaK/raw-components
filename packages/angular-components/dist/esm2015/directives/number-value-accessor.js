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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmF3LWFuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbnVtYmVyLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0JqRCxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBcUIsU0FBUSxhQUFhO0lBQ3JELFlBQVksRUFBYztRQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBOEI7UUFDN0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBUmlCLFVBQVU7O0FBRGYsb0JBQW9CO0lBZGhDLFNBQVMsQ0FBQztRQUNULGlEQUFpRDtRQUNqRCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLElBQUksRUFBRTtZQUNKLFlBQVksRUFBRSx3Q0FBd0M7U0FDdkQ7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsc0JBQW9CO2dCQUNqQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csb0JBQW9CLENBU2hDO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ215LWlucHV0W3R5cGU9bnVtYmVyXScsXG4gIGhvc3Q6IHtcbiAgICAnKG15Q2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogTnVtZXJpY1ZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOdW1lcmljVmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyIHwgbnVsbCkgPT4gdm9pZCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyT25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgZm4odmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19