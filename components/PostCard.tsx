
import Link from "next/link";
import { format } from "date-fns"; // Tarix formatlamaq üçün (optional)
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

// Post tipini təyin edirik
interface Post {
  id: string;
  title: string;
  body: string;
}

export default function PostCard({ post }: { post: Post }) {

console.log(post);

  return (
    // Müasir, responsive kart dizaynı
    <Card className="flex flex-col h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 border dark:border-slate-800">
      <CardHeader>
        {/* Başlıq: Klassik qəzet şrifti üslubunda */}
        <CardTitle className="font-serif text-2xl leading-tight">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Məzmun: Oxunaqlı və təmiz görünüş */}
        <p className="text-slate-600 dark:text-slate-400 line-clamp-4 font-sans text-sm">
          {post.body}
        </p>
      </CardContent>
      <CardFooter>
        {/* Link: Detal səhifəsinə yönləndirmə */}
        <Link 
          href={`/posts/${post.id}`} 
          className="text-black dark:text-white font-bold underline underline-offset-4 hover:text-blue-600 transition-colors"
        >
          Daha ətraflı oxu
        </Link>
      </CardFooter>
    </Card>
  );
}