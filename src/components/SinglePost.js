import React, {useState, useEffect} from "react";
import sanityClient from '../client';
import {useParams} from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source)
{
    return builder.image(source);
}

export default function SinglePost(){
    const [postDetails, setPostDetails] = useState(null);
    const {slug} = useParams();

    useEffect( ()=> {
         sanityClient.fetch(`
            *[slug.current=="${slug}"]{
                title, slug, _id, body ,mainImage {
                    asset-> {
                        _id, url
                    }
                },
                "name": author->name,
                "authorImage": author->image
            }
         `)
         .then( (data)=> setPostDetails(data[0]) )
         .catch(console.log("Not found any data"));
    },[slug]);

    if(!postDetails) return "<div>Loading.....</div>";

    return (
        <main class="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-15 lg:mt-150">
                        <div className="bg-white bg-opacity-75 rounder p-12 mt-30">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">{postDetails.title}</h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(postDetails.authorImage).url()} alt={postDetails.name} className="w-10 h-10 rounder-full " />
                                <p className="cursive flex items-center pl-2 text-2xl">{postDetails.name}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <img src={postDetails.mainImage.asset.url} alt={postDetails.title} className="w-full object-cover rounder-t" style={{ height: "400px" }} />
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                   <BlockContent blocks={postDetails.body} projectId="2y7teinp" dataset="production"></BlockContent>
                </div>
            </article>
        </main>
    );
}