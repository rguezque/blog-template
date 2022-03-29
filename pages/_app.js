import React, { useEffect, useState } from 'react'
import { Layout } from '../components'

import 'tailwindcss/tailwind.css'
import './../styles/globals.scss'

function RguezQueBlog({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default RguezQueBlog
