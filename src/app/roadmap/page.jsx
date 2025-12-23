"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import CampaignBg from '@/../../public/images/Roadmap/CampaignPage-Bg.webp';
import CampaignNotionXlogo from '@/../../public/images/Roadmap/Campaign-NotionX-logo.svg';
import Ornaments from "@/../public/images/Roadmap/ornaments.svg";

// Card data configuration
const roadmapCards = [
  {
    id: 1,
    noise: {
      title: '"Let\'s ask ChatGPT"',
      description: 'Generic text. Hallucinations. Slop.'
    },
    signal: {
      title: 'Crystal Ball Mode',
      description: 'AI that actually knows your business math and predicts revenue before you miss it.',
      action: 'Activate Future Sight'
    },
    initialVotes: 124
  },
  {
    id: 2,
    noise: {
      title: 'Dashboards Nobody Reads',
      description: '15 tabs open. 40 colorful charts. Zero decisions.'
    },
    signal: {
      title: 'The "God View"',
      description: 'One screen. Three numbers. The exact truth about where your money is hiding.',
      action: 'Activate Clarity'
    },
    initialVotes: 98
  },
  {
    id: 3,
    noise: {
      title: 'Copy-Paste Culture',
      description: 'Smart people doing robot work. Email chains that never end.'
    },
    signal: {
      title: 'Autopilot Bliss',
      description: 'Systems that run your operations while you sleep (or actually take a vacation).',
      action: 'Activate Autopilot'
    },
    initialVotes: 215
  },
  {
    id: 4,
    noise: {
      title: '"Hope Marketing"',
      description: "Posting. Praying. Paying for clicks that don't convert."
    },
    signal: {
      title: 'Unfair Advantage',
      description: 'Being the first result exactly when your highest-paying customer hits "Search."',
      action: 'Activate Dominance'
    },
    initialVotes: 167
  }
];


// Individual Card Component
const RoadmapCard = ({ card, isDeployed, onDeploy, votes, index }) => {
  return (
    <div 
      className={`
        bg-[#720014] rounded-xl md:rounded-[20px] overflow-hidden 
        border border-[#e8b460] transition-all duration-300 relative cursor-pointer
        hover:shadow-xl hover:-translate-y-1
        ${isDeployed ? 'ring-2 ring-[#E7B254] shadow-[0_0_25px_rgba(231,178,84,0.3)]' : ''}
      `}
      style={{ animation: `slideIn 0.6s ease-out ${index * 0.1}s backwards` }}
      onClick={() => onDeploy(card.id)}
    >
      <div className="flex flex-col h-full">
        {/* Noise Section */}
        <div className='flex justify-between items-start'>
          <div 
            className={`
              p-6 transition-opacity duration-300
              ${isDeployed ? 'opacity-30' : ''}
            `}
          >
            <span className="inline-block drop-shadow-sm font-semibold text-sm sm:text-base uppercase tracking-wider bg-white text-[#720014] px-3 py-[2px] rounded-full mb-2">
              Archive (Noise)
            </span>
            <h3 className="text-xl lg:text-2xl font-semibold tracking-[0.02em] text-white lg:mt-2 mb-1 line-through opacity-80">{card.noise.title}</h3>
            <p className="text-base lg:text-lg text-white/70">{card.noise.description}</p>
          </div>
          <div className="px-4 pt-0 flex-shrink-0">
            <Image src={Ornaments} alt="ornaments" className='w-auto h-10' />
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-[#9C6D1A] via-[#E7B254] to-[#9C6D1A] mx-6"></div>

        {/* Signal Section */}
        <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
          <div>
            <span className="inline-block drop-shadow-md font-semibold text-sm sm:text-base uppercase tracking-wider bg-gradient-to-br from-[#002102] via-[#135B41] to-[#002102] text-white px-3 py-[2px] rounded-full mb-2">
              Deploy (Signal)
            </span>
            <h3 className="text-xl lg:text-2xl font-semibold tracking-[0.02em] text-white lg:mt-2 mb-1">{card.signal.title}</h3>
            <p className="text-base lg:text-lg text-white mb-6">{card.signal.description}</p>
          </div>
          
          {/* Vote/Deploy Button */}
          <div className="flex items-center gap-3">
            <button
              className={`
                flex items-center gap-2 py-2 px-3 sm:px-5 rounded-full text-base md:text-lg font-semibold 
                transition-all duration-200 hover:opacity-90
                ${isDeployed 
                  ? 'bg-gradient-to-br from-[#002102] via-[#135B41] to-[#002102] text-white' 
                  : 'bg-gradient-to-b from-[#E7B254] to-[#FAFAB2] text-[#720014]'
                }
              `}
            >
              <div 
                className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300
                  ${isDeployed ? 'bg-white border-white' : 'border-[#720014]'}
                `}
              >
                <span className={`transition-all duration-300 ${isDeployed ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <svg width="10" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="#135B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {isDeployed ? 'Deployed!' : card.signal.action}
            </button>
            
            <span className="text-base text-white">
              {votes === 1 ? '1 vote' : `${votes} votes`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Roadmap2026 = () => {
  const [deployedCards, setDeployedCards] = useState({});
  const [votes, setVotes] = useState(
    roadmapCards.reduce((acc, card) => ({ ...acc, [card.id]: card.initialVotes }), {})
  );

  const handleDeploy = (cardId) => {
    // Prevent toggling off (commitment feeling)
    if (deployedCards[cardId]) return;

    setDeployedCards(prev => ({ ...prev, [cardId]: true }));
    setVotes(prev => ({ ...prev, [cardId]: prev[cardId] + 1 }));

    // Haptic feedback on mobile
    if (navigator.vibrate) navigator.vibrate(50);
  };

  return (
    <section 
      aria-label="The 2026 Anti-Roadmap | Notionmind®"
      className="bg-[#003614]"
    >

      <div className='relative overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image src={CampaignBg} alt="Campaign background" className='object-cover h-full w-full' />
        </div>

        {/* Green gradient overlay */}
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-[#003614] sm:from-0% lg:from-5% via-[#00361455] sm:to-95% lg:to-85% to-[#003614]" />

        <div className='relative z-30 mx-auto'>

          {/* Hero Section */}
          <section className="py-12 lg:py-12 2xl:py-16 text-center mx-auto items-center flex flex-col">
            <Image src={CampaignNotionXlogo} alt="Campaign Notionmind Logo" className='h-16 lg:h-20 2xl:h-24 w-auto mb-4 2xl:mb-10' />
            <div className="text-lg text-[#720014] mt-8 mb-4 bg-gradient-to-b from-[#E7B254] to-[#FAFAB2] py-2 px-4 rounded-xl sm:rounded-full">
              The 2026 Anti-Roadmap
            </div>
            <h1 
              style={{
                WebkitTextStroke: '1.5px transparent',
                WebkitTextFillColor: 'transparent',
              }}
              className="text-center drop-shadow-sm leading-[1.10em] tracking-[-0.015em] text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium bg-gradient-to-b from-[#FAFAB2] to-[#E7B254] bg-clip-text text-transparent"
            >
              Don't Add Noise.<br />Deploy Signal.
            </h1>
            <p className="text-white text-xl lg:text-3xl px-3 py-4 lg:py-8 text-center title-theme tracking-[-0.015em] sm:w-9/12 lg:w-10/12 xl:w-8/12 2xl:w-5/12">
              Most strategic plans fail because they do too much.<br />
              Join <strong className="text-[#E7B254]">400+ Founders</strong> voting on what to delete in 2026.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roadmapCards.map((card, index) => (
                <RoadmapCard
                  key={card.id}
                  card={card}
                  index={index}
                  isDeployed={deployedCards[card.id]}
                  onDeploy={handleDeploy}
                  votes={votes[card.id]}
                />
              ))}
            </div>

            {/* CTA Form */}
            <div className="bg-[#002102] text-white px-4 py-8 md:p-12 text-center rounded-xl lg:rounded-[20px] my-12 sm:max-w-[1000px] lg:max-w-full mx-auto mt-8 lg:mt-16 border border-[#e8b460] relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl">🚀</div>
              
              <h2 
                style={{
                  WebkitTextStroke: '1px transparent',
                  WebkitTextFillColor: 'transparent',
                }} 
                className="text-2xl md:text-3xl tracking-wide font-semibold mb-4 mt-6 bg-gradient-to-b from-[#FAFAB2] to-[#E7B254] bg-clip-text text-transparent"
              >
                Sign the 2026 Manifesto
              </h2>
              <p className="text-sm md:text-base opacity-95 mb-8">
                Lock in your strategy. We'll send you the Anti-Roadmap Report.
              </p>

              <div className="py-6 md:p-8 rounded-lg mt-8">
                <form className="mx-2 md:mx-8 lg:mx-20 xl:mx-24">
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                    <div className='mb-4 md:mb-6'>
                      <label htmlFor="fullName" className="block text-left text-sm md:text-base text-[#F7F7F7]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="First Last"
                        className="text-sm md:text-base bg-gray-200 text-black mt-1 block w-full px-4 py-3 rounded-lg sm:rounded-xl shadow-sm focus:border-[#E7B254] focus:ring-[#E7B254] focus:outline-none"
                      />
                    </div>

                    <div className='mb-4 md:mb-6'>
                      <label htmlFor="linkedinUrl" className="block text-left text-sm md:text-base text-[#F7F7F7]">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        autoComplete="url"
                        required
                        placeholder="linkedin.com/in/..."
                        className="text-sm md:text-base bg-gray-200 text-black mt-1 block w-full px-4 py-3 rounded-lg sm:rounded-xl shadow-sm focus:border-[#E7B254] focus:ring-[#E7B254] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className='mb-4 md:mb-6'>
                    <label htmlFor="noiseToDelete" className="block text-left text-sm md:text-base text-[#F7F7F7]">
                      One "Noise" item you are deleting in 2026?
                    </label>
                    <input
                      type="text"
                      id="noiseToDelete"
                      name="noiseToDelete"
                      placeholder="e.g. Weekly status meetings, Manual reporting..."
                      className="text-sm md:text-base bg-gray-200 text-black mt-1 block w-full px-4 py-3 rounded-lg sm:rounded-xl shadow-sm focus:border-[#E7B254] focus:ring-[#E7B254] focus:outline-none"
                    />
                  </div>

                  <div className='mb-4 md:mb-6'>
                    <label className="flex items-start gap-4 bg-[#003614]/50 p-5 rounded-xl cursor-pointer border border-transparent transition-all duration-200 hover:border-[#E7B254]">
                      <input
                        type="checkbox"
                        name="interestedInCall"
                        className="w-6 h-6 mt-0.5 accent-[#E7B254]"
                      />
                      <div className="text-left">
                        <span className="text-base font-bold text-white block mb-1">
                          I'm interested in a 30-min Clarity Call
                        </span>
                        <span className="text-sm text-white/70">
                          No pitch deck. Just mapping your 2026 strategy.
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className='place-self-center flex justify-center py-4 xl:py-8'>
                    <button 
                      type="submit"
                      className="mx-auto block bg-gradient-to-b from-[#E7B254] to-[#FAFAB2] text-lg font-semibold p-[3px] transition-all ease-in-out duration-300 rounded-full text-[#720014] hover:opacity-90 px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                     "Sign & Deploy 2026 Strategy →
                    </button>
                  </div>

                  {/* Inline Thank You Message */}
                  {/* {formSubmitted && (
                    <div 
                      className="my-4 p-6 rounded-xl bg-gradient-to-br from-[#135B41] to-[#002102] border border-[#E7B254] animate-fadeIn"
                      style={{ animation: 'fadeIn 0.5s ease-out' }}
                    >
                      <h3 
                        className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-b from-[#FAFAB2] to-[#E7B254] bg-clip-text text-transparent"
                        style={{
                          WebkitTextStroke: '0.5px transparent',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Welcome to the Signal, {submittedName}!
                      </h3>
                      <p className="text-white text-sm md:text-base">
                        Your 2026 Manifesto has been signed. Here's to clear thinking and bold moves!
                      </p>
                      <p className="text-[#E7B254] text-sm md:text-base mt-3 opacity-80">
                        🚀 The Anti-Roadmap Report will be in your inbox soon.
                      </p>
                    </div>
                  )} */}

                  <div className='place-items-center'>
                    <p className='text-center text-sm text-gray-300'>
                      By submitting this form, you agree to our <Link href="/termsofuse" rel="noopener noreferrer" className="cursor-pointer hover:text-[var(--cta)]">Terms of Services.</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center text-sm py-8 px-6">
            {/* <div className="text-5xl sm:text-7xl xl:text-8xl mb-4 xl:mb-8">🎯📊🚀</div> */}
            <div className="text-5xl sm:text-7xl xl:text-8xl mb-4 xl:mb-8">🎄⛄🎄</div>
            <p className='text-xl sm:text-2xl xl:text-3xl text-white'>
              From all of us at <Link href='https://notionx.ai/' className='hover:underline hover:text-[#E7B254]'>NotionX</Link> - Here's to clear thinking in 2026.
            </p>
            <div className='lg:m-auto text-xs'>
              <h2 className='text-white my-2'>© 2025 &nbsp;
                <Link href='https://notionx.ai/' className='hover:underline hover:text-[#E7B254]'>NotionX</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Roadmap2026;