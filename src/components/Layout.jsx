import { CircleStackIcon, Cog6ToothIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {

    const links = [
        {
            name: "Dashboard",
            icon: <Squares2X2Icon className='h-full w-full'/>,
            href: '/'
        },
        {
            name: "Connections",
            icon: <CircleStackIcon className='h-full w-full'/>,
            href: '/connections'

        },
        {
            name: "Settings",
            icon: <Cog6ToothIcon className='h-full w-full'/>,
            href: '#'
        }
    ]
    return (
        <div className='min-h-screen w-full flex'>

            {/* Sidebar */}
            <div className='fixed w-60 md:flex hidden bg-[#0C50A3] text-white h-screen flex-col gap-4 p-2'>
                <div className='h-20 flex justify-center items-center text-2xl text-white font-bold'> 
                    DASHBOARD
                </div>
                <div className='flex flex-col w-full'>
                {links?.map((item) => (
                    <Link to={item?.href} className={`flex gap-2 p-4 ${item?.href === location.pathname ? "bg-gray-50 text-black" : ""} cursor-pointer hover:bg-gray-50 hover:text-black items-center`}>
                        <div className='h-5 w-5'>
                        {item?.icon}
                        </div>
                        <span className='font-medium text-base'>{item?.name}</span>
                    </Link>
                ))}
                </div>
            </div>

            {/* Main board */}
            <div className='flex-1 md:pl-60'>
                <div className='p-4 flex-1'>
                {children}
                </div>
            </div>
        </div>
    )
}

export default Layout