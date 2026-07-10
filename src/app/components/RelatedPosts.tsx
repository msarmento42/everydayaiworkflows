import Link from 'next/link';

interface RelatedPost {
  title: string;
  slug: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #374151" }}>
      <h2 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "1.5rem" }}>Related Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "0.75rem" }}>
            <Link href={post.slug} style={{ color: "#00d4ff", textDecoration: "none", fontSize: "1.05rem" }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
