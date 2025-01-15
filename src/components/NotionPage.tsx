'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import BlockContainer from './BlockContainer';
import { BsCalendar3 } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { MdOutlineUpcoming } from 'react-icons/md';

export type EventDetailsType = {
  date: string;
  venue: string;
  status: string;
};

type PropsType = {
  recordMap: ExtendedRecordMap;
  title: string;
  eventDetails?: EventDetailsType;
};

export default function NotionPage({ recordMap, title, eventDetails }: PropsType) {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-blue-50">
      <h1 className="text-5xl text-blueprint font-bold mb-10 text-center">{title}</h1>

      <div className="md:w-auto w-full">
        <BlockContainer roundedCorners centered>
          {eventDetails && <EventDetails eventDetails={eventDetails} />}
          <NotionRenderer
            recordMap={recordMap}
            // fullPage={true}
            // darkMode={false}
            components={{
              nextImage: Image,
              nextLink: Link,
            }}
          />
        </BlockContainer>
      </div>
    </div>
  );
}

function EventDetails({ eventDetails }: { eventDetails: EventDetailsType }) {
  return (
    <div className="md:px-[96px] w-full">
      <div className="mb-10">
        <h1 className="text-3xl text-gray-800 font-semibold mb-5">Event Details</h1>
        <div className="grid grid-cols-2 gap-2 md:w-[500px] items-center">
          <p className="flex gap-1 items-center text-md text-gray-800">
            <BsCalendar3 /> Date
          </p>
          <p className="text-md text-gray-800">{eventDetails.date}</p>
          <p className="flex gap-1 items-center text-md text-gray-800">
            <MdOutlineLocationCity /> Venue
          </p>
          <p className="text-md text-gray-800">{eventDetails.venue}</p>
          <p className="flex gap-1 items-center text-md text-gray-800">
            <MdOutlineUpcoming /> Status
          </p>
          {eventDetails.status === 'Scheduled' ? (
            <span className="px-3 py-1 text-white bg-green-500 rounded-full text-xs font-bold w-fit">
              Upcoming
            </span>
          ) : (
            <span className="px-3 py-1 text-white bg-gray-400 rounded-full text-xs font-bold w-fit">Passed</span>
          )}
        </div>
      </div>
    </div>
  );
}
