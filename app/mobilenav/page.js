import Link from "next/link"
export default function Mobilenav(){
    return(
        <>
        <div class="">
      <ul class="">
        <li>
          <Link
            href="/"
            class="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            class="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            class="text-lg font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
        </>
    )
}