import React from 'react';
import EventCard from './_components/EventCard'; // Assuming EventCard is in the same directory
import { getEvents } from '@/lib/notion/events';
import BlockContainer from '@/components/BlockContainer';

const EventsPage: React.FC = async () => {
  const res = await getEvents();
  return (
    <div className="bg-blueprint-50 flex justify-center">
      <BlockContainer title="Blueprint Events" roundedCorners inner centered margin>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-16 lg:px-12">
          {res.map(event => (
            <EventCard
              slug={event.slug}
              key={event.eventName}
              imgURL={event.coverURL}
              title={event.eventName}
              venue={event.venue}
              time={event.date}
              description={event.description}
              isUpcoming={event.status === 'Scheduled'}
            />
          ))}
        </div>
      </BlockContainer>
    </div>
  );
};

export default EventsPage;
