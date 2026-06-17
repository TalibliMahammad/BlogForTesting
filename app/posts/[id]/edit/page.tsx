"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch"; // [cite: 38]

export default function EditPost({ params }: { params: { id: string } }) {
  const { updatePost, loading } = useFetch(); // [cite: 59]
  const router = useRouter();
  const [form, setForm] = useState({ title: "", body: "" });

  // İdarəetmə: Edit səhifəsində mövcud məlumatı çəkmək üçün [cite: 57]
  useEffect(() => {
    fetch(`https://blog-api-t6u0.onrender.com/posts/${params.id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePost(params.id, form); // [cite: 59]
    router.push(`/posts/${params.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-serif">Xəbəri redaktə et</h1>
      <input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full border p-2" />
      <textarea value={form.body} onChange={(e) => setForm({...form, body: e.target.value})} className="w-full border p-2 h-40" />
      <button disabled={loading} className="bg-blue-600 text-white p-2 rounded">
        {loading ? "Yadda saxlanılır..." : "Yenilə"}
      </button>
    </form>
  );
}