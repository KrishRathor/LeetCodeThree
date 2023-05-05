import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { UserContext } from './UserContext';

const Navbar = (props) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        if (props.loginStatus === 'login') {
            navigate('/');
        } else if (props.loginStatus === 'signup') {
            navigate('/signup');
        } else if (props.loginStatus === 'logout') {
            localStorage.clear()
            navigate("/")
        }
    }

    const [user, setUser] = useState('');

    const current_user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <nav className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <p className="text-black text-2xl font-bold">LeetCode</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to={'/problems'} className={`text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${props.active === '1' ? 'underline' : ''} `}>Problems</Link>
                                    <p className={`text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${props.active === '2' ? 'underline' : ''} `}>About</p>
                                    <p className={`text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${props.active === '3' ? 'underline' : ''} `}>My Problems</p>
                                    <p onClick={handleLogout} className={`text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${props.active === '3' ? 'underline' : ''} `}>
                                        {
                                            (props.loginStatus === 'login') ? 'Login' : (props.loginStatus === 'signup') ? 'Signup' : (props.loginStatus === 'logout') ? 'LogOut' : ''
                                        }
                                    </p>

                                    {
                                        props.loginStatus === 'logout' ? (
                                            <>
                                                <p className="text-black px-3 py-2 rounded-md text-sm font-medium">{current_user.name}</p>
                                            </>
                                        ) : ''
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar
