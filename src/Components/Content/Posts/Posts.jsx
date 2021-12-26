import Post from './Post/Post';
import s from './Posts.module.css'

const Posts = ({posts, title, remove}) => {

  return (
    <div>
      <div style={{textAlign: 'center', margin: '0 0 20px'}}>
        {title}
      </div>
      <div className={s.posts}>
        {posts.map((post, index) => 
          <Post remove={remove} post={post} key={post.id} index={index} />
        )}
      </div>
    </div>
  );
}

export default Posts