'use client';
import { Post } from '@/service/posts';
import { useState } from 'react';
import PostGrid from './PostGrid';

type Props = { categories: string[]; posts: Post[] };
export default function FilterablePosts({ categories, posts }: Props) {
  const [selected, setSelected] = useState('');
  const filtered =
    selected !== ''
      ? posts.filter((post) => post.category === selected)
      : posts;
  console.log(filtered);
  return (
    <section className='flex'>
      <PostGrid posts={filtered}></PostGrid>
      <ul className='flex flex-col mx-4 items-center'>
        <h3 className='text-lg font-bold'>Category</h3>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setSelected(category)}
            className='cursor-pointer'
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
