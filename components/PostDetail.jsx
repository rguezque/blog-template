import moment from 'moment'
import React from 'react'

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-two':
                return <h2 key={index} className="text-2xl mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
                return <h3 key={index} className="text-xl mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'heading-four':
                return <h4 key={index} className="text-md mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className="bg-white rounded-lg pt-8 mb-8">
            <div className="relative overflow-hidden mb-6">
                <div className="flex items-center mb-8 w-full">
                    <div className="flex items-center mb-4 mb-0 lg:w-auto mr-4 gap-2">
                        <img src={post.author.photo.url} alt={post.author.name} height="50px" width="50px" className="align-middle rounded-full" />
                    </div>
                    <div className="font-normal">
                        <span className="block align-middle text-semibold">
                            {post.author.name}
                        </span>
                        <span className="block align-middle text-xs text-gray-800">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>
                </div>

                <h1 className="mb-8 text-3xl">{post.title}</h1>
                <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full rounded-t-lg lg:rounded-lg" />
            </div>

            <div className="px-0">

                {console.log(post.content.raw)}
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </div>
        </div>
    )
}

export default PostDetail