import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseLeftSide from '../components/CourseLeftSide.js/CourseLeftSide';


const CourseLayout = () => {
    return (
        <div className='flex'>
            <div className='w-3/12 bg-gray-800'>
                <CourseLeftSide></CourseLeftSide>
            </div>
            <div className='w-9/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;