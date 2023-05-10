import Image from 'next/image';
import profileImage from 'public/images/profileImage.png';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className='text-center'>
      <Image
        src={profileImage}
        alt='profile image'
        width={250}
        height={300}
        className='mx-auto rounded-full'
        priority={true}
      />
      <h2 className='text-2xl font-bold mt-2'>{"Hi, Im' Bomin"}</h2>
      <p className='text-xl font-semibold'>Frontend Enginner</p>
      <p className='mb-2 py-1'>Hi, there? I am a growing developer! 🌱</p>
      <Link
        href='/contact'
        className='bg-teal-400 text-white rounded-md p-1 text-md font-semibold'
      >
        Contact me!
      </Link>
    </section>
  );
}
