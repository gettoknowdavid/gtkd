import React from 'react';

export default async function Head() {
  return (
    <>
      <title>David Michael II</title>
      <meta
        name="description"
        key="desc"
        content="Official portfolio page of David Michael II."
      />

      <meta property="og:title" content="David Michael II" />
      <meta name="twitter:title" content="David Michael II" />

      <meta
        name="og:description"
        content="Official portfolio page of David Michael II."
      />

      <meta property="og:image" content="/icon.png" />
      <meta name="twitter:image" content="/icon.png" />
      <meta name="image" content="/icon.png" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#000000" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  );
}
