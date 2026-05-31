export default function SectionHeader({ title, description }) {
  return (
    <div className="text-center reveal">
      <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 mt-4 text-lg">{description}</p>
      )}
    </div>
  );
}
