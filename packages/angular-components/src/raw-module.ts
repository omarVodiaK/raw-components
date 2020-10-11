import { NgModule } from '@angular/core'
import { applyPolyfills, defineCustomElements } from 'raw-components/loader'

import { NumericValueAccessor } from './directives/number-value-accessor'
import { TextValueAccessor } from './directives/text-value-accessor'
import {
	WebCheckbox,
	WebDatepicker,
	WebModal,
	MyButton,
} from './directives/proxies'

applyPolyfills().then(() => defineCustomElements(window))

const DECLARATIONS = [
	// proxies
	WebCheckbox,
	WebDatepicker,
	WebModal,
	MyButton,

	// Value Accessors
	NumericValueAccessor,
	TextValueAccessor,
]

@NgModule({
	declarations: DECLARATIONS,
	exports: DECLARATIONS,
	imports: [],
	providers: [],
})
export class RawModule {}
