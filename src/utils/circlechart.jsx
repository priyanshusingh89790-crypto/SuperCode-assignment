function RingChart() {
  const data = [200, 200, 200, 200];
  const colors = ["#22c55e", "#3b82f6", "#ef4444", "#f59e0b"];

  const total = data.reduce((a, b) => a + b, 0);

  let start = 0;

  const gradient = data.map((value, index) => {
    const percent = (value / total) * 100;
    const end = start + percent;

    const segment = `${colors[index]} ${start}% ${end}%`;
    start = end;

    return segment;
  }).join(", ");

  return (
    <div className="w-full bg-[#222121] items-center justify-center flex flex-col rounded-xl">
        <h1 className="text-white text-lg border-b-2 border-amber-200 w-fit px-2">Monthly Plan</h1>
      <div
        className="w-56 h-56 rounded-full relative"
        style={{
          background: `conic-gradient(${gradient})`,
          WebkitMask:
            "radial-gradient(circle, transparent 60%, black 61%)",
          mask:
            "radial-gradient(circle, transparent 60%, black 61%)",
        }}
      />
      
    </div>
  );
}

export default RingChart;