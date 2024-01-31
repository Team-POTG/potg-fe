import Challenger from "../../../images/emblems/Challenger.png";
import GrandMaster from "../../../images/emblems/Grandmaster.png";
import Master from "../../../images/emblems/Master.png";
import Diamond from "../../../images/emblems/Diamond.png";
import Platinum from "../../../images/emblems/Platinum.png";
import Gold from "../../../images/emblems/Gold.png";
import Silver from "../../../images/emblems/Silver.png";
import Bronze from "../../../images/emblems/Bronze.png";
import Iron from "../../../images/emblems/Iron.png";

export default class TierHandler {
  private tier: number;
  private rank: number;
  private leaguePoint: number;

  constructor(tier: number, rank: number, leaguePoint: number) {
    this.tier = tier;
    this.rank = rank;
    this.leaguePoint = leaguePoint;
  }

  public getWins() {}

  public getTierName() {
    switch (this.tier) {
      case 8:
        return "챌린저";
      case 7:
        return "그랜드마스터";
      case 6:
        return "마스터";
      case 5:
        return "다이아몬드";
      case 4:
        return "플래티넘";
      case 3:
        return "골드";
      case 2:
        return "실버";
      case 1:
        return "브론즈";
      case 0:
        return "아이언";
      default:
        return "-";
    }
  }

  public getRank() {
    switch (this.tier) {
      case 8:
      case 7:
      case 6:
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
      case 8:
        return Challenger;
      case 7:
        return GrandMaster;
      case 6:
        return Master;
      case 5:
        return Diamond;
      case 4:
        return Platinum;
      case 3:
        return Gold;
      case 2:
        return Silver;
      case 1:
        return Bronze;
      case 0:
        return Iron;
      default:
        return Iron;
    }
  }
}
