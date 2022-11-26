import { hygraph } from './api';

export async function getBiography() {
  const data = await hygraph.request(
    `
        {
            biographies {
                content
            }
        }
    `,
  );

  return data;
}
