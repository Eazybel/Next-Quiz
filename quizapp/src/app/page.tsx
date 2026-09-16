"use client"
import CategoryNav from "@/app/components/CategoryNav/CategoryNav"
import {useMemo}from "react"
export default  function Home() {
  const catagorys=useMemo(()=>{

  },[])
  return (
    <div>
      <CategoryNav text={["chemistry","biology","history","math"]}/>
    </div>
  );
}
