import { useState } from 'react'

import './styles/app.css';


function App() {
  const [color, setColor] = useState('#87d988')

  return (
    <div className="color-picker-container">
      <h2 className="color-picker-title">Color Code Picker</h2>
      <div className="color-display" style={{ backgroundColor: color }}>
        Select a color: {color}
      </div>
      <input className="color-input" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

export default App
