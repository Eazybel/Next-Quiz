"use client"
import CategoryNav from "@/app/components/CategoryNav/CategoryNav"
export default function Home() {
  return (
    <div>
      <CategoryNav text={["chemistry","biology","history","math"]}/>
    </div>
  );
}
