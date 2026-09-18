
type Props = {
    text:string
}

export default function Choose(props: Props) {
  return (
    <>
   <div>
        <input type="radio" name="choose" id={props.text} />
        <label htmlFor={props.text}>{props.text}</label>
   </div>
    </>
  )
}