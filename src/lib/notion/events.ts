import notion from '.';
import { parseISO, format } from 'date-fns';
import { getPageBySlug, getPageIds } from './utils';

export type EventDataType = {
  eventPageId: string;
  slug: string;
  eventName: string;
  date: string;
  venue: string;
  status: string;
  description: string;
  coverURL: string;
  homePageURL?: string;
};

export const EVENTS_DATABASE_ID = 'f988151abd6448ebb70053c5ca1278f9';

export async function getEventPageIds() {
  return await getPageIds(EVENTS_DATABASE_ID);
}

export async function getFeaturedEvents() {
  return await getEvents({ featuredOnly: true });
}

export async function getEvents(options?: { featuredOnly: boolean }) {
  const featuredOnly = options?.featuredOnly ?? false;

  const eventPageIds = await getEventPageIds();
  const events: EventDataType[] = [];

  for (const eventPageId of eventPageIds) {
    const page = (await notion.pages.retrieve({ page_id: eventPageId })) as any;

    if ((featuredOnly && !page.properties.Featured.checkbox) || !page.properties.Visibility.checkbox) {
      continue;
    }

    events.push({ eventPageId, ...getEventPageProperties(page, eventPageId) });
  }

  return events;
}

export async function getEventPageBySlug(slug: string) {
  const eventPage = await getPageBySlug(EVENTS_DATABASE_ID, slug);

  if (!eventPage) return undefined;

  const eventPageId = eventPage.id;

  return { eventPageId, ...getEventPageProperties(eventPage, eventPageId) };
}

function getEventPageProperties(page: any, pageId: string) {
  let date = '';
  if (page.properties.Date.date.start.includes('T')) {
    date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy h:mm a');
  } else {
    date = format(parseISO(page.properties.Date.date.start), 'MMMM dd, yyyy');
  }

  return {
    eventName: page.properties.Name.title[0].text.content,
    date,
    venue: page.properties.Venue.rich_text[0].plain_text,
    status: page.properties.Status.status.name,
    description: page.properties.Description.rich_text[0]?.plain_text || '',
    coverURL: page.properties['Cover URL'].rich_text[0]?.plain_text || '/default',
    homePageURL: page.properties['Home Cover URL'].rich_text[0]?.plain_text || '/default',
    slug: page.properties.Slug.rich_text[0]?.plain_text || pageId,
  };
}
