import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { applyPolyfills, defineCustomElements } from 'raw-components/loader';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import { WebCheckbox, WebDatepicker, WebModal, MyButton, } from './directives/proxies';
applyPolyfills().then(function () { return defineCustomElements(window); });
var DECLARATIONS = [
    // proxies
    WebCheckbox,
    WebDatepicker,
    WebModal,
    MyButton,
    // Value Accessors
    NumericValueAccessor,
    TextValueAccessor,
];
var RawModule = /** @class */ (function () {
    function RawModule() {
    }
    RawModule = tslib_1.__decorate([
        NgModule({
            declarations: DECLARATIONS,
            exports: DECLARATIONS,
            imports: [],
            providers: [],
        })
    ], RawModule);
    return RawModule;
}());
export { RawModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Jhdy1hbmd1bGFyLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJyYXctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQTtBQUU1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQUNwRSxPQUFPLEVBQ04sV0FBVyxFQUNYLGFBQWEsRUFDYixRQUFRLEVBQ1IsUUFBUSxHQUNSLE1BQU0sc0JBQXNCLENBQUE7QUFFN0IsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0FBRXpELElBQU0sWUFBWSxHQUFHO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLFFBQVE7SUFDUixRQUFRO0lBRVIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDakIsQ0FBQTtBQVFEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFOckIsUUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFLFlBQVk7WUFDMUIsT0FBTyxFQUFFLFlBQVk7WUFDckIsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGFwcGx5UG9seWZpbGxzLCBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ3Jhdy1jb21wb25lbnRzL2xvYWRlcidcblxuaW1wb3J0IHsgTnVtZXJpY1ZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyLXZhbHVlLWFjY2Vzc29yJ1xuaW1wb3J0IHsgVGV4dFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGV4dC12YWx1ZS1hY2Nlc3NvcidcbmltcG9ydCB7XG5cdFdlYkNoZWNrYm94LFxuXHRXZWJEYXRlcGlja2VyLFxuXHRXZWJNb2RhbCxcblx0TXlCdXR0b24sXG59IGZyb20gJy4vZGlyZWN0aXZlcy9wcm94aWVzJ1xuXG5hcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4gZGVmaW5lQ3VzdG9tRWxlbWVudHMod2luZG93KSlcblxuY29uc3QgREVDTEFSQVRJT05TID0gW1xuXHQvLyBwcm94aWVzXG5cdFdlYkNoZWNrYm94LFxuXHRXZWJEYXRlcGlja2VyLFxuXHRXZWJNb2RhbCxcblx0TXlCdXR0b24sXG5cblx0Ly8gVmFsdWUgQWNjZXNzb3JzXG5cdE51bWVyaWNWYWx1ZUFjY2Vzc29yLFxuXHRUZXh0VmFsdWVBY2Nlc3Nvcixcbl1cblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlMsXG5cdGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcblx0aW1wb3J0czogW10sXG5cdHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJhd01vZHVsZSB7fVxuIl19