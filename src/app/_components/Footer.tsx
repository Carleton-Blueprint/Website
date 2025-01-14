import { PageDataType } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import logo from '@/app/_assets/blueprint_banner_negative.png';

export default async function Footer({ pages }: { pages: PageDataType[] }) {
  return (
    <div className="flex bg-blueprint pt-8 pb-10 text-white">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col text-lg space-y-3">
            {pages.map(page => (
              <Link key={uuidv4()} href={page.href} className="hover:text-blueprint-100">
                {page.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-end justify-center text-[12px] md:text-[14px]">
            <Link href="/" className="pb-3 flex flex-row-reverse">
              <Image
                src={logo}
                alt="blueprint logo"
                className="w-[155px] md:w-[200px] rounded-md hover:shadow-xl transition duration-300 ease-in-out"
              />
            </Link>
            <div className="w-2/3 text-end">Made with ❤️ by</div>
            <div className="w-2/3 md:w-full text-right">
              Blueprint @ Carleton University
              <br /> Ottawa, Ontario, Canada
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
