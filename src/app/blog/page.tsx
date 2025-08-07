import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, excerpt, mainImage}`;

const CACHE_OPTIONS = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, CACHE_OPTIONS);

  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="max-w-5xl mx-auto px-4 py-12 min-h-[60vh]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br bg-white from-emerald-50 to-white border-b border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          Latest Updates from BoraBond
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with our latest insights, news, and investment opportunities 
          in African government bonds. Explore expert analysis, market trends, and more.
        </p>
      </div>
    </section>
  );
}

function BlogPostCard({ post }: { post: SanityDocument }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group relative flex flex-col bg-white/80 backdrop-blur rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <PostMedia post={post} />
      <PostContent post={post} />
      <BrandTag />
    </Link>
  );
}

function PostMedia({ post }: { post: SanityDocument }) {
  if (post.mediaUrl) {
    return <ExternalMedia mediaUrl={post.mediaUrl} title={post.title} mainImage={post.mainImage} />;
  }

  if (post.media?.asset?.url) {
    return post.media.asset.mimeType?.startsWith('video') ? (
      <VideoPlayer 
        src={post.media.asset.url} 
        poster={post.mainImage?.asset?.url} 
      />
    ) : (
      <ImageWithOverlay 
        src={post.media.asset.url} 
        alt={post.title} 
      />
    );
  }

  if (post.mainImage?.asset?.url) {
    return <ImageWithOverlay src={post.mainImage.asset.url} alt={post.title} />;
  }

  return null;
}

function ExternalMedia({ mediaUrl, title, mainImage }: { 
  mediaUrl: string, 
  title: string, 
  mainImage?: any 
}) {
  // YouTube or Vimeo
  if (/youtube|youtu\.be|vimeo/.test(mediaUrl)) {
    const embedUrl = mediaUrl
      .replace('watch?v=', 'embed/')
      .replace('youtu.be/', 'youtube.com/embed/');
    
    return (
      <div className="relative w-full h-56 overflow-hidden flex items-center justify-center bg-black/5">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-t-3xl border-none"
        />
      </div>
    );
  }

  // Video files
  if (/\.(mp4|webm|ogg)$/i.test(mediaUrl)) {
    return (
      <div className="relative w-full h-56 overflow-hidden flex items-center justify-center bg-black/5">
        <video
          src={mediaUrl}
          controls
          poster={mainImage?.asset?.url || undefined}
          className="object-cover object-center w-full h-full rounded-t-3xl"
        />
      </div>
    );
  }

  // Image files
  if (/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(mediaUrl)) {
    return (
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={mediaUrl}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
    );
  }

  return null;
}

function VideoPlayer({ src, poster }: { src: string, poster?: string }) {
  return (
    <div className="relative w-full h-56 overflow-hidden flex items-center justify-center bg-black/5">
      <video
        src={src}
        controls
        poster={poster}
        className="object-cover object-center w-full h-full rounded-t-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/80 to-transparent pointer-events-none" />
    </div>
  );
}

function ImageWithOverlay({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative w-full h-56 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/80 to-transparent" />
    </div>
  );
}

function PostContent({ post }: { post: SanityDocument }) {
  return (
    <div className="flex-1 flex flex-col p-6">
      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 mb-2 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-400 text-xs mb-3 tracking-wide uppercase">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.excerpt && (
        <p className="text-gray-700 text-base mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      )}
      <ReadMoreLink />
    </div>
  );
}

function ReadMoreLink() {
  return (
    <span className="mt-auto inline-flex items-center gap-1 text-emerald-600 font-medium group-hover:underline group-hover:text-emerald-700 transition-colors text-sm">
      Read more 
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>
  );
}

function BrandTag() {
  return (
    <span className="absolute top-5 right-5 bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      BoraBond
    </span>
  );
}