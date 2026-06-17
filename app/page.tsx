
import PostCard from "@/components/PostCard";
import Link from "next/link";

// Server side data fetching (əvvəlki kimi qalır)
async function getPosts() {
  const res = await fetch('https://blog-api-t6u0.onrender.com/posts', { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-serif font-bold">The Times in Azerbaijan</h1>
        <Link href="/create" className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800">
          Yeni Xəbər
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}