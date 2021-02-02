import ProfileList from "../components/Profile/ProfileList";
import { useLeaderboardListQuery } from "../generated/graphql";

interface Props {
  url: string;
}

function LeaderBoard({ url }: Props) {
  const { data, error, loading } = useLeaderboardListQuery({
    variables: {
      url: url,
    },
    pollInterval: 30 * 1000,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <ProfileList data={data} />;
}

export default LeaderBoard;
