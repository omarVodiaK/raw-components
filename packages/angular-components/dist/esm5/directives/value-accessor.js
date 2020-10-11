import * as tslib_1 from "tslib";
import { HostListener } from '@angular/core';
var ValueAccessor = /** @class */ (function () {
    function ValueAccessor(el) {
        this.el = el;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ValueAccessor.prototype.writeValue = function (value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    };
    ValueAccessor.prototype.handleChangeEvent = function (value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    };
    ValueAccessor.prototype._handleBlurEvent = function () {
        this.onTouched();
    };
    ValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    };
    tslib_1.__decorate([
        HostListener('focusout')
    ], ValueAccessor.prototype, "_handleBlurEvent", null);
    return ValueAccessor;
}());
export { ValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yYXctYW5ndWxhci1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy92YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQU1FLHVCQUFzQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUo1QixhQUFRLEdBQXlCLGNBQVcsQ0FBQyxDQUFDO1FBQzlDLGNBQVMsR0FBZSxjQUFXLENBQUMsQ0FBQztJQUdOLENBQUM7SUFFeEMsa0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFHRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixFQUF3QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QseUNBQWlCLEdBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzlDLENBQUM7SUFiRDtRQURDLFlBQVksQ0FBQyxVQUFVLENBQUM7eURBR3hCO0lBWUgsb0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7LyoqL307XG4gIHByaXZhdGUgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gey8qKi99O1xuICBwcm90ZWN0ZWQgbGFzdFZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMubGFzdFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VFdmVudCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgX2hhbmRsZUJsdXJFdmVudCgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19