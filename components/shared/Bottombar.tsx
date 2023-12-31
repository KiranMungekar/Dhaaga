"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';


function Bottombar() {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <section className="bottombar">
            <div className="bottombar_container">
            {sidebarLinks.map(link => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route; 
                    console.log("pathname: "+ pathName + " - link route: " + link.route); 
                    return ( 
                    <Link key={link.label} href={link.route} className={`bottombar_link ${isActive && 'bg-primary-500'}`}>
                        <Image src={link.imgURL} alt={link.label} width={24} height={24}/>
                        <p className="text-subtle-medium text-slate-50 max-sm:hidden">{`${link.label.split(/\s+./)[0]}`}</p>
                    </Link>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Bottombar;