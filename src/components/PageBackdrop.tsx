type PageBackdropProps = {
  className?: string;
};

export function PageBackdrop({ className = "" }: PageBackdropProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-300/20 blur-[140px]" />
    </div>
  );
}