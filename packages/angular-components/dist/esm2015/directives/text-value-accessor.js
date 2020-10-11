import * as tslib_1 from "tslib";
var TextValueAccessor_1;
import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
let TextValueAccessor = TextValueAccessor_1 = class TextValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
};
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
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
export { TextValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdGV4dC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCakQsSUFBYSxpQkFBaUIseUJBQTlCLE1BQWEsaUJBQWtCLFNBQVEsYUFBYTtJQUNsRCxZQUFZLEVBQWM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztDQUNGLENBQUE7O1lBSGlCLFVBQVU7O0FBRGYsaUJBQWlCO0lBZDdCLFNBQVMsQ0FBQztRQUNULGlEQUFpRDtRQUNqRCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLElBQUksRUFBRTtZQUNKLFlBQVksRUFBRSx3Q0FBd0M7U0FDdkQ7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsbUJBQWlCO2dCQUM5QixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csaUJBQWlCLENBSTdCO1NBSlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ215LWlucHV0W3R5cGU9dGV4dF0nLFxuICBob3N0OiB7XG4gICAgJyhteUNoYW5nZSknOiAnaGFuZGxlQ2hhbmdlRXZlbnQoJGV2ZW50LnRhcmdldC52YWx1ZSknXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IFRleHRWYWx1ZUFjY2Vzc29yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbCk7XG4gIH1cbn1cbiJdfQ==