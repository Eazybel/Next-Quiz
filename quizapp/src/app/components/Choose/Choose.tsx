
type Props = {
    text:string,
    question:string
}

export default function Choose(props: Props) {
  return (
    <>
   <div>
        <input required type="radio" name={props.question} id={props.question} />
        <label htmlFor={props.question}>{props.text}</label>
   </div>
    </>
  )
}