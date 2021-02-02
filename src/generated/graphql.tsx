import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  leaderboard?: Maybe<Array<Maybe<Hacker>>>;
};


export type QueryLeaderboardArgs = {
  url?: Maybe<Scalars['String']>;
};

export type Hacker = {
  __typename?: 'Hacker';
  total?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['String']>;
  commitments?: Maybe<Commitment>;
};

export type Commitment = {
  __typename?: 'Commitment';
  additions?: Maybe<Scalars['Int']>;
  deletions?: Maybe<Scalars['Int']>;
  point?: Maybe<Scalars['Int']>;
};

export type LeaderboardListQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type LeaderboardListQuery = (
  { __typename?: 'Query' }
  & { leaderboard?: Maybe<Array<Maybe<(
    { __typename?: 'Hacker' }
    & Pick<Hacker, 'total' | 'profile'>
    & { commitments?: Maybe<(
      { __typename?: 'Commitment' }
      & Pick<Commitment, 'additions' | 'deletions' | 'point'>
    )> }
  )>>> }
);


export const LeaderboardListDocument = gql`
    query leaderboardList($url: String!) {
  leaderboard(url: $url) {
    total
    profile
    commitments {
      additions
      deletions
      point
    }
  }
}
    `;

/**
 * __useLeaderboardListQuery__
 *
 * To run a query within a React component, call `useLeaderboardListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardListQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useLeaderboardListQuery(baseOptions: Apollo.QueryHookOptions<LeaderboardListQuery, LeaderboardListQueryVariables>) {
        return Apollo.useQuery<LeaderboardListQuery, LeaderboardListQueryVariables>(LeaderboardListDocument, baseOptions);
      }
export function useLeaderboardListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaderboardListQuery, LeaderboardListQueryVariables>) {
          return Apollo.useLazyQuery<LeaderboardListQuery, LeaderboardListQueryVariables>(LeaderboardListDocument, baseOptions);
        }
export type LeaderboardListQueryHookResult = ReturnType<typeof useLeaderboardListQuery>;
export type LeaderboardListLazyQueryHookResult = ReturnType<typeof useLeaderboardListLazyQuery>;
export type LeaderboardListQueryResult = Apollo.QueryResult<LeaderboardListQuery, LeaderboardListQueryVariables>;