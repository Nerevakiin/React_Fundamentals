import { createRoot } from 'react-dom/client'
import reactSvg from './assets/react.svg'

const root = createRoot(document.getElementById("root"))

root.render(
  <main>
    <img src={reactSvg} width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)