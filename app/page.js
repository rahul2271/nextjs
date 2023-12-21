import Image from 'next/image'
import { poppins } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
    <div className="relative mt-[-20px] w-full">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      {/* for show on mobile */}
      <div className=" animate-pulse mt-[100px] block md:hidden relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-black object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="logo.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
          <div className="rounded-full bg-[#953ee2] p-1 px-2">
            <p className="text-md font-medium">We&#x27; here</p>
          </div>
          <p className="text-md font-medium">For your help →</p>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-grey-300 md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p className="mt-8 text-lg text-gray-300">
        Fueling online success, one click at a time—supercharge your business growth with our winning web solutions.
        </p>
        <form action="" className="mt-8 flex items-start space-x-2">
          <div>
            <div>
              <Link href="tel:7009646377"
              type="button"
              className="rounded-md bg-[#953ee2] px-3 py-2.5 text-md font-bold text-white shadow-sm hover:bg-[#953ee2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              E-mail
            </Link>
            <button
              type="button"
              className=" ml-[20px] rounded-md bg-[#953ee2] px-3 py-2.5 text-md font-bold text-white shadow-sm hover:bg-[#953ee2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Call Now
            </button>
            </div>
            {/* <input
              className="flex w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Enter your email"
              id="email"
            /> */}
            <p className="mt-2 text-sm text-gray-300">We care about your privacy*</p>
          </div>
          {/* <div>
            <button
              type="button"
              className="rounded-md bg-[#953ee2] px-3 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#953ee2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div> */}
        </form>
      </div>
      {/* for hide on mobile */}
      <div className="hidden md:block relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-black object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="logo.png"
          alt=""
        />
      </div>
    </div>
  </div>

  {/* next sec */}
  
  <div id='services' className="croll-smooth focus:scroll-auto mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          What we have for you...
        </p>
      </div>
      <h2 className="mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        Our Exclusive Services
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-200">
      From design to deployment, we've got your web presence covered—your all-in-one solution for digital excellence.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div className='hover:border-white bg-black hover:bg-mypurple/20  border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className=" mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/webdevelopers.gif" alt="web development" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Web Development</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your online presence with our expert web development services—where innovation meets impeccable design.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/gd.gif" alt="Graphcs designing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">
          Graphics Designing
        </h3>
        <p className="mt-8 text-sm text-gray-200">
        Ignite your brand with our graphic design magic—where creativity meets visual brilliance.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/cw.gif" alt="content writing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">
          Content Writing
        </h3>
        <p className="mt-8 text-sm text-gray-200">
        Unleash the power of words with our content writing services—where every sentence tells your story and captivates your audience.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/dm.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Digital Marketing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand with our expert digital marketing services – where visibility meets success in the online landscape.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/ve.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Professional Video Editing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Transforming moments into cinematic magic—our video editing services make your story unforgettable.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/seo.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SEO </h3>
        <p class="mt-8 text-sm text-gray-200">
        Boost your online presence with our expert SEO services—because being found is the first step to being remembered.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/insta.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMM </h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand's online charisma with our Social Media Magic – where engagement meets strategy, and your story takes center stage.
        </p>
      </div>
      <div className='hover:border-white bg-black hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black">
          <img src="/smo.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMO </h3>
        <p className=" mt-8 text-sm text-gray-200">
        Elevate your online presence with our Social Media Optimization magic— where visibility meets engagement, and your brand becomes the talk of the digital town!
        </p>
      </div>
    </div>
  </div>
{/* 3rd */}
  <div className="mt-[100px] md:mt-[50px] mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          Why choose us...?
        </p>
      </div>
      </div>
  <h2 className="text-center mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        I Love to share my achievements
      </h2>
  <div className=" py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Existing Clients</dt>
        <h1 className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">110+</h1>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Projects Completed</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">389+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Cups of Chai</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">1000+</dd>
      </div>
    </dl>
  </div>
</div>

{/* testemonials */}

    <section className="px-2 py-10 md:px-0">
      <figure className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-[50px] font-semibold text-mypurple">What our Esteemed client are saying ?</h1>
        <blockquote className="text-justify mt-10 text-xl text-white">
          <p>
            “Choosing this web service was a game-changer for my business. Their innovative designs and seamless functionality not only elevated my online presence but also significantly boosted my customer engagement. The team's expertise and commitment to excellence made the entire process a breeze. I'm thrilled with the results and can confidently say they exceeded my expectations. Highly recommended!”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="isolate flex -space-x-2">
            <img
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
            <img
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>
          <div>
            <p className="font-semibold text-white">90+ Clients</p>
          </div>
        </figcaption>
      </figure>
    </section>
  
  
</>
  )
}
