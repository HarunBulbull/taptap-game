import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickSpark from './ClickSpark.jsx'

createRoot(document.getElementById('root')).render(
  <ClickSpark
  sparkColor='#000'
  sparkSize={20}
  sparkRadius={50}
  sparkCount={12}
  duration={400}
  >
    <App />
  </ClickSpark>
)
