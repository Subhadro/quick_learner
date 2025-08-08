import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616587894289-86480e533129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww')" }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase"> Log In with email</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>



                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full" type="email" placeholder="Enter your email" />
                    </div>




                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full" type="password" placeholder="Enter your password" />
                    </div>

                    <div className="mt-8">
                        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Log In</button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to={'/signup'} className="text-xs text-gray-500 uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
