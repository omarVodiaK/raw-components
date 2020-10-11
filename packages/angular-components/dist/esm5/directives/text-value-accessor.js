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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvdGV4dC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0JqRDtJQUF1Qyw2Q0FBYTtJQUNsRCwyQkFBWSxFQUFjO2VBQ3hCLGtCQUFNLEVBQUUsQ0FBQztJQUNYLENBQUM7MEJBSFUsaUJBQWlCOzs7Z0JBQ1osVUFBVTs7SUFEZixpQkFBaUI7UUFkN0IsU0FBUyxDQUFDO1lBQ1QsaURBQWlEO1lBQ2pELFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsSUFBSSxFQUFFO2dCQUNKLFlBQVksRUFBRSx3Q0FBd0M7YUFDdkQ7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLG1CQUFpQjtvQkFDOUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FJN0I7SUFBRCx3QkFBQztDQUFBLEFBSkQsQ0FBdUMsYUFBYSxHQUluRDtTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3ZhbHVlLWFjY2Vzc29yJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbiAgc2VsZWN0b3I6ICdteS1pbnB1dFt0eXBlPXRleHRdJyxcbiAgaG9zdDoge1xuICAgICcobXlDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBUZXh0VmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWwpO1xuICB9XG59XG4iXX0=