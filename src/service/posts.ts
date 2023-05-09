import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'public/data', 'posts.json');
  console.log(filePath);
  return (
    readFile(filePath, 'utf-8')
      .then<Post[]>(JSON.parse)
      //날짜별 정렬(내림차순)
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}
