import s from './Profile.module.css'
import Posts from '../Posts/Posts';
import cover from '../../../cover.jpg'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../UI/Buttons/Button';
import Input from '../../UI/Inputs/Input';

const Profile = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'title 1', body: 'body 1'},
    { id: 2, title: 'title 2', body: 'body 2'},
    { id: 3, title: 'title 3', body: 'body 3'},
    { id: 4, title: 'title 4', body: 'body 4'}
  ])
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  
  // const bodyInputRef = useRef()

  const addPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({
      title: '',
      body: ''
    })
    // console.log(bodyInputRef.current.value)
  }

  return (
    <div className={s.profile}>
      <Outlet />
      <img className={s.profile_cover} src={cover} alt={'cover'} />
      <div className={s.profile_name}>
        ava + descr
      </div>
      <div className={s.add_post}>
        <form>
          {/* <input ref={bodyInputRef} type="text" /> */}
          {/* <Input type="text" ref={bodyInputRef} /> */}
          <Input value={post.title} type="text" onChange={e => setPost({ ...post, title: e.target.value})} />
          <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value})} type="text" />
          <Button type="submit" onClick={addPost} >Add post</Button>
        </form>
      </div>
      <Posts posts={posts} title="Posts list" />
    </div>
  );
}

export default Profile