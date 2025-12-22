"use client";

import Image from 'next/image';
import PlansBg from '@/../public/images/backgrounds/PlansBg.svg';
import Star from '@/../public/images/Plans/Star.png';
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiShield } from "react-icons/fi";
import Knowtion from '@/../public/images/Plans/Knowtion.svg';
import Firelands from '@/../public/images/Plans/Firelands.svg';
import CimconSoftwares from '@/../public/images/Plans/Cimcon.svg';
import KenGanley from '@/../public/images/Plans/KenGanley.svg';
import Malish from '@/../public/images/Plans/Malish.svg';

const Plans = () => {
    return (
        <section className="bg-black relative overflow-hidden" aria-labelledby="pricing-plans">
            <Image
                src={PlansBg}
                alt="Plan Background"
                loading="lazy"
                className='absolute inset-0 object-cover h-full w-full'
                aria-hidden="true"
            />
            <div className='relative inset-0 z-auto'>
                <div className="container mx-auto place-items-center py-20 px-4">
                    <h2 id="pricing-plans" className="heading-font text-white text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">GEO Service Plans</h2>
                    <p className="text-lg lg:text-xl text-center text-white content-font mt-3">Choose the plan that fits your business goals and budget</p>

                    <div className='flex flex-col md:flex-row space-y-4 sm:space-y-0 md:space-x-8 lg:space-x-10 mt-24 justify-center'>
                        {/* professional */}
                        <article 
                            className='bg-[conic-gradient(at_left,_#EFE3DD,_#FDF8F5)] rounded-xl p-10 flex flex-col'
                            itemScope 
                            itemType="https://schema.org/Offer"
                        >
                            <div className='flex flex-row space-x-3 items-center'>
                                <Image 
                                    src={Star}
                                    alt="Star Background"
                                    className='w-4 h-4 sm:w-4 sm:h-4'
                                    aria-hidden="true"
                                />
                                <h3 className='text-xl lg:text-2xl font-semibold uppercase tracking-[-0.045rem]' itemProp="name">professional</h3>
                            </div>

                            <p className='font-medium text-4xl lg:text-[4rem] mt-6 lg:mt-10'>
                                <span itemProp="price" content="1499">$1,499</span>
                            </p>
                            <p className='text-lg lg:text-xl content-font'>
                                <span itemProp="priceCurrency" content="USD">per month</span>
                            </p>
                            <meta itemProp="availability" content="https://schema.org/InStock" />

                            <div>
                                <ul className="space-y-3 my-10 lg:my-[3.75rem] list-none">
                                    {[
                                        "Technical SEO Audit",
                                        "Local GEO Enhancement",
                                        "Schema development",
                                        "Executive Monthly Reviews",
                                        "Monthly Strategy Reports",
                                        "Monthly 30 Minutes Strategic Call",
                                    ].map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex flex-row space-x-3 items-center"
                                        >
                                            <FiCheckCircle className="text-[#9B715C]" aria-hidden="true" />
                                            <span className="content-font text-lg lg:text-xl">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <button 
                                onClick={() => window.open('https://cal.com/notionx/20min', '_blank')} 
                                className='mt-auto py-2.5 px-6 cursor-pointer font-semibold w-full justify-center place-content-center bg-[var(--cta)] border-[0.0625rem] border-[var(--cta)] text-white flex items-center rounded-full text-base lg:text-lg hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'
                                aria-label="Book a GEO Strategy Call for Professional Plan"
                            >
                                Book a GEO Strategy Call
                            </button>
                        </article>

                        {/* enterprise */}
                        <article 
                            className='bg-[#1F1F1F] sm:w-[21rem] lg:w-[23.5rem] rounded-xl p-10 flex flex-col'
                            itemScope 
                            itemType="https://schema.org/Offer"
                        >
                            <div className='flex flex-row space-x-3 items-center text-white'>
                                <Image 
                                    src={Star}
                                    alt="Star Background"
                                    className='w-4 h-4 sm:w-4 sm:h-4 invert'
                                    aria-hidden="true"
                                />
                                <h3 className='text-xl lg:text-2xl font-semibold uppercase tracking-[-0.045rem]' itemProp="name">enterprise</h3>
                            </div>

                            <p className='text-white font-medium text-4xl lg:text-[4rem] mt-6 lg:mt-10'>
                                <span itemProp="price" content="2499">$2,499</span>
                            </p>
                            <p className='text-white text-lg lg:text-xl content-font'>
                                <span itemProp="priceCurrency" content="USD">per month</span>
                            </p>
                            <meta itemProp="availability" content="https://schema.org/InStock" />

                            <div>
                                <ul className="space-y-3 my-10 lg:my-[3.75rem] list-none">
                                    {[
                                        "Everything in Professional",
                                        "Custom GEO Strategy",
                                        "Custom Schema Development",
                                        "Competitor GEO Analysis",
                                        "Structured Data Testing",
                                        "Dedicated account manager",
                                        "Monthly 1 Hour Strategic Call"
                                    ].map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex flex-row space-x-3 items-center"
                                        >
                                            <FiCheckCircle className="text-[#FAEEE6]" aria-hidden="true" />
                                            <span className="text-white content-font text-lg lg:text-xl">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <button 
                                onClick={() => window.open('https://cal.com/notionx/20min', '_blank')} 
                                className='mt-auto py-2.5 px-6 cursor-pointer font-semibold justify-center w-full place-content-center bg-[var(--cta)] border-[0.0625rem] border-[var(--cta)] text-white flex items-center rounded-full text-base lg:text-lg hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'
                                aria-label="Book a GEO Strategy Call for Enterprise Plan"
                            >
                                Book a GEO Strategy Call
                            </button>
                        </article>
                    </div>

                    {/* USP */}
                    <div className='mt-8 lg:mt-10 flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-4 lg:space-x-0 max-w-3xl justify-center mx-auto'>
                        <div className='text-[#FAEEE6] flex items-center mx-auto justify-center space-x-3 sm:pe-8 sm:border-e-[0.0625rem] border-[#D4BAAE]'>
                            <FiCheckCircle aria-hidden="true" />
                            <span className='content-font text-base lg:text-xl'>Results in 10-12 weeks</span>
                        </div>
                        <div className='text-[#FAEEE6] flex items-center mx-auto justify-center space-x-3 sm:px-8 sm:border-e-[0.0625rem] border-[#D4BAAE]'>
                            <AiOutlineUsergroupAdd aria-hidden="true" />
                            <span className='content-font text-base lg:text-xl'>10+ businesses served</span>
                        </div>
                        <div className='text-[#FAEEE6] flex items-center mx-auto justify-center space-x-3 sm:ps-8'>
                            <FiShield aria-hidden="true" />
                            <span className='content-font text-base lg:text-xl'>No long-term contracts</span>
                        </div>
                    </div>

                    {/* Testimonial section */}
                    <div className='bg-[#191919] rounded-xl mt-16 lg:mt-28 p-6 sm:p-8 lg:p-10 xl:px-16 max-w-5xl mx-auto'>
                        <div className='container mx-auto grid grid-cols-2 space-x-4 space-y-8 sm:space-y-0 sm:flex sm:flex-row sm:space-x-8 xl:space-x-12 justify-center items-center'>
                            <div className='justify-center flex'>
                                <Image
                                    src={Firelands}
                                    alt='Firelands client logo'
                                    width={120}
                                    height={100}
                                />
                            </div>
                            <div className='justify-center flex'>
                                <Image
                                    src={KenGanley}
                                    alt='Ken Ganley client logo'
                                    width={160}
                                    height={120}
                                />
                            </div>
                            <div className='justify-center flex'>
                                <Image
                                    src={CimconSoftwares}
                                    alt='Cimcon Softwares client logo'
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className='justify-center flex'>
                                <Image
                                    src={Malish}
                                    alt='Malish client logo'
                                />
                            </div>
                            <div className='justify-center flex col-span-2 sm:col-span-1'>
                                <Image
                                    src={Knowtion}
                                    alt='Knowtion client logo'
                                    width={160}
                                    height={120}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;