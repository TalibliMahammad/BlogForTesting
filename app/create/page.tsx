"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFetch } from "@/hooks/useFetch"; // Hook-u daxil edirik
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreatePost() {
  const router = useRouter();
  // useFetch hook-undan lazım olan metodları çıxarırıq
  const { createPost, loading } = useFetch();
  const [form, setForm] = useState({ title: "", body: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hook vasitəsilə API-yə göndəririk
    await createPost(form);
    router.push("/");
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-serif mb-6">Yeni Xəbər Yaradın</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Başlıq sahəsi */}
        <Input 
          placeholder="Xəbər başlığı" 
          onChange={(e) => setForm({ ...form, title: e.target.value })} 
        />
        {/* Məzmun sahəsi */}
        <textarea 
          className="w-full min-h-[200px] p-3 border rounded-md dark:bg-slate-900" 
          placeholder="Xəbərin mətni..."
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        {/* Yüklənmə statusuna görə düyməni deaktiv edirik */}
        <Button type="submit" disabled={loading}>
          {loading ? "Paylaşılır..." : "Paylaş"}
        </Button>
      </form>
    </div>
  );
}