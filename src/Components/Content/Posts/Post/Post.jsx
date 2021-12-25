import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div>
        <div style={{color: 'black'}}>
          {props.post.id}
        </div>
        <div>
          {props.post.title}
        </div>
        <div>
          {props.post.body}
        </div>
      </div>
      <button>
        Delete post
      </button>
    </div>
  );
}

export default Post