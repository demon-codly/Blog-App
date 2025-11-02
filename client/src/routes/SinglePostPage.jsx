import React from 'react'
import Image from '../Components/Image'
import { Link } from 'react-router-dom'
import PostMenuActions from '../Components/PostMenuActions'
import Search from '../Components/Search'
import Comments from '../Components/Comments'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* details */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-4'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span className='text-blue-800'>2 day ago</span>
          </div>
          <p className='text-gray-500 font-sm'> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima assumenda eos provident vitae
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src="postImg.jpeg" w="600" className="rounded-2xl "/>
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum deleniti iure voluptatem facilis ullam laborum temporibus! Voluptates quos aliquam vero in assumenda iste quia ut esse, ad, itaque earum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa voluptates iure dolor sequi, repudiandae maxime illo quasi et ipsam? Tenetur unde aut aliquid veniam ratione! Deserunt aut consequuntur quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis velit porro, aliquid cum recusandae, adipisci numquam consequatur repellat officia possimus. Nisi non architecto odio repudiandae sint quasi deleniti velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere sint nostrum nobis exercitationem harum quas at eveniet illum, voluptatem pariatur suscipit minima voluptas ratione, facilis, distinctio illo sunt. Explicabo.
          </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-8'>
              <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"/>
              <Link className='text-blue-800 '>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-2'>
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          
          
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>All</Link>
            <Link className='underline' to="/">Web Design</Link>
            <Link className='underline' to="/">Development</Link>
            <Link className='underline' to="/">Database</Link>
            <Link className='underline' to="/">Search Engines</Link>
            <Link className='underline' to="/">Marketing</Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      <Comments />

    </div>
  )
}

export default SinglePostPage