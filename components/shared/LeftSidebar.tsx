"use client";

import { sidebarLinks } from '../../constants/index';
import Link from "next/link";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignOutButton } from '@clerk/nextjs';


function LeftSidebar() {
    const router = useRouter();
    const pathName = usePathname();

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map(link => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route; 
                    console.log("pathname: "+ pathName + " - link route: " + link.route); 
                    return ( <Link key={link.label} href={link.route} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
                    <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                    {`${link.label}`}
                    </Link>
                    )
                })
                }
            </div>
            <div className='mt-10 px-6'>
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                        <div className="cursor-pointer leftsidebar_link">
                            <Image src='/assets/logout.svg' alt='logout' width={24} height={24}/>
                            <p className='max-lg:hidden'>{'Logout'}</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>

        </section>
    )
}

export default LeftSidebar;