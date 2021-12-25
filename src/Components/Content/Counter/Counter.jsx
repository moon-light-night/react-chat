import { useState } from "react"

const Counter = () => {

  const [likes, setLikes] = useState(0)

  function decr() {
    setLikes(likes - 1)
  }

  return (
    <div>
      <div>
        {likes}
      </div>
      <button onClick={() => setLikes(likes + 1)}>incr</button>
      <button onClick={decr}>decr</button>
    </div>
  )
}

export default Counter