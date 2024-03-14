import Challenger from "../images/emblems/Challenger.png";
import GrandMaster from "../images/emblems/Grandmaster.png";
import Master from "../images/emblems/Master.png";
import Diamond from "../images/emblems/Diamond.png";
import Emerald from "../images/emblems/Platinum.png";
import Platinum from "../images/emblems/Platinum.png";
import Gold from "../images/emblems/Gold.png";
import Silver from "../images/emblems/Silver.png";
import Bronze from "../images/emblems/Bronze.png";
import Iron from "../images/emblems/Iron.png";

export default class RankHandler {
  private tier: number;
  private rank: number;
  private leaguePoint: number;

  constructor(tier: string, rank: string, leaguePoint: number) {
    enum getTierToNumber {
      "CHALLENGER" = 0,
      "GRANDMASTER",
      "MASTER",
      "DIAMOND",
      "EMERALD",
      "PLATINUM",
      "GOLD",
      "SILVER",
      "BRONZE",
      "IRON",
    }

    enum getRankToNumber {
      "I" = 1,
      "II",
      "III",
      "IV",
    }

    this.tier = getTierToNumber[tier as keyof typeof getTierToNumber];
    this.rank = getRankToNumber[rank as keyof typeof getRankToNumber];
    this.leaguePoint = leaguePoint;
  }

  public getWins() {}

  public getTierName() {
    switch (this.tier) {
      case 0:
        return "챌린저";
      case 1:
        return "그랜드마스터";
      case 2:
        return "마스터";
      case 3:
        return "다이아몬드";
      case 4:
        return "에메랄드";
      case 5:
        return "플래티넘";
      case 6:
        return "골드";
      case 7:
        return "실버";
      case 8:
        return "브론즈";
      case 9:
        return "아이언";
      default:
        return "-";
    }
  }

  public getRank() {
    switch (this.tier) {
      case 0:
      case 1:
      case 2:
        return "";
      default:
        return this.rank;
    }
  }

  public getLeaguePoint() {
    return this.leaguePoint;
  }

  public getImageURL() {
    switch (this.tier) {
      case 0:
        return Challenger;
      case 1:
        return GrandMaster;
      case 2:
        return Master;
      case 3:
        return Diamond;
      case 4:
        return Emerald;
      case 5:
        return Platinum;
      case 6:
        return Gold;
      case 7:
        return Silver;
      case 8:
        return Bronze;
      case 9:
        return Iron;
      default:
        return Iron;
    }
  }
}
