import React from 'react'
import moment from 'moment'
import Link from 'next/link'

function PostCard({ post }) {
    //console.log(post)
    return (
        <div className="border-b bg-white rounded-lg p-0 lg:p-4 pb-15 mb-8">
            {/* Imagen previa */}
            {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
            </div> */}

            {/* Información de autor y fecha publicación */}
            <div className="block flex text-center items-center justify-left mb-1 w-full ">
                <div className="flex items-center text-sm mb-4 lg:mb-0 lg:w-auto mr-3 gap-3">
                    <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className="align-middle rounded-full" />
                    <span className="inline text-md align-middle">{post.author.name}</span>
                </div>
                <div className='font-normal text-center items-center text-sm text-gray-500 mb-4 lg:mb-0'>
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>


            {/* Titulo principal */}
            <h1 className="transition duration-500 text-left justify-left mb-2 cursor-pointer hover:text-blue-600 text-xl">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>

            

            {/* Prologo del post */}
            <p className="text-md font-normal px-0 mb-4">
                {post.excerpt}
            </p>

            {/* Botón de ir al post */}
            <div className="text-center mb-4">
                <Link href={`/post/${post.slug}`}>
                    <span className="text-sm transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                        Continue reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard