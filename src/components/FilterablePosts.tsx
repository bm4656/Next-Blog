'use client';
import { Post } from '@/service/posts';
import { useState } from 'react';
import PostGrid from './PostGrid';

type Props = { categories: string[]; posts: Post[] };
export default function FilterablePosts({ categories, posts }: Props) {
  const [selected, setSelected] = useState('');
  //1. 카테고리 누르면 selected 변수에 맞게 posts 필터링 되도록
  //2. 필터링된 posts 들 PostGrid에 전달해서 화면에 나타내기
  const filtered =
    selected !== ''
      ? posts.filter((post) => post.category === selected)
      : posts;
  console.log(filtered);
  return (
    <section>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setSelected(category)}>
            {category}
          </li>
        ))}
      </ul>
      <PostGrid posts={filtered}></PostGrid>
    </section>
  );
}
