function WaveCalenderChart() {
  const data = [40, 80, 60, 90, 30, 70]; // your values (Mon → Sat)
  const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const width = 300;
  const height = 150;

  const max = Math.max(...data);

  // Convert data → points
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (val / max) * height;
    return { x, y };
  });

  // Create smooth curve (Bezier)
  const path = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x},${point.y}`;

    const prev = points[i - 1];
    const cx = (prev.x + point.x) / 2;

    return `${acc} Q ${cx},${prev.y} ${point.x},${point.y}`;
  }, "");

  return (
    <div className="bg-[#222121] p-6 rounded-xl w-full ">
      <h2 className="text-white text-lg mb-4 border-b border-yellow-400 w-fit pb-1">
        Spending frequency
      </h2>

      <svg width={width} height={height}>
        <path
          d={path}
          fill="none"
          stroke="#facc15"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-gray-400 text-sm">
        {labels.map((day, i) => (
          <span key={i} className={day === "THU" ? "text-yellow-400" : ""}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WaveCalenderChart;