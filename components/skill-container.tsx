export default function SkillContainer({
  titleText,
  children,
  orientation,
}: {
  titleText: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      style={{
        flexDirection: orientation === "horizontal" ? "row" : "column",
      }}
      className={`${
        orientation === "horizontal" ? "flex-row " : "flex-col"
      }  to-transparent flex items-center  w-full gap-y-8 gap-x-2 px-4 py-2 bg-card/50 rounded-lg sm:w-[540px] border-2 shadow-md mb-4`}
    >
      <h3
        style={{
          alignSelf: orientation === "horizontal" ? "start" : "center",
        }}
        className={`text-2xl float-right font-semibold tracking-tighter `}
      >
        {titleText}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">{children}</div>
    </div>
  );
}
