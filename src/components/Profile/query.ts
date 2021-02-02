import gql from "graphql-tag";

export const QUERY_LEADERBOARD_LIST = gql`
  query leaderboardList($url: String!) {
    leaderboard(url: $url) {
      total
      profile
      avatar
      commitments {
        additions
        deletions
        point
      }
    }
  }
`;
