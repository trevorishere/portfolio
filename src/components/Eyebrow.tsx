export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono uppercase ${className}`}>
      {children}
    </p>
  );
}
