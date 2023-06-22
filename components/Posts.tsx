import Link from "next/link";

type Props = {
  posts: any[];
};

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((p: any) => (
        <li key={p.id}>
          <Link href={`/blog/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
};
