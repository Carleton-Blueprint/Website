'use client';
import Link from 'next/link';
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface EventCardProps {
  slug: string;
  imgURL: string;
  title: string;
  venue: string;
  time: string;
  description: string;
  isUpcoming: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ slug, imgURL, title, venue, time, description, isUpcoming }) => {
  return (
    <Link
      href={`/events/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white rounded-[30px] overflow-hidden shadow-md transition-transform duration-200 mt-12 max-w-md w-full relative hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative w-full h-72">
        <div className="max-h-full overflow-hidden">
          <CldImage src={imgURL} alt={title} width={400} height={400} className="rounded-lg" />
        </div>
      </div>
      <div className="p-4 md:p-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold mb-1 md:mb-3">{title}</h2>
        <hr className="w-full border-t-2 border-gray-300 my-1 md:my-3" />
        <p className="text-lg text-indigo-600 font-semibold md:py-2">Location: {venue}</p>
        <p className="text-md italic text-gray-800 md:py-2">{time}</p>
        <p className="text-gray-700 py-1 md:py-2">{description}</p>
        {isUpcoming ? (
          <span className="px-3 py-1 text-white bg-green-500 rounded-full text-xs font-bold absolute top-4 right-4">
            Upcoming
          </span>
        ) : (
          <span className="px-3 py-1 text-white bg-gray-400 rounded-full text-xs font-bold absolute top-4 right-4">
            Passed
          </span>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
