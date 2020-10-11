export * from './components'
import { applyPolyfills, defineCustomElements } from 'raw-components/loader'

applyPolyfills().then(() => {
	defineCustomElements(window)
})
