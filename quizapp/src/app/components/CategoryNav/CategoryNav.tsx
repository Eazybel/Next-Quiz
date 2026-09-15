import Link from "next/link"
export default function CategoryNav(){
    return(
        <nav>
        <Link href={"/Questions"}>Front end</Link>
        <Link  href={"/Questions"}>Back end</Link>
        <Link  href={"/Questions"}>Full stack</Link>

        </nav>
    )
}