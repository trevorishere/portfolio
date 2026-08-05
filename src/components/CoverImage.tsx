export default function CoverImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="size-full object-cover" />
    </div>
  );
}
