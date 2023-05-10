import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Post };

export default function PostCard({
  post: { path, title, description, date, category },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-lg'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center'>
          <time className='self-end text-sm mx-2 font-semibold'>
            {date.toString()}
          </time>
          <h2 className='font-bold text-lg'>{title}</h2>
          <div className='w-full truncate'>{description}</div>
          <span className='rounded-md bg-orange-200 text-white px-2 my-2'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
