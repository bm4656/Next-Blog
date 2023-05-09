import Image from 'next/image';
import Profile from '../components/Profile';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </section>
  );
}
