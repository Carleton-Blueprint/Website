import NotionPage, { EventDetailsType } from '@/components/NotionPage';
import { getEventPageBySlug, getEvents } from '@/lib/notion/events';
import { getRecordMap, getTitleByPageId } from '@/lib/notion/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map(event => ({
    slug: event.slug,
  }));
}

type PropsType = {
  params: { slug: string };
};

export default async function EventPage({ params }: PropsType) {
  const event = await getEventPageBySlug(params.slug);

  if (!event) notFound();

  const eventDetails: EventDetailsType = {
    date: event.date,
    venue: event.venue,
    status: event.status,
  };

  const recordMap = await getRecordMap(event.eventPageId);
  const title = await getTitleByPageId(event.eventPageId);

  return <NotionPage recordMap={recordMap} title={title} eventDetails={eventDetails} />;
}
