import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MenuIcon } from "lucide-react"; 
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const Navbar = () => {
  return (
    <div className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative'>
          <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
          <div className='border h-10 w-10 rounded-lg flex justify-center items-center border-white/15'>
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 60C38.1371 60 60 38.1371 60 0C60 38.1371 81.8629 60 120 60C81.8629 60 60 81.8629 60 120C60 81.8629 38.1371 60 0 60Z" fill="currentColor"/>
            </svg>
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <Link href='/' className='text-white/70 hover:text-white transition'>
                Home
              </Link>
              <Link href='/' className='text-white/70 hover:text-white transition'>
                Features
              </Link>
              <Link href='/about' className='text-white/70 hover:text-white transition'>
                About
              </Link>
            </nav>
          </div>
          <div className='flex gap-4 items-center'>
  <a href="https://github.com/Prakhar788" target="_blank" rel="noopener noreferrer">
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      <span><FaGithub /></span>
    </HoverBorderGradient>
  </a>
  <MenuIcon className='md:hidden cursor-pointer' />
</div>

        </div>
      </div>
    </div>
  );
};
