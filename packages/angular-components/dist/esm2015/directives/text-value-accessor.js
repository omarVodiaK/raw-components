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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Jhdy1hbmd1bGFyLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3RleHQtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFnQmpELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFrQixTQUFRLGFBQWE7SUFDbEQsWUFBWSxFQUFjO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7Q0FDRixDQUFBOztZQUhpQixVQUFVOztBQURmLGlCQUFpQjtJQWQ3QixTQUFTLENBQUM7UUFDVCxpREFBaUQ7UUFDakQsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixJQUFJLEVBQUU7WUFDSixZQUFZLEVBQUUsd0NBQXdDO1NBQ3ZEO1FBQ0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLG1CQUFpQjtnQkFDOUIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLGlCQUFpQixDQUk3QjtTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3ZhbHVlLWFjY2Vzc29yJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbiAgc2VsZWN0b3I6ICdteS1pbnB1dFt0eXBlPXRleHRdJyxcbiAgaG9zdDoge1xuICAgICcobXlDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBUZXh0VmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFjY2Vzc29yIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWwpO1xuICB9XG59XG4iXX0=