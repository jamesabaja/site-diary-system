// Global override to get theme autocomplete within styled components
import { BuildPassTheme } from '../styles/theme'

declare module 'styled-components' {
  interface DefaultTheme extends BuildPassTheme {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
