type Props = {
    text:string,
    key:number
}

export default function Question({text,key}: Props) {
  return (
    <>
        <h2>{text}</h2><br /><br />
        
    </>
  )
}