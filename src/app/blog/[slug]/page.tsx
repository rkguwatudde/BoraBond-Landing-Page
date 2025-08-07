import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  // Prefer media field if present
  let postMediaUrl: string | null = null;
  let postMediaType: string | null = null;
  if (post.media?.asset?.url) {
    postMediaUrl = post.media.asset.url;
    postMediaType = post.media.asset.mimeType || null;
  }
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <>
    <Navbar />
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 bg-white">
      <Link href="/blog" className="text-emerald-600 hover:underline hover:text-emerald-700 font-medium mb-2 w-fit">
        ← Back to blog
      </Link>
      {/* Prefer mediaUrl if present */}
      {post.mediaUrl ? (
        /youtube|youtu\.be|vimeo/.test(post.mediaUrl) ? (
          <div className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full flex items-center justify-center bg-black/5 overflow-hidden">
            <iframe
              src={post.mediaUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none rounded-xl"
            />
          </div>
        ) : /\.(mp4|webm|ogg)$/i.test(post.mediaUrl) ? (
          <video
            src={post.mediaUrl}
            controls
            poster={postImageUrl || undefined}
            className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full"
            width={550}
            height={310}
          />
        ) : /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(post.mediaUrl) ? (
          <img
            src={post.mediaUrl}
            alt={post.title}
            className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full"
            width={550}
            height={310}
          />
        ) : null
      ) : postMediaUrl ? (
        postMediaType?.startsWith('video') ? (
          <video
            src={postMediaUrl}
            controls
            poster={postImageUrl || undefined}
            className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full"
            width={550}
            height={310}
          />
        ) : (
          <img
            src={postMediaUrl}
            alt={post.title}
            className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full"
            width={550}
            height={310}
          />
        )
      ) : postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl border border-emerald-100 shadow mb-4 w-full"
          width={550}
          height={310}
        />
      )}
      <h1 className="text-4xl font-bold mb-4 text-emerald-700">{post.title}</h1>
      <div className="prose prose-emerald">
        <p className="text-gray-500 text-sm mb-2">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
    </>
  );
}