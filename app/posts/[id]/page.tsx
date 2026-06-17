"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState, use } from "react";

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params); 
  const { deletePost, loading: deleteLoading } = useFetch();
  
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://blog-api-t6u0.onrender.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.error("Xəta:", err));
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    router.push("/");
  };

  if (loading) return <div className="p-8">Yüklənir...</div>;
  if (!post) return <div className="p-8">Post tapılmadı.</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-4xl font-serif mb-4">{post.title}</h1>
      <p className="text-lg leading-8 mb-8">{post.body}</p>
      
      <Button 
        variant="destructive" 
        onClick={handleDelete} 
        disabled={deleteLoading}
      >
        {deleteLoading ? "Silinir..." : "Bu xəbəri sil"}
      </Button>
    </div>
  );
}