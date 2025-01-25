import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import home from '../_assets/home.svg';
import button from '../_assets/button.svg';
import { getLatestCallout } from '@/lib/notion/announcements';
import CallOutWrapper from './CallOutWrapper';

export default async function HeroBlock() {
  const text = await getLatestCallout();

  return (
    <div className="relative h-fit overflow-hidden bg-[#0A1E3A]">
      {text && <CallOutWrapper text={text} />}
      <div className="container flex h-screen w-full items-center">
        <div className="flex items-center justify-center md:m-0 md:w-1/2">
          <div className="h-min items-center text-white">
            <h1 className="text-6xl font-bold">Carleton Blueprint</h1>
            <h2 className="mb-6 text-3xl">Tech for social good.</h2>
            <Link
              href={'https://discord.com/invite/7gkkW5nJPW'}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[-10px] flex w-fit"
            >
              <button className="w-[150px] self-start rounded-full bg-blueprint px-5 py-2 font-bold text-white hover:bg-blueprint-300">
                Join Us
              </button>
            </Link>
            <Image src={button} alt="Join Us" />
          </div>
        </div>
      </div>
      <Image src={home} className="absolute right-0 top-0 hidden md:block md:w-1/2 2xl:w-1/3" alt="Home" />
    </div>
  );
}
