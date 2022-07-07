import React, {useState, useEffect} from "react";
import sanityClient from '../client';

export default function Project(){

    const [projectData, setProjectData] = useState(null);
    useEffect( ()=>{

        sanityClient.fetch(`
            *[_type=="project"] {
                title, slug, projectType, start_at, end_at, link, tags, description
                
            }`)
        .then( (data)=> setProjectData(data))
        .catch( console.log("No Data is found") );

    },[]);

    return (
        <main className="ng-green-100 min-h-screen p-12">
            <section className="container max-auto">
                <h1 className="text-5xl flex justify-center cursive ">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page !
                </h2>
                <section className="grid grid-cols-2 gap-8">

                    { projectData && projectData.map( (project, index)=> (
                    <article className="relative rounded-lg shadow-xl bg-white p-16" key={index}>
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={project.link} target="_blank" alt={project.title} rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished On: </strong>{" "} {new Date(project.end_at).toLocaleDateString()}
                            </span>
                            <span></span>
                            <span></span>
                            <p className="my-6 text-gray-700 leading-relaxed text-lg">
                                Block Content
                            </p>
                            <span></span>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}