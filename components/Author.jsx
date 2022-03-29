import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-700">
            <div className="absolute left-0 right-0 -top-14">
                <Image unoptimized src={author.photo.url} alt={author.name} height="100px" width="100px" className="rounded-full align-middle" />
            </div>
            <h3 className="text-white my-4 text-xl font-bold">{ author.name }</h3>
            <span className="text-white text-md">{ author.bio }</span>
        </div>
    )
}

export default Author