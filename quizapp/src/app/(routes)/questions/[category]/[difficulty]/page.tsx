type paramsType={
    params:Promise<{category:string,difficulty:string}>
}

export default async function Question({params}:paramsType){
const paramsItem=await params
const res =await fetch(`https://quizapi.io/api/v1/questions?category=${paramsItem.category}&difficulty=${paramsItem.difficulty}&type=MULTIPLE_CHOICE&limit=10&offset=0"`,{method:"Get",headers:{"Content-type":"application/json","Authorization":"Bearer qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2"}
    })
const data=await res.json()
const fetchedData=data.data
if(!res.ok){
    throw Error("Something went wwrong")
}

return(fetchedData)

}

@@
