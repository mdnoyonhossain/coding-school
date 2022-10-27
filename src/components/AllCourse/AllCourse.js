import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCourse = () => {
    const allCourse = useLoaderData();
    console.log(allCourse);
    return (
        <div>
            
        </div>
    );
};

export default AllCourse;