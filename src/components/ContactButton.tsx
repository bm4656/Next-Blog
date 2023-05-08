'use client';
import { useRouter } from 'next/navigation';

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      className='bg-teal-400 text-white rounded-md p-1 text-sm font-bold'
      onClick={() => router.push('/contact')}
    >
      Contact me!
    </button>
  );
}
