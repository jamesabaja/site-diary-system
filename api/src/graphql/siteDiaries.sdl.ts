export const schema = gql`
  type SiteDiary {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    date: DateTime!
    notes: String
  }

  type Query {
    siteDiaries: [SiteDiary!]! @requireAuth
    siteDiary(id: Int!): SiteDiary @requireAuth
  }

  input CreateSiteDiaryInput {
    date: DateTime!
    notes: String
  }

  input UpdateSiteDiaryInput {
    date: DateTime
    notes: String
  }

  type Mutation {
    createSiteDiary(input: CreateSiteDiaryInput!): SiteDiary! @requireAuth
    updateSiteDiary(id: Int!, input: UpdateSiteDiaryInput!): SiteDiary!
      @requireAuth
    deleteSiteDiary(id: Int!): SiteDiary! @requireAuth
  }
`
