import Image from 'next/image'
import { poppins } from 'next/font/google'

export default function Home() {
  return (
    <>
    
    <div class="relative mt-[-20px] w-full">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      {/* for show on mobile */}
      <div class=" animate-pulse mt-[100px] block md:hidden relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          class="aspect-[3/2] bg-black object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="logo.png"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <div class="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
          <div class="rounded-full bg-[#953ee2] p-1 px-2">
            <p class="text-md font-medium">We&#x27; here</p>
          </div>
          <p class="text-md font-medium">For your help →</p>
        </div>
        <h1 class="mt-8 text-4xl font-bold tracking-tight text-grey-300 md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p class="mt-8 text-lg text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          modi blanditiis dolores quasi eaque explicabo!
        </p>
        <form action="" class="mt-8 flex items-start space-x-2">
          <div>
            <input
              class="flex w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            <p class="mt-2 text-sm text-gray-300">We care about your privacy*</p>
          </div>
          <div>
            <button
              type="button"
              class="rounded-md bg-[#953ee2] px-3 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#953ee2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {/* for hide on mobile */}
      <div class="hidden md:block relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          class="aspect-[3/2] bg-black object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="logo.png"
          alt=""
        />
      </div>
    </div>
  </div>

  {/* next sec */}
  
  <div id='services' class="croll-smooth focus:scroll-auto mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <div class="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p class="text-xs font-semibold uppercase tracking-widest text-white">
          What we have for you...
        </p>
      </div>
      <h2 class="mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        Our Exclusive Services
      </h2>
      <p class="mt-4 text-base leading-relaxed text-gray-200">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div class="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/webdevelopers.gif" alt="web development" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">Web Development</h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/gd.gif" alt="Graphcs designing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">
          Graphics Designing
        </h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/cw.gif" alt="content writing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">
          Content Writing
        </h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/dm.gif" alt="Digital Marketing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">Digital Marketing</h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/ve.gif" alt="Digital Marketing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">Professional Video Editing</h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/seo.gif" alt="Digital Marketing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">SEO </h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/insta.png" alt="Digital Marketing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">SMM </h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/smo.png" alt="Digital Marketing" />
        </div>
        <h3 class="mt-8 text-lg font-semibold text-white">SMO </h3>
        <p class="mt-4 text-sm text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </div>
{/* 3rd */}
  <div class="mt-[100px] md:mt-[50px] mx-auto max-w-xl text-center">
      <div class="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p class="text-xs font-semibold uppercase tracking-widest text-white">
          Why choose us...?
        </p>
      </div>
      </div>
  <h2 class="text-center mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        I Love to share my achievements
      </h2>
  <div class=" py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-grey-300">Existing Clients</dt>
        <h1 class="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">110+</h1>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-grey-300">Projects Completed</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">389+</dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-grey-300">Cups of Chai</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">1000+</dd>
      </div>
    </dl>
  </div>
</div>
</>
  )
}
