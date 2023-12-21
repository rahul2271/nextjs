import Link from "next/link"
export default function Mobilenav(){
    return(
        <>
        <div className="">
      <ul className="">
        <li>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
        </>
    )
}