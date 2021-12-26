import { useState } from "react"
import Input from '../Inputs/Input'
import Button from '../Buttons/Button'

const Form = ({create}) => {

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({
      title: '',
      body: ''
    })
    // console.log(bodyInputRef.current.value)
  }

  return (
    <form>
      {/* <input ref={bodyInputRef} type="text" /> */}
      {/* <Input type="text" ref={bodyInputRef} /> */}
      <Input value={post.title} type="text" onChange={e => setPost({ ...post, title: e.target.value})} />
      <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value})} type="text" />
      <Button type="submit" onClick={addPost} >Add post</Button>
    </form>
  )
}

export default Form