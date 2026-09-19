"use client"
type Props = {
  children:React.ReactNode,
  action:(formData:FormData)=>void|Promise<void>
}

export default function SubmitForm({children,action}:Props) {
  return (
<>
<form action={action}>
      {children}
     <button className="border-2 border-dashed rounded-md ml-60 hover:bg-amber-900 w-20 cursor-pointer" type="submit">Submit</button>
</form>
</>
  )
}