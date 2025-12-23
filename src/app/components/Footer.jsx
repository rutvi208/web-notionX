"use client";

import Image from "next/image";
import logo from '@/../public/images/logo/footer-logo.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Handle scroll to section
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        
        // Check if we're on the home page
        const isHomePage = pathname === '/';
        
        if (isHomePage) {
            // If on home page, just scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // If on another page, navigate to home with hash
            router.push(`/#${sectionId}`);
        }
    };

    return (
        <footer className="bg-gradient-to-r from-[#340404] to-[#161300]" role="contentinfo">
            <div className='flex flex-col space-y-4 sm:space-y-10 xl:space-y-12 px-3 lg:px-6 container mx-auto'>
                
                {/* left */}
                <nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between mt-8" aria-label="Footer navigation">
                    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white font-semibold sm:items-center list-none">
                        <li>
                        {/* <a href="#howitworks" className="text-xl hover:text-[var(--cta)]">How it works</a>
                        <a href="#pricing" className="text-xl hover:text-[var(--cta)]">Pricing</a> */}
                            <a 
                                href="#howitworks" 
                                onClick={(e) => handleSectionClick(e, 'howitworks')}
                                className="text-xl hover:text-[var(--cta)] cursor-pointer"
                            >
                                How it works
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#pricing" 
                                onClick={(e) => handleSectionClick(e, 'pricing')}
                                className="text-xl hover:text-[var(--cta)] cursor-pointer"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <Link 
                                href="https://geo.notionx.ai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='cursor-pointer group text-white flex items-center text-xl font-semibold hover:text-[var(--cta)] transition duration-300'>
                                Claim My AI Visibility Audit <span className='text-white ps-2 text-2xl group-hover:text-[var(--cta)] transition-transform duration-300 ease-out group-hover:translate-x-1' aria-hidden="true"><HiMiniArrowSmallRight /></span>
                            </Link>
                        </li>
                    </ul>
                    <div className="justify-end-safe">
                        <button onClick={() => window.open('https://cal.com/notionx/20min', '_blank')}
                            className='group py-2.5 px-10 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300' aria-label="Book a GEO Strategy Call">
                            Book a GEO Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1' aria-hidden="true"><HiMiniArrowSmallRight /></span>
                        </button>
                    </div>
                    
                </nav>

                {/* right */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 mt-8 mb-2 sm:mb-4 lg:mb-5 sm:justify-between sm:items-center">
                    
                    <div>
                        <div className="text-white flex flex-col sm:flex-row space-y-4 sm:space-y-0 content-font sm:items-center text-sm">
                            {/* <div className="pe-2 2xl:pe-4"> */}
                            <p className="pe-2 2xl:pe-4 2xl:text-base">© 2025 Knowtion, Inc. All rights reserved.</p>
                            {/* </div> */}
                            <nav className="flex flex-row md:justify-start" aria-label="Legal links">
                                {/* <div className="border-r-[0.0625rem] border-r-white/40 pe-2 sm:pe-2 2xl:pe-4 cursor-pointer hover:text-[var(--cta)]"> */}
                                    <Link href="/privacypolicy" rel="noopener noreferrer" className="border-r-[0.0625rem] border-r-white/40 pe-2 sm:pe-2 2xl:pe-4 cursor-pointer hover:text-[var(--cta)]">Privacy Policy</Link>
                                {/* </div> */}
                                {/* <div className="px-2 sm:px-2 2xl:px-4 cursor-pointer hover:text-[var(--cta)]"> */}
                                    <Link href="/termsofuse" rel="noopener noreferrer" className="px-2 sm:px-2 2xl:px-4 cursor-pointer hover:text-[var(--cta)]">Terms of Services</Link>
                                {/* </div> */}
                            </nav>
                        </div>
                    </div>
                    <div>
                        <Link href={"/"}><Image
                            src={logo}
                            alt="notionx Logo"
                            loading="lazy"
                            className='w-52 h-auto'
                        /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;