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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmF3LWFuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbnVtYmVyLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFnQmpEO0lBQTBDLGdEQUFhO0lBQ3JELDhCQUFZLEVBQWM7ZUFDeEIsa0JBQU0sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs2QkFIVSxvQkFBb0I7SUFJL0IsK0NBQWdCLEdBQWhCLFVBQWlCLEVBQThCO1FBQzdDLGlCQUFNLGdCQUFnQixZQUFDLFVBQUEsS0FBSztZQUMxQixFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztnQkFQZSxVQUFVOztJQURmLG9CQUFvQjtRQWRoQyxTQUFTLENBQUM7WUFDVCxpREFBaUQ7WUFDakQsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxJQUFJLEVBQUU7Z0JBQ0osWUFBWSxFQUFFLHdDQUF3QzthQUN2RDtZQUNELFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsc0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQVNoQztJQUFELDJCQUFDO0NBQUEsQUFURCxDQUEwQyxhQUFhLEdBU3REO1NBVFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ215LWlucHV0W3R5cGU9bnVtYmVyXScsXG4gIGhvc3Q6IHtcbiAgICAnKG15Q2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogTnVtZXJpY1ZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOdW1lcmljVmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyIHwgbnVsbCkgPT4gdm9pZCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyT25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgZm4odmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19