import Image from "next/image";
import LinkBg from "@/../public/images/Roadmap/Announcement-Link-BG.webp";

const CampaignLink = () => {
    return (
        <>
            <div className='relative overflow-hidden lg:mb-2'>
                {/* Background Image 🔔*/}
                <div className='absolute inset-0 z-0'>
                    <Image src={LinkBg} alt="Campaign background" className='object-cover object-center h-full w-full' />
                </div>
                <div className="hidden sm:block relative z-30 mx-auto bg-gradient-to-r from-[#9b001c8f] via-[#720015dd] to-[#9b001c8f] text-white py-3 xl:py-5 px-4 text-center text-base font-semibold tracking-wider">
                    <span>Santa brings gifts. We're asking for honesty.</span><a href="/roadmap" rel="noopener noreferrer" className="px-1 underline text-[#E7B254] hover:no-underline">What Not to Build in 2026 →</a>
                </div>
                <div className="sm:hidden relative z-30 mx-auto bg-gradient-to-r from-[#9b001c8f] via-[#720015dd] to-[#9b001c8f] text-white py-3 xl:py-5 px-4 text-center text-xs font-semibold tracking-wider">
                    <span>Santa brings gifts. We're asking for honesty.</span><br/><a href="/roadmap" rel="noopener noreferrer">What Not to Build in 2026 →</a>
                </div>
            </div>
        </>
    )
}

export default CampaignLink;