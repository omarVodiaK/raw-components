import { Component, h, Prop, Host, Watch, EventEmitter, Event } from '@stencil/core';
import { padNumber } from '../../utils/formatters';

@Component({
  tag: 'web-datepicker',
  styleUrl: 'datepicker.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class WebDatepicker {
  /** Element placeholder */
  @Prop() placeholder: string = 'yyyy-mm-dd';
  /** Element class */
  @Prop() class?: string;
  /** Property sets whether a datepicker is a month picker  */
  @Prop() monthPicker?: boolean = false;
  /** Property sets whether SEB styled datepicker will be rendered despite the browser used */
  @Prop() forceCustom?: boolean = false;
  /** Minimum range of date that can be selected */
  @Prop() min?: Date;
  /** Maximum range of date that can be selected */
  @Prop() max?: Date;
  /** Property sets whether datepicker is disabled */
  @Prop() disabled?: boolean = false;

  @Prop({ mutable: true }) value: Date | null;

  @Prop() localeCode: string;

  inputRawValue: string;

  @Event() valueChange: EventEmitter;

  private _customDay: number;
  private _customMonth: number;
  private _customYear: number;

  unitNames: { month: string; day: string; year: string } = {
    month: 'Month',
    day: 'Day',
    year: 'Year',
  };

  componentWillLoad() {
    this.inputRawValue = this.getStringFromDate(this.value);
    this.localCodeHandler();
  }

  @Watch('value')
  valueHandler(newValue: Date | null) {
    this.inputRawValue = this.getStringFromDate(newValue);
  }

  @Watch('localeCode')
  localCodeHandler() {
    const date: Date = new Date(2012, 0, 5);
    const locale = new Intl.DateTimeFormat(this.localeCode, { month: 'long' });
    const rtf: any = this.getRelativeTimeFormat(this.localeCode);
    const localeDateString: string = new Intl.DateTimeFormat(this.localeCode)?.format(date);
    const customPickerOrder: string[] = ['day', 'month', 'year'].sort((a, b) => {
      const positions: { day: number; month: number; year: number } = {
        day: localeDateString.search(/5/g) || 0,
        month: localeDateString.search(/1/g) || 1,
        year: localeDateString.search(/2012/g) || 2,
      };
      return positions[a] - positions[b];
    });

    customPickerOrder?.map(unit => {
      this.unitNames[unit] =
        rtf
          ?.formatToParts(1, unit)
          ?.filter(x => x.type === 'literal')[1]
          ?.value?.trim() || unit;
    });

    this._customPickerOrder = customPickerOrder;
    const monthNames: string[] = [this.unitNames.month];
    [...Array(12)].map((_, i) => {
      date.setMonth(i);
      monthNames.push(locale.format(date));
    });
    this._monthNames = monthNames;
    console.log('customPickerOrder  monthNames', customPickerOrder, monthNames);
  }

  get locale(): string {
    return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
  }

  private _monthNames: string[];
  /** <!-- skip --> */
  get monthNames(): string[] {
    return this._monthNames;
  }

  private _customPickerOrder: string[];
  /** <!-- skip --> */
  get customPickerOrder(): string[] {
    return this._customPickerOrder;
  }

  /** <!-- skip --> */
  get customDay(): number {
    if (this._customDay === undefined && !!this.inputRawValue) {
      const value: number = this.monthPicker ? 1 : Number(this.inputRawValue.substr(8, 2));
      this._customDay = value;
      return this._customDay;
    }
    return this._customDay;
  }
  /** <!-- skip --> */
  set customDay(e: number) {
    if (!this.monthPicker) {
      this._customDay = e ? Number(e) : null;
      this.trySaveDate();
    }
  }

  get customMonth(): number {
    if (this._customMonth === undefined && !!this.inputRawValue) {
      const value: number = Number(this.inputRawValue.substr(5, 2));
      this._customMonth = value;
      return this._customMonth;
    }
    return this._customMonth;
  }
  /** <!-- skip --> */
  set customMonth(e: number) {
    this._customMonth = e ? e : null;
    this.trySaveDate();
  }

  get customYear(): number {
    if (this._customYear === undefined && !!this.inputRawValue) {
      const value: number = Number(this.inputRawValue.substr(0, 4));
      this._customYear = value;
      return this._customYear;
    }
    return this._customYear;
  }
  /** <!-- skip --> */
  set customYear(e: number) {
    this._customYear = e ? Number(e) : null;
    this.trySaveDate();
  }

  trySaveDate(): void {
    const day: number = this.monthPicker ? 1 : this.customDay;
    const month: number = this.customMonth;
    const year: number = this.customYear;
    const dateString: string = `${padNumber(year, true)}-${padNumber(month)}-${padNumber(day)}`;
    const date: Date = new Date(dateString);
    const m: number = date.getMonth() + 1;
    if (date.getFullYear() === year && m == month && date.getDate() === day) {
      this.value = date;
    } else {
      this.value = new Date('');
    }
    this.valueChange.emit(this.value);
  }

  getStringFromDate(d: Date): string {
    if (this.isValidDate(d)) {
      return d?.toISOString()?.substr(0, this.monthPicker ? 7 : 10) || '';
    } else {
      return '';
    }
  }

  // if not d return true is for the initial case where d is not set
  isValidDate = (d: Date): boolean => (d ? !!(d instanceof Date && !isNaN(d.getTime())) : true);

  getRelativeTimeFormat(code: string): any {
    if ((Intl as any)['RelativeTimeFormat']) {
      return new (Intl as any).RelativeTimeFormat(code);
    }
    return null;
  }

  isDateInRange(d: Date, success?: () => void, fail?: () => void): void {
    if (!this.min && !this.max) {
      success && success();
    } else if (this.min && d >= this.min) {
      if (!this.max || (this.max && d <= this.max)) {
        success && success();
      } else {
        fail && fail();
      }
    } else if (this.max && d <= this.max) {
      if (!this.min || (this.min && d >= this.min)) {
        success && success();
      } else {
        fail && fail();
      }
    } else {
      fail && fail();
    }
  }

  // propagate value change from view to model
  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    this.value = new Date(val);
    this.valueChange.emit(this.value);
  }

  supportsInputOfType(type: 'date' | 'month'): boolean {
    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', type);

    const notADateValue: string = 'not-a-date';
    input.setAttribute('value', notADateValue);

    return input.value !== notADateValue;
  }

  styles: { [key: string]: string } = {
    display: this.monthPicker ? 'none' : 'inherit',
  };

  render() {
    return (
      <Host>
        {!this.forceCustom && this.supportsInputOfType('month') ? (
          this.monthPicker ? (
            <input
              type="month"
              class={{
                'form-control seb-datepicker-native': true,
                'is-invalid': !this.isValidDate(this.value),
              }}
              min={this.getStringFromDate(this.min)}
              max={this.getStringFromDate(this.max)}
              disabled={this.disabled}
              value={this.inputRawValue}
              onInput={this.inputChanged.bind(this)}
            />
          ) : (
            <input
              type="date"
              style={this.styles}
              class={{
                'form-control seb-datepicker-native': true,
                'is-invalid': !this.isValidDate(this.value),
              }}
              min={this.getStringFromDate(this.min)}
              max={this.getStringFromDate(this.max)}
              disabled={this.disabled}
              value={this.inputRawValue}
              onInput={this.inputChanged.bind(this)}
            />
          )
        ) : (
          <div class="input-group">
            {this.customPickerOrder?.map((unit: string, idx: number) => {
              return unit === 'day' && !this.monthPicker ? (
                <input
                  class={{ 'form-control': true, 'is-invalid': !this.isValidDate(this.value) }}
                  style={this.styles}
                  type="number"
                  min="1"
                  max="31"
                  placeholder={this.unitNames.day}
                  value={this.customDay}
                  onInput={(e: InputEvent): void => (this.customDay = e.target['value'])}
                  disabled={this.disabled}
                />
              ) : unit === 'month' ? (
                <select
                  class={{
                    'custom-select': true,
                    'is-invalid': !this.isValidDate(this.value),
                    'rounded-left': idx === 0,
                    'rounded-right': idx === this.customPickerOrder.length - 1,
                  }}
                  disabled={this.disabled}
                  onInput={(e: InputEvent): void => (this.customMonth = e.target['value'])}
                >
                  {this.monthNames.map((month: string, i: number) => (
                    <option disabled={this.disabled || i === 0} value={i} selected={this.customMonth === i || i === 0}>
                      {month}
                    </option>
                  ))}
                </select>
              ) : unit === 'year' ? (
                <input
                  type="number"
                  min="1"
                  class={{ 'form-control': true, 'is-invalid': !this.isValidDate(this.value) }}
                  placeholder={this.unitNames.year}
                  value={this.customYear}
                  onInput={(e: InputEvent): void => (this.customYear = e.target['value'])}
                  disabled={this.disabled}
                />
              ) : null;
            })}
          </div>
        )}
      </Host>
    );
  }
}
