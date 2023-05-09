import { getAllPosts } from '@/service/posts';
import PostGrid from './PostGrid';

export default async function FeaturedPosts() {
  //1. 모든 포스트 데이터를 읽어와야함
  const posts = await getAllPosts();
  //2. 모든 포스트 데이터를 보여줌
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
