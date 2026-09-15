import Link from "next/link"
export default function CategoryNav(){
    return(
        <nav>
        <Link href={"/Questions"}>Front end</Link><br />
        <Link  href={"/Questions"}>Back end</Link><br />
        <Link  href={"/Questions"}>Full stack</Link><br />

        </nav>
    )
}