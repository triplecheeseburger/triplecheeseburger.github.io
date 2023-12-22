import LineBox from '@/components/layouts/LineBox';
import { allPosts } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

import React from 'react';

export default function Page({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find(
    (post) => post.slug === decodeURI(params.slug.join('/'))
  );
  if (!post)
    throw new Error('Post not found for slug: ' + params.slug.join('/'));

  const MDXComponent = useMDXComponent(post.body.code || '');
  return (
    <div className='flex flex-row w-full h-full overflow-y-scroll border-t border-t-polar-night-3 border-l border-l-polar-night-3 border-b border-b-polar-night-3'>
      <LineBox />
      <section
        id={'mdx'}
        className='markdown-body h-fit overflow-x-scroll break-words pl-1 pr-8'
      >
        <MDXComponent />
      </section>
    </div>
  );
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug.split('/') }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const post = allPosts.find(
    (post) => post.slug === decodeURI(params.slug.join('/'))
  );
  if (!post)
    throw new Error('Post not found for slug: ' + params.slug.join('/'));
  return { title: post.title };
};
