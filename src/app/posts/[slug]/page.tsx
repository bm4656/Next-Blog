import { getMarkdown, getPost } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  const markdown = await getMarkdown(params.slug);
  return (
    <section>
      <h2>{post?.title}</h2>
      <pre>{markdown}</pre>
    </section>
  );
}
