import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { MDXEmbedProvider } from 'mdx-embed';

export default function MDXContentWrapper(props) {
  return (
    <>
      <MDXEmbedProvider>
        <MDXContent {...props} />
      </MDXEmbedProvider>
    </>
  );
}