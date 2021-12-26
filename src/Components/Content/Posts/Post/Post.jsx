import Button from '../../../UI/Buttons/Button';
import s from './Post.module.css'

const Post = ({post, remove, index}) => {

  return (
    <div className={s.post}>
      <div>
        <div style={{color: 'black'}}>
          {index + 1}
        </div>
        <div>
          {post.title}
        </div>
        <div>
          {post.body}
        </div>
      </div>
      <Button onClick={() => remove(post)}>Delete post</Button>
    </div>
  );
}

export default Post