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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInJhdy1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRTVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFBO0FBQ3BFLE9BQU8sRUFDTixXQUFXLEVBQ1gsYUFBYSxFQUNiLFFBQVEsRUFDUixRQUFRLEdBQ1IsTUFBTSxzQkFBc0IsQ0FBQTtBQUU3QixjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUE7QUFFekQsSUFBTSxZQUFZLEdBQUc7SUFDcEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFFBQVE7SUFFUixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNqQixDQUFBO0FBUUQ7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQU5yQixRQUFRLENBQUM7WUFDVCxZQUFZLEVBQUUsWUFBWTtZQUMxQixPQUFPLEVBQUUsWUFBWTtZQUNyQixPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgYXBwbHlQb2x5ZmlsbHMsIGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAncmF3LWNvbXBvbmVudHMvbG9hZGVyJ1xuXG5pbXBvcnQgeyBOdW1lcmljVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItdmFsdWUtYWNjZXNzb3InXG5pbXBvcnQgeyBUZXh0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vZGlyZWN0aXZlcy90ZXh0LXZhbHVlLWFjY2Vzc29yJ1xuaW1wb3J0IHtcblx0V2ViQ2hlY2tib3gsXG5cdFdlYkRhdGVwaWNrZXIsXG5cdFdlYk1vZGFsLFxuXHRNeUJ1dHRvbixcbn0gZnJvbSAnLi9kaXJlY3RpdmVzL3Byb3hpZXMnXG5cbmFwcGx5UG9seWZpbGxzKCkudGhlbigoKSA9PiBkZWZpbmVDdXN0b21FbGVtZW50cyh3aW5kb3cpKVxuXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXG5cdC8vIHByb3hpZXNcblx0V2ViQ2hlY2tib3gsXG5cdFdlYkRhdGVwaWNrZXIsXG5cdFdlYk1vZGFsLFxuXHRNeUJ1dHRvbixcblxuXHQvLyBWYWx1ZSBBY2Nlc3NvcnNcblx0TnVtZXJpY1ZhbHVlQWNjZXNzb3IsXG5cdFRleHRWYWx1ZUFjY2Vzc29yLFxuXVxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OUyxcblx0ZXhwb3J0czogREVDTEFSQVRJT05TLFxuXHRpbXBvcnRzOiBbXSxcblx0cHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUmF3TW9kdWxlIHt9XG4iXX0=