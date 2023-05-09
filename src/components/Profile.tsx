import Image from 'next/image';
import profileImage from '/public/image/profileImage.png';
import Link from 'next/link';
import ContactButton from './ContactButton';

export default function Profile() {
  return (
    <section className='text-center'>
      <Image
        src={profileImage}
        alt='profile image'
        width={250}
        height={300}
        className='mx-auto rounded-full'
      />
      <h2 className='text-2xl font-bold mt-2'>{"Hi, Im' Bomin"}</h2>
      <p className='text-xl font-semibold'>Frontend Enginner</p>
      <p className='mb-2'>나에 대한 간단한 소개</p>
      <Link
        href='/contact'
        className='bg-teal-400 text-white rounded-md p-1 text-sm font-semibold'
      >
        Contact me!
      </Link>
    </section>
  );
}
