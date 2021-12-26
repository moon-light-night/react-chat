import s from './Profile.module.css'
import Posts from '../Posts/Posts';
import cover from '../../../cover.jpg'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Form from '../../UI/Forms/Form';

const Profile = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'title 1', body: 'body 1'},
    { id: 2, title: 'title 2', body: 'body 2'},
    { id: 3, title: 'title 3', body: 'body 3'},
    { id: 4, title: 'title 4', body: 'body 4'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  // const bodyInputRef = useRef()

  return (
    <div className={s.profile}>
      <Outlet />
      <img className={s.profile_cover} src={cover} alt={'cover'} />
      <div className={s.profile_name}>
        ava + descr
      </div>
      <div className={s.add_post}>
        <Form create={createPost} />
      </div>
      {posts.length
        ?
        <Posts remove={removePost} posts={posts} title="Posts list" />
        :
        <div className={s.empty_posts_label}>
          Posts not found
        </div>
      }
    </div>
  );
}

export default Profile