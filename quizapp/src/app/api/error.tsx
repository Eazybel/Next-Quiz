"use client"
export default function ErrorHandler({error,reset}:
    {
        error:Error,
        reset:()=>void
    }
){
return(
    <>
    <p>{error.message}</p>
    <button onClick={reset}>Retry</button>
    </>
)
}