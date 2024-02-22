export const formatTime = (timeSpentMs) => {
  if (timeSpentMs === 0) return "0s";

  const units: any = [
    ["h", 3600000],
    ["m", 60000],
    ["s", 1000],
  ];

  let remaining = Math.abs(timeSpentMs);
  let output = "";

  for (const [unit, threshold] of units) {
    if (remaining >= threshold) {
      const value = Math.floor(remaining / threshold);
      output += `${value}${unit}`;
      remaining %= threshold;

      if (remaining === 0 || output.length >= 5) {
        break; // Limit output to 5 characters or upon reaching first non-zero unit
      } else {
        output += " ";
      }
    }
  }

  return output.trim();
};
