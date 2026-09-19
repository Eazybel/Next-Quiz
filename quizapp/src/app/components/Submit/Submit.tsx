"use client"
type Props = {
  children:React.ReactNode,
  action:(prevState:unknown,formData:FormData)=>{}
}
import {useActionState} from 'react'
export default function SubmitForm({children,action}:Props) {
  const [data,formAction,pending]=useActionState(action,{})
  return (
<>
{data&&console.log(data)}
<form action={formAction}>
      {children}
     <button className="border-2 border-dashed rounded-md ml-60 hover:bg-amber-900 w-20 cursor-pointer" type="submit">Submit</button>
</form>
</>
  )
}