import Image from 'next/image';
import profileImage from '/public/image/profileImage.png';
import Link from 'next/link';
import ContactButton from './ContactButton';

export default function Profile() {
  return (
    <article className='flex flex-col justify-center items-center gap-1'>
      <Image src={profileImage} alt='profile image' className='rounded-full' />
      <h2 className='text-xl font-bold'>{"Hi, Im' Bomin"}</h2>
      <p>Frontend Enginner</p>
      <p>나에 대한 간단한 소개</p>
      <ContactButton />
    </article>
  );
}
