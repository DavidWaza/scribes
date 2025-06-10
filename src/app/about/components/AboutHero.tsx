"use client";
import React from "react";

type IconProps = {
  size: number;
} & React.SVGProps<SVGSVGElement>;

const BookOpenIcon = ({ size, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M240,32H48A16,16,0,0,0,32,48V200a16,16,0,0,0,16,16H240a8,8,0,0,0,0-16H48V48H240a8,8,0,0,0,0-16ZM120,160H96a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm40-40H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
  </svg>
);
const CoffeeIcon = ({ size, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M240,88H224V80a40,40,0,0,0-40-40H64A40,40,0,0,0,24,80v96a56,56,0,0,0,56,56h56a56,56,0,0,0,56-56v-8h16a40,40,0,0,0,40-40V104A16,16,0,0,0,240,88ZM40,80a24,24,0,0,1,24-24H184a24,24,0,0,1,24,24v8H40Zm128,96a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V104H168Zm56,0a24,24,0,0,1-24-24V104h24Z"></path>
  </svg>
);
const UsersIcon = ({ size, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm60,96.55a8,8,0,0,1-12,11.31,104.14,104.14,0,0,0-160,0,8,8,0,0,1-12-11.31A120,120,0,0,1,128,136a120.12,120.12,0,0,1,104,80.55ZM128,56a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,56Zm0,104a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-64,0,8,8,0,0,1-16,0A48.05,48.05,0,0,1,128,160Z"></path>
  </svg>
);
const ChatCenteredDotsIcon = ({ size, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M136,128a12,12,0,1,1-12-12A12,12,0,0,1,136,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,92,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,180,128ZM232,72A104,104,0,0,0,24.22,143.46,16,16,0,0,0,40,152a15.92,15.92,0,0,0,11.31-4.69,80,80,0,1,1,133.38,0A15.92,15.92,0,0,0,196,152a16,16,0,0,0,15.78-8.54A104,104,0,0,0,232,72Z"></path>
  </svg>
);
const SparkleIcon = ({ size, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128ZM165.48,82.52l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L128,67.34l26.16,26.5A8,8,0,0,0,165.48,82.52ZM152,128l26.52,26.52a8,8,0,0,1-11.32,11.32L128,126.66l-26.16,26.18a8,8,0,0,1-11.32-11.32L116.66,128l-26.14-26.16a8,8,0,0,1,11.32-11.32L128,116.66l26.16-26.14a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

// Configuration for the floating icons in the background.
const icons = [
  {
    Icon: BookOpenIcon,
    style: { top: "10%", left: "10%", animationDelay: "0s" },
    size: 40,
  },
  {
    Icon: CoffeeIcon,
    style: { top: "20%", left: "85%", animationDelay: "1s" },
    size: 30,
  },
  {
    Icon: UsersIcon,
    style: { top: "60%", left: "5%", animationDelay: "2s" },
    size: 35,
  },
  {
    Icon: ChatCenteredDotsIcon,
    style: { top: "75%", left: "90%", animationDelay: "0.5s" },
    size: 45,
  },
  {
    Icon: SparkleIcon,
    style: { top: "5%", left: "45%", animationDelay: "1.5s" },
    size: 25,
  },
];

const AboutHero = () => {
  return (
    <div className="relative w-full h-[32rem] flex items-center justify-center font-sans overflow-hidden bg-gradient-to-b from-violet-200 to-purple-300">
      <style>{`
        /* Floating animation for background icons */
        @keyframes gentle-float {
          0% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }
        .gentle-float-animation {
          animation: gentle-float 8s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 w-full h-full">
        {icons.map((item, index) => (
          <div
            key={`icon-${index}`}
            className="absolute text-purple-900/20 gentle-float-animation"
            style={item.style}
          >
            <item.Icon size={item.size} />
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative text-center z-10 p-4">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-800 leading-tight mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Workshop & Event Hub
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 font-light">
          A cozy corner for those who find joy in turning pages.
        </p>
      </div>

      {/* SVG Wave to blend with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 text-[#481C73]">
        <svg
          viewBox="0 0 1440 100"
          fill="currentColor"
          className="w-full h-full block"
          preserveAspectRatio="none"
        >
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutHero;
