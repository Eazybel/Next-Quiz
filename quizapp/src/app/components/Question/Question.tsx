"use client"
type Props = {
    text:string,
    key:number
}

export default function Question({text,key}: Props) {
  return (
    <>
        <br /><h2>{text}</h2>

    </>
  )
}