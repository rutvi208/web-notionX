'use client';

import { useState, useEffect } from 'react';
import { 
  HiXMark,
  HiLink,
  HiCheck
} from "react-icons/hi2";
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaFacebookF,
  FaWhatsapp,
  FaRedditAlien,
  // FaSlack
} from "react-icons/fa6";

interface SharePopupProps {
  url?: string;
  title: string;
  description?: string;
}

const SharePopup = ({ url, title, description = '' }: SharePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Get the current URL only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(url || window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0077B5]',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-black',
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-[#25D366]',
    },
    {
      name: 'Reddit',
      icon: FaRedditAlien,
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: 'bg-[#FF4500]',
    },
    // {
    //   name: 'Slack',
    //   icon: FaSlack,
    //   url: `slack://share?text=${encodedTitle}%20${encodedUrl}`,
    //   color: 'hover:bg-[#4A154B]',
    // },
  ];

  const copyToClipboard = async () => {
    if (!currentUrl) {
      console.error('No URL to copy');
      return;
    }

    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          textArea.remove();
          if (successful) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        } catch (err) {
          console.error('Fallback: Failed to copy:', err);
          textArea.remove();
        }
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (shareUrl: string, platform: string) => {
    // if (platform === 'Slack') {
    //   // For Slack, try the custom URL scheme first
    //   window.location.href = shareUrl;
    //   // Fallback to web share if the app isn't installed
    //   setTimeout(() => {
    //     window.open(
    //       `https://slack.com/intl/en-in/help/articles/201330256-Share-links-in-Slack`,
    //       '_blank'
    //     );
    //   }, 500);
    // } else {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    // }
  };

  return (
    <>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group text-[var(--cta)] content-font text-base flex items-center font-bold hover:underline"
      >
        Share
      </button>

      {/* Modal Overlay - Updated with lighter background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <HiXMark className="w-6 h-6" />
            </button>

            {/* Title */}
            <h3 className="heading-font text-2xl font-semibold mb-6 pr-8">
              Share this article
            </h3>

            {/* Social Media Buttons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {shareLinks.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.name}
                    onClick={() => handleShare(platform.url, platform.name)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 
                      ${platform.color} text-white transition-all duration-300 hover:opacity-90`}
                  >
                    <Icon className="w-6 h-6 mb-2" />
                    <span className="text-xs content-font">{platform.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy Link Section */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm content-font text-gray-600 mb-3">
                Or copy link
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={currentUrl}
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm content-font focus:outline-none focus:ring-2 focus:ring-[var(--cta)] focus:border-transparent"
                />
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-3 rounded-lg font-semibold content-font text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap
                    ${copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[var(--cta)] text-white hover:bg-opacity-90'
                    }`}
                >
                  {copied ? (
                    <>
                      <HiCheck className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <HiLink className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SharePopup;