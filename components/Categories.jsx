import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from './../services'

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newcategories) => setCategories(newcategories))
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-4 font-semibold ">Categories</h3>
            {categories.map(category => (
                <span className="cursor-pointer text-sm font-medium block mb-3">
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        {category.name}
                    </Link>
                </span>
            ))}
        </div>
    )
}

export default Categories