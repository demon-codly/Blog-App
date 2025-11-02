import React from 'react'

const PostMenuActions = () => {
  return (
    <div>
        <h1 className='mt-8 mb-4 text-sm font-medium'>Action</h1>
        <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                width="20px"
                height="20px"
            >
                <path
                    d='M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3H12z'
                    stroke='black'
                    strokeWidth="2"
                />
            </svg>
            <span>Save this Post</span>
        </div>
        <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 50 50'
                fill="red"
                width="20px"
                height="20px"
            >
                <path
                    d='M21 2c-1.65 0-3 1.35-3 3v2h-8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h28c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-8V5c0-1.65-1.35-3-3-3h-6zM12 14v28c0 2.2 1.8 4 4 4h18c2.2 0 4-1.8 4-4V14H12zm8 4c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1s-1-.45-1-1V19c0-.55.45-1 1-1zm10 0c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1s-1-.45-1-1V19c0-.55.45-1 1-1z'
                />
            </svg>
            <span>Delete this Post</span>
        </div>
    </div>
  )
}

export default PostMenuActions