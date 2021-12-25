import Post from './Post/Post';
import s from './Posts.module.css'

const Posts = ({posts, title}) => {

  return (
    <div>
      <div style={{textAlign: 'center', margin: '0 0 20px'}}>
        {title}
      </div>
      <div className={s.posts}>
        {posts.map(post => 
          <Post post={post} key={post.id} />
        )}
      </div>
    </div>
  );
}

export default Posts