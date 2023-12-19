import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const poppins = Poppins({
  weight: '200',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Rahul Chauhan',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
      <body className={poppins.className}>    
      <div class=" relative w-full">
      <img className='md:hidden mt-[20px] block ml-[140px] h-[70px] w-[70px]' src="logo.png" alt="LOGO"/>
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="hidden md:block inline-flex items-center space-x-2">
      <span>
        <img className='h-[70px] w-[70px]' src="logo.png" alt="LOGO"/>
      </span>
    </div>
    <div class="mt-[10px] block ml-[50px] place-content-around lg:font-poppins lg:block">
      <ul class="inline-flex space-x-8">
        <li>
          <Link
            href="/"
            class="text-md font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
          
            href="#services"
            class="text-md font-semibold text-gray-300 hover:text-[#953ee2]"
            scroll={true}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            class="text-md font-semibold text-gray-300 hover:text-[#953ee2]"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <Link href="/" class="hidden lg:block">
      <button
        type="button"
        class="rounded-md bg-[#953ee2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact Us
      </button>
    </Link>
    <div class="hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>{children}</body>
    </html>
    </>
  )
}
