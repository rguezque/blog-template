import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from './../services'
import { FaGrav } from 'react-icons/fa'


function Header() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newcategories) => setCategories(newcategories))
    }, [])

    return (
        <div className="container mx-auto px-10 mb-8 bg-black">
            <div className="w-full inline-block py-8 text-white">
                <div className="md:float-left gap-2 inline-flex">
                    <div className="inline-block align-middle">
                        <Link href="/">
                            <FaGrav className="text-5xl cursor-pointer" />
                        </Link>
                    </div>
                    <div className="inline-block align-middle">
                        <span className="block cursor-default font-bold text-2xl my-0 py-0">
                            blog template
                        </span>
                        {/* <span className="block cursor-default font-semibold text-xs uppercase align-middle my-0 py-0">
                            personal blog
                        </span> */}
                    </div>
                </div>

                <div className="hidden md:float-right md:contents">
                    {categories.map(category => (
                        <Link href={`/category/${category.slug}`} key={category.slug}>
                            <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header