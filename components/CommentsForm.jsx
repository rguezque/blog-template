import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from './../services'

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false)
    const [storage, setStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')

    }, [])

    const handleCommitSubmission = () => {
        setError(false)
        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { checked: storeData } = storeDataEl.current

        if (!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = { comment, name, email, slug }

        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true)
                setTimeout(() => {
                    setShowSuccessMessage(false)
                }, 3000)
            })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="bg-white text-xl font-semibold border-b mb-8 pb-4">Leave a reply</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment here." />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="text" ref={nameEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="name" placeholder="Your name here." />
                <input type="email" ref={emailEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="email" placeholder="Your email here." />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
                    <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save the name and email for the next time I comment.</label>
                </div>
            </div>
            {error && <p classname="text-xs text-red-500">All fields are required.</p>}
            <div className="mt-8">
                <button type="button" onClick={handleCommitSubmission} className="text-sm transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-white rounded-full px-8 py-3">Submit comment</button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review.</span>}
            </div>
        </div>
    )
}

export default CommentsForm