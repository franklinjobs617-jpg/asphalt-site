import Image from "next/image";

interface ScenePhotoProps {
  /** Unsplash photo ID — e.g. "1506521781263-d8422e82f27a" */
  photoId: string;
  alt: string;
  caption?: string;
  aspectRatio?: "wide" | "cinematic" | "square";
  /** Dark gradient overlay for legibility of text on top */
  overlay?: boolean;
  priority?: boolean;
  className?: string;
}

const ASPECT: Record<string, string> = {
  wide: "aspect-[21/6]",
  cinematic: "aspect-[21/8]",
  square: "aspect-[4/3]",
};

/**
 * Renders a full-width contextual photograph from Unsplash CDN.
 * All photos are free for commercial use under the Unsplash License.
 * No attribution required — but the photo source is documented in comments.
 */
export default function ScenePhoto({
  photoId,
  alt,
  caption,
  aspectRatio = "wide",
  overlay = false,
  priority = false,
  className = "",
}: ScenePhotoProps) {
  const src = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1800&q=80`;

  return (
    <figure className={`relative w-full overflow-hidden rounded-md ${ASPECT[aspectRatio]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
        priority={priority}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-900/60 via-transparent to-transparent" />
      )}
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 font-mono text-xs text-chalk/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
