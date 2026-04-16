function AreaChart() {
  const data1 = [20, 30, 50, 70, 90, 10]; // yellow
  const data2 = [25, 40, 60, 45, 30, 55]; // white

  const labels = ["AUG 21", "AUG 22", "AUG 23", "AUG 24", "AUG 25", "AUG 26"];

  const width = 400;
  const height = 200;

  const max = Math.max(...data1, ...data2);

  const getPoints = (data) =>
    data.map((val, i) => ({
      x: (i / (data.length - 1)) * width,
      y: height - (val / max) * height,
    }));

  const createPath = (points) => {
    let d = `M ${points[0].x},${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;

      d += ` Q ${cx},${prev.y} ${curr.x},${curr.y}`;
    }

    return d;
  };

  const createAreaPath = (points) => {
    const line = createPath(points);
    return `${line} L ${width},${height} L 0,${height} Z`;
  };

  const points1 = getPoints(data1);
  const points2 = getPoints(data2);

  return (
    <div className="bg-[#222121] p-6 rounded-xl w-full text-white">
      <h2 className="mb-4 border-b border-yellow-400 w-fit pb-1">
        Weekly plan
      </h2>

      <svg width={width} height={height} className="overflow-visible">
        
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={(i / 4) * height}
            x2={width}
            y2={(i / 4) * height}
            stroke="#444"
          />
        ))}

        {/* Area 1 (yellow) */}
        <path
          d={createAreaPath(points1)}
          fill="rgba(250, 204, 21, 0.4)"
        />

        {/* Area 2 (white) */}
        <path
          d={createAreaPath(points2)}
          fill="rgba(255,255,255,0.2)"
        />

        {/* Line 1 */}
        <path
          d={createPath(points1)}
          stroke="#facc15"
          strokeWidth="2"
          fill="none"
        />

        {/* Line 2 */}
        <path
          d={createPath(points2)}
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-gray-400 text-sm">
        {labels.map((l, i) => (
          <span key={i} className={l === "AUG 24" ? "text-yellow-400" : ""}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AreaChart;