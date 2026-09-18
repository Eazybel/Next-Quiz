type Props = {
    text:string,
    key:number
}

export default function Question({text,key}: Props) {
  return (
    <p>
        {
            text
        }
    </p>
  )
}