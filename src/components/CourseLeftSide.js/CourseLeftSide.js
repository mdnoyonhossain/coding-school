import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CourseLeftSide = () => {
    const coursesNav = useLoaderData();

    return (
        <div>
            {
                coursesNav.map(course => <>
                    <div className="flex flex-col h-full p-3 w-60 bg-gray-800 text-gray-100">
                        <div className="space-y-3">
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <Link to={`/courses/${course._id}`} className="flex items-center p-2  rounded-md">

                                            <span>{course.title}</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default CourseLeftSide;