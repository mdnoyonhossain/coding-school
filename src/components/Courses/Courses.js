import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {
    const courseId = useLoaderData();
    console.log(courseId);
    const { title, thumbnail_url, total_view, published_date, _id } = courseId;

    return (
        <section className="py-6 sm:py-12  bg-gray-900  text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Course Details View</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
                    <article className="flex flex-col bg-gray-800">
                        <Link to={`/courses/details/${_id}`} aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  bg-gray-500" src={thumbnail_url} />
                        </Link>
                        <div className="flex flex-col flex-1 p-6">
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs  text-gray-400">
                                <span>{published_date}</span>
                                <span>{total_view} views</span>
                            </div>
                        </div>
                    </article>
                    
                </div>
            </div>
        </section>
    );
};

export default Courses;