import s from './Input.module.css'

const Input = (props) => {
  return (
    <input {...props} className={s.input} />
  )
}

export default Input