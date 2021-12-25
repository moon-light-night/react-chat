import { useState } from "react"
import Counter from "../Counter/Counter"

const Music = () => {

  const [value, setValue] = useState('text')

  return (
    <div>
      Music
      <h1>
        {value}
      </h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <Counter />
    </div>
  )
}

export default Music