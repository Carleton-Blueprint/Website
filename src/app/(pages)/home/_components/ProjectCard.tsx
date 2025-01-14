'use client';
import { IoLogoGithub } from 'react-icons/io';
import projectLogo from '../_assets/projectLogo.svg';
import { ProjectDataType } from '@/lib/notion/projects';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default function HomeProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="flex justify-center items-center">
      <CldImage
        src={data.logoUrl != '' ? (data.logoUrl as string) : projectLogo}
        alt="project image"
        width={320}
        height={320}
        className="absolute md:w-80 md:h-80 lg:w-72 lg:h-72 rounded-[40px]"
      />
      <div className="group w-80 h-80 min-w-fit md:w-80 md:h-80 lg:w-72 lg:h-72 relative bg-gradient-to-t from-blueprint/70 to-blueprint/15 from-25% to-65% rounded-[35px]">
        <span className="absolute bottom-0 inset-x-0 px-5 pb-10 text-center text-white translate-y-10 group-hover:translate-y-0 group:transition duration-300 ease-in-out">
          <h2 className="text-3xl font-semibold line-clamp-2">{data.companyName}</h2>
          <p className="h-8 text-lg opacity-0 group-hover:opacity-100 group:transition duration-300 ease-in-out line-clamp-1">
            {data.productName}
          </p>
        </span>
        <Link href={'/projects/' + data.slug} className="absolute w-full h-full" />
        <Link href={data.externalUrl || ''} className="absolute top-2 right-2">
          <div>
            <IoLogoGithub className="rounded-full bg-blueprint-50 opacity-0 group-hover:opacity-100 w-20 h-20 transition-color duration-300 ease-in-out hover:text-blueprint-300 text-blueprint" />
          </div>
        </Link>
      </div>
    </div>
  );
}
