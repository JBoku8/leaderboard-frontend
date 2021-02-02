import Profile from "./Profile";

import { Hacker, LeaderboardListQuery } from "../../generated/graphql";

interface Props {
  data: LeaderboardListQuery;
}

function ProfileList(props: Props) {
  const {
    data: { leaderboard },
  } = props;

  // const list: Hacker;

  return (
    <div className="row justify-content-center pt-4 w-75 m-auto">
      {leaderboard?.map((leader, index) => {
        return (
          <Profile
            key={leader?.profile}
            hacker={leader as Hacker}
            order={index + 1}
          />
        );
      })}
    </div>
  );
}

export default ProfileList;
