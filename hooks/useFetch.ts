"use client"

import { useState } from "react";


const BASE_URL = "https://blog-api-t6u0.onrender.com/posts";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // POST: Yeni xəbər yarat [cite: 44, 46, 75]
  const createPost = async (data: { title: string; body: string }) => {
    setLoading(true);
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) { setError("Yaratma zamanı xəta baş verdi"); } 
    finally { setLoading(false); }
  };

  // PUT: Mövcud xəbəri yenilə [cite: 54, 59, 80]
  const updatePost = async (id: string, data: { title: string; body: string }) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) { setError("Yeniləmə zamanı xəta baş verdi"); } 
    finally { setLoading(false); }
  };

  // DELETE: Xəbəri sil [cite: 53, 79, 83]
  const deletePost = async (id: string) => {
    setLoading(true);
    try {
      await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    } catch (err) { setError("Silmə zamanı xəta baş verdi"); } 
    finally { setLoading(false); }
  };

  return { createPost, updatePost, deletePost, loading, error };
};