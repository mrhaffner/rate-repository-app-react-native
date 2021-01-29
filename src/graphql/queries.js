import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query repositories($orderBy: AllRepositoriesOrderBy $orderDirection: OrderDirection) {
        repositories (orderBy: $orderBy orderDirection: $orderDirection) {
            edges {
                node {
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                    id
                }
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query repository($id: ID!) {
        repository(id: $id) {
            url
            ownerAvatarUrl
            fullName
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            id
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query {
        authorizedUser {
            username
        }
    }
`;