import notion from '.';
import { getPageIds } from './utils';
import { RichTextType } from '@/components/RichText';

export type AnnouncementDataType = {
  announcementPageId: string;
  title: string;
  callout: RichTextType[];
  latest: boolean;
};

export const ANNOUNCEMENTS_DATABASE_ID = '1499b397383480bab1c9c97d9756a162';

export async function getAnnouncementsPageIds() {
  return await getPageIds(ANNOUNCEMENTS_DATABASE_ID);
}

export async function getAnnouncements() {
  const announcementsPageIds = await getAnnouncementsPageIds();
  const announcements: AnnouncementDataType[] = [];
  for (const announcementPageId of announcementsPageIds) {
    const page = (await notion.pages.retrieve({ page_id: announcementPageId })) as any;
    const title = page.properties.Name.title[0].plain_text;
    const callout = page.properties.Callout.rich_text;
    const latest = page.properties['Latest Callout'].checkbox;

    announcements.push({
      announcementPageId: announcementPageId,
      title,
      callout,
      latest,
    });
  }
  return announcements;
}

export async function getLatestCallout() {
  const announcements = await getAnnouncements();
  // finds first announcement in array with Latest Callout property checked and non-empty Callout property
  return announcements.find(a => a.latest && a.callout.length);
}
