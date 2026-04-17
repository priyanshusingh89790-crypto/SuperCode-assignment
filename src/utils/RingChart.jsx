const RingChart = () => {
  const data = [200, 200, 200, 200];
  const colors = ["#3b82f6", "#f59e0b", "#ef4444", "#22c55e"];
  const total = data.reduce((a, b) => a + b, 0);

  let start = 0;

  const gradient = data
    .map((value, index) => {
      const percent = (value / total) * 100;
      const end = start + percent;

      const segment = `${colors[index]} ${start}% ${end}%`;
      start = end;

      return segment;
    })
    .join(", ");

  return (
    <div className="w-full bg-[#222121] items-start justify-center flex flex-col gap-3 rounded-xl p-4">
      <h1 className="text-white text-lg border-b-2 border-b-amber-200 w-fit">
        Monthly Plan
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="relative w-50 h-50">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(${gradient}`,
              WebkitMask: "radial-gradient(circle, transparent 60%, black 61%)",
              mask: "radial-gradient(circle, transparent 60%, black 61%)",
            }}
          />

          <span
            className="absolute top-0 right-0 -translate-x-1/2 text-sm font-semibold"
            style={{ color: colors[0] }}
          >
            {data[0]}
          </span>

          <span
            className="absolute bottom right-0 -translate-y-1/2 text-sm font-semibold"
            style={{ color: colors[1] }}
          >
            {data[1]}
          </span>

          <span
            className="absolute bottom-0 left-0 -translate-x-1/2 text-sm font-semibold"
            style={{ color: colors[2] }}
          >
            {data[2]}
          </span>

          <span
            className="absolute top-0 left-0 -translate-x-1/2 text-sm font-semibold"
            style={{ color: colors[3] }}
          >
            {data[3]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RingChart;
