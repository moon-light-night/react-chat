import Post from './Post/Post';
import s from './Posts.module.css'

const Posts = () => {
  return (
    <div className={s.posts}>
      <Post name="post 1" like="5" />
      <Post name="post 2" like="7" />
      <Post name="post 3" like="10" />
      <Post name="post 4" like="2" />
    </div>
  );
}

export default Posts