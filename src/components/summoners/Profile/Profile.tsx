import Icon from "./Icon";
import Level from "./Level";
import Name from "./Name";
import RecentMatchRate from "./RecentMatchRate";
import RecentUseChampion from "./RecentUseChampion";
import Refetch from "./Refetch";
import Favorite from "./Favorite";
import { css } from "@emotion/css";
import Rank from "./Rank";
import { LeagueEntryDto } from "../../../models";

interface Props {
  summonerName?: string;
  profileIconId?: number;
  puuid?: string;
  level?: number;
  league?: LeagueEntryDto[] | undefined;
}

const styles = {
  self: css`
    display: flex;
    gap: 12px;
  `,
  div: {
    function: css`
      width: 128px;
    `,
    profile: css`
      display: flex;
      flex-direction: column;
      gap: 8px;
      background-color: white;
      width: 208px;
      place-content: center;
      place-items: center;
      padding: 12px;
      border-radius: 16px;
      box-shadow: 0px 0px 30px #f2f2f2;
    `,
    name: css`
      display: flex;
      gap: 4px;
      height: fit-content;
    `,
    recentData: css`
      display: flex;
      flex-direction: column;
      gap: 12px;
    `,
  },
};

function Profile(props: Props) {
  return (
    <div className={styles.self}>
      <div className={styles.div.profile}>
        <Icon profileIconId={props?.profileIconId} />
        <div className={styles.div.name}>
          <Level level={props?.level} />
          <Name name={props?.summonerName} />
        </div>
        <div className={styles.div.function}>
          <Refetch />
          <Favorite />
        </div>
      </div>
      <div>
        <Rank league={props.league} />
      </div>
      <div className={styles.div.recentData}>
        <RecentMatchRate />
        <RecentUseChampion />
      </div>
    </div>
  );
}

export default Profile;
