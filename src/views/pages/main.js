import { html } from 'https://unpkg.com/htm/preact/standalone.module.js'
import Header from '../ui/header.js'

export default function Main () {
  return html`
<section>
  <${Header}>
    <h1>Yolo</h1>
  <//>
</section>
  `
}
