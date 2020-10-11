import * as tslib_1 from "tslib";
import { HostListener } from '@angular/core';
export class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
tslib_1.__decorate([
    HostListener('focusout')
], ValueAccessor.prototype, "_handleBlurEvent", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yYXctYW5ndWxhci1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy92YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFzQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUo1QixhQUFRLEdBQXlCLEdBQUcsRUFBRSxHQUFNLENBQUMsQ0FBQztRQUM5QyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQU0sQ0FBQyxDQUFDO0lBR04sQ0FBQztJQUV4QyxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBR0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF3QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUFkQztJQURDLFlBQVksQ0FBQyxVQUFVLENBQUM7cURBR3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7LyoqL307XG4gIHByaXZhdGUgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gey8qKi99O1xuICBwcm90ZWN0ZWQgbGFzdFZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMubGFzdFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VFdmVudCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmxhc3RWYWx1ZSkge1xuICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgX2hhbmRsZUJsdXJFdmVudCgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19