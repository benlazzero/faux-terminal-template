import { useState, useRef } from 'react'
import classes from './App.module.css'

function App() {
  const [previous, setPrevious] = useState([])
  const ref = useRef()

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      console.log("enter")
      e.preventDefault()
      setPrevious([ref.current.value, ...previous])
      ref.current.value = ""
    }
  }

  return (
    <div className={classes.container}>

      {/* info box */}
      <div className={classes.record}>
        {previous.map((line, i) => {
          return <span key={i}>{line}</span>
        })}
      </div>

      {/* standard input :) */}
      <div className={classes.input}>
        <textarea ref={ref} className={classes.box} autoFocus onKeyDown={onEnterPress}/>
      </div>

    </div>
  )
}

export default App
