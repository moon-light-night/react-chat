import s from './Profile.module.css'
import Posts from '../Posts/Posts';
import cover from '../../../cover.jpg'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Form from '../../UI/Forms/Form';
import Select from '../../UI/Selects/Select';

const Profile = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'title 1', body: 'body 1'},
    { id: 2, title: 'title 2', body: 'body 2'},
    { id: 3, title: 'title 3', body: 'body 3'},
    { id: 4, title: 'title 4', body: 'body 4'}
  ])
  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sortValue) => {
    setSelectedSort(sortValue)
    setPosts([...posts].sort((a, b) => a[sortValue].localeCompare(b[sortValue])))
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
      <hr style={{'margin': '15px 0'}} />
      <div>
        <Select 
          options={[
            {value: 'title', name: 'Sort by title'},
            {value: 'body', name: 'Sort by body'}
          ]}
          defaultOption='Sorting'
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      <hr style={{'margin': '15px 0'}} />
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