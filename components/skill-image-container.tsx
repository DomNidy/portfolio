export default function SkillImageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-row flex items-center gap-1 tracking-tighter font-medium">
      {children}
    </div>
  );
}
