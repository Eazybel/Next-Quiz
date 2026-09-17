type paramsType={
    params:Promise<{category:string,difficulty:string}>
}

export default async function Question({params}:paramsType){
   const {category,difficulty}=await params
    return(
        <>
        <p>you selected {category} of {difficulty} level questions</p>

        </>
    )
}