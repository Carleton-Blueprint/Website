import { NotionAPI } from 'notion-client';
import { getExternalPageIds } from './external';
import notion from '.';
import { getEventPageIds } from './events';
import { getProjectPageIds } from './projects';

/*
 * `notion-client` is the unofficial notion API library (not the same as – @notionhq/client)
 *  https://github.com/NotionX/react-notion-x
 *
 *  API Key not required – We're only using this for publicly published pages.
 */
const reactNotionXClient = new NotionAPI();

export const getRecordMap = async (pageId: string) => {
  return await reactNotionXClient.getPage(pageId);
};

export async function getAllPageIds() {
  const eventPageIds = await getEventPageIds();
  const externalPageIds = await getExternalPageIds();
  const projectPageIds = await getProjectPageIds();

  const results: string[] = [...eventPageIds, ...externalPageIds, ...projectPageIds];
  return results;
}

export async function getPageIds(database_id: string): Promise<string[]> {
  const res = await notion.databases.query({
    database_id,
  });

  const pageIds = res.results.map(result => result.id);
  return pageIds;
}

export async function getTitleByPageId(page_id: string) {
  const res = await notion.pages.retrieve({ page_id });
  const typedRes = res as any;
  return typedRes.properties.Name.title[0].plain_text;
}

export async function getPageBySlug(database_id: string, slug: string) {
  const res = await notion.databases.query({
    database_id,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  if (!res.results.length) return undefined;

  return res.results[0];
}
