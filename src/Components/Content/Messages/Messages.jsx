import s from './Messages.module.css'

const a = 'hello'
const el = <div className={s.hi}>element</div>

const Messages = () => {
  return (
    <div className={s.messages}>
      messages, {a}!<br/>
      {el}
    </div>
  );
}

export default Messages