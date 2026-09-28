import { useState } from 'react'

import './styles/app.css';


function App() {
  const [color, setColor] = useState('#87d988')

  return (
    <div className="color-picker-container">
      <h2 className="color-picker-title">Color Code Picker</h2>
      <div className="color-picker-controls">
        <div className="color-display" style={{ backgroundColor: color }} aria-live="polite">
          <span className="color-value">{color.toUpperCase()}</span>
        </div>
        <input className="color-input" type="color" aria-label="Choose color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}

export default App
