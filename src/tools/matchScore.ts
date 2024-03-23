export function getKdaRatio(
  kills: number,
  deaths: number,
  assists: number
): string {
  const kdaRatio = (kills + assists) / deaths;

  return isNaN(kdaRatio)
    ? "0"
    : isFinite(kdaRatio)
    ? kdaRatio.toFixed(2)
    : "Perfect";
}

export function getKdaEngage(
  kills: number,
  assists: number,
  teamTotalKills: number
): number {
  const killEngage = Math.round(((kills + assists) / teamTotalKills) * 100);
  return isNaN(killEngage) ? 0 : killEngage;
}

export function getTotalMinionKilledScore(
  totalMinionsKilled: number,
  neutralMinionsKilled: number
) {
  return totalMinionsKilled + neutralMinionsKilled;
}

export function getTotalVisionScore(
  wardsPlaced: number,
  detectorWardsPlaced: number,
  wardsKilled: number,
  visionScore: number
) {
  return wardsPlaced + detectorWardsPlaced + wardsKilled + visionScore;
}
