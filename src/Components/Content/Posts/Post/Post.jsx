import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div>
        Post: {props.name}
      </div>
      <div>
        likes: {props.like}
      </div>
    </div>
  );
}

export default Post