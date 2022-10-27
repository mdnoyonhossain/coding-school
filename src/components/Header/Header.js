import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const userSignOut = () => {
        logOut()
            .then(() => {
                toast.success('LogOut Successfull');
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='bg-gray-700 text-white'>
            <div className="navbar container w-11/12 m-auto">
                <div className="flex-1">
                    <Link to="/" className=" text-xl">Code School</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            
                            <span className="relative">
                                <input id="Toggle2" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-4 rounded-full shadow bg-gray-800 peer-checked:dark:bg-violet-400"></div>
                                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
                            </span>
                            
                        </label>
                        {
                            user?.email ?
                                <>
                                    <li><button onClick={userSignOut}>LogOut</button></li>
                                    <li tabIndex={0}>
                                        <Link><img className="w-10 object-fill rounded-full" src={user?.photoURL} alt="" /></Link>
                                        <ul className="p-2 bg-red-500 text-white">
                                            <li><Link to="/profile">{user?.displayName}</Link></li>
                                        </ul>
                                    </li>
                                </>
                                :

                                <li><Link to="/login">Login</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;