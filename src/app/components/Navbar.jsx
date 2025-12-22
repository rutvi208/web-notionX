"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { TbMenu, TbX } from "react-icons/tb";
import Navlogo from '@/../public/images/logo/navbar-logo.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Navbar = () => {
    const [onTap, setOnTap] = useState(false);
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    
    const handleNav = () => {
        setNav(!nav);
        setOnTap((prev) => !prev);
    };

    // Handle scroll to section
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        
        // Close mobile menu if open
        if (nav) {
            setNav(false);
            setOnTap(false);
        }
        
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

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [nav]);

    // Handle scrolling when coming from another page with hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const sectionId = hash.replace('#', '');
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [pathname]);

     // Check if current page is blog
    const isBlogPage = pathname.startsWith('/blog');

    return (
        <div>
            <nav>
                <section className="w-full flex flex-col items-center justify-center text-center">
                    <div className="container mx-auto w-full p-6">
                        <header className="flex justify-between items-center">
                            <div>
                                <Link href={"/"}>
                                    <Image 
                                        fetchPriority='high' 
                                        src={Navlogo} 
                                        alt="notionx Logo" 
                                        width={180} 
                                        height={60}
                                        loading="lazy" 
                                        className='w-40 h-16' 
                                    />
                                </Link>
                            </div>
                            
                            <nav className="hidden lg:flex gap-8 text-sm text-[var(--foreground)] font-medium items-center">
                                <a 
                                    href="#howitworks" 
                                    onClick={(e) => handleSectionClick(e, 'howitworks')}
                                    className="text-lg xl:text-xl hover:text-[var(--cta)] cursor-pointer"
                                >
                                    How it works
                                </a>
                                <a 
                                    href="#pricing" 
                                    onClick={(e) => handleSectionClick(e, 'pricing')}
                                    className="text-lg xl:text-xl hover:text-[var(--cta)] cursor-pointer"
                                >
                                    Pricing
                                </a>
                                <Link 
                                    href="/blog" 
                                    rel="noopener noreferrer" 
                                    className={`text-lg xl:text-xl hover:text-[var(--cta)] ${
                                        isBlogPage ? 'text-[var(--cta)]' : ''
                                    }`}
                                >
                                    Knowledge Hub
                                </Link>
                                <button 
                                    onClick={() => window.open('https://cal.com/notionx/20min', '_blank')} 
                                    className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'
                                >
                                    Book a GEO Strategy Call 
                                    <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
                                        <HiMiniArrowSmallRight />
                                    </span>
                                </button>
                            </nav>
                            
                            <div onClick={handleNav} className='lg:hidden z-50'>
                                {nav ? (
                                    <TbX size={24} color="#222222" onClick={handleNav} />  
                                ) : (
                                    <TbMenu size={24} color={onTap ? "#4D4D4D" : "#222222"} /> 
                                )}
                            </div>
                            
                            <div 
                                onClick={handleNav}
                                className={`fixed top-0 left-0 h-screen w-full bg-[#F7F7F7] px-4 py-8 flex flex-col text-[var(--foreground)] z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
                                    nav ? "translate-x-0" : "-translate-x-full"
                                }`}
                            >
                                <div className='justify-center flex items-center'>
                                    <Link href={"/"}>
                                        <Image 
                                            fetchPriority='high' 
                                            src={Navlogo} 
                                            alt="ResoNex logo" 
                                            width={160} 
                                            height={40}
                                            loading="lazy" 
                                        />
                                    </Link>
                                </div>

                                <ul className='w-full pt-12'>
                                    <li className='text-2xl py-4 flex items-start'>
                                        <a 
                                            href="#howitworks"
                                            onClick={(e) => handleSectionClick(e, 'howitworks')}
                                            className="cursor-pointer"
                                        >
                                            How it works
                                        </a>
                                    </li>
                                    <li className='text-2xl py-4 flex items-start'>
                                        <a 
                                            href='#pricing'
                                            onClick={(e) => handleSectionClick(e, 'pricing')}
                                            className="cursor-pointer"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/blog" rel="noopener noreferrer" 
                                        className={`text-2xl py-4 flex items-start ${
                                                isBlogPage ? 'text-[var(--cta)]' : ''
                                            }`}>
                                            Knowledge Hub
                                        </a>
                                    </li>
                                    <li>
                                        <Link  
                                            href="https://geo.notionx.ai/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="group text-2xl py-4 flex items-center gap-2"
                                        >
                                            Claim Your AI Visibility Audit 
                                            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                                                <HiMiniArrowSmallRight/> 
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                
                                <div>
                                    <button 
                                        onClick={() => window.open('https://cal.com/notionx/20min', '_blank')} 
                                        className='group mt-4 py-2.5 px-12 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] flex items-center rounded-full text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'
                                    >
                                        Book a GEO Strategy Call 
                                        <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
                                            <HiMiniArrowSmallRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </header>
                    </div>
                </section>
            </nav>
        </div>
    );
};

export default Navbar;