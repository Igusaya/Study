const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches(
      """
      表示する結果の数。 1以上である必要があります。デフォルト= 20
      """
      pageSize: Int
      """
      ここにカーソルを追加すると、このカーソルの後にのみ結果が返されます
      """
      after: String
    ): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  """
  起動リストの最後の項目へのカーソルを含むシンプルなラッパーです。
  このカーソルを launches クエリに渡して、これらの後の結果を取得します。
  """
  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(mission: String, size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;