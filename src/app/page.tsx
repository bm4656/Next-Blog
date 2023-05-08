import Image from 'next/image';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Profile />
      홈입니다.
    </section>
  );
}
