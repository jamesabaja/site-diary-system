export const schema = gql`
  type User {
    id: Int!
    clerkId: String
    role: String
    name: String
    email: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    clerkId: String
    role: String
    name: String
    email: String!
  }

  input UpdateUserInput {
    clerkId: String
    role: String
    name: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
