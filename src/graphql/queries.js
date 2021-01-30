import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query repositories(
        $orderBy: AllRepositoriesOrderBy 
        $orderDirection: OrderDirection
        $searchKeyword: String
        $first: Int
        $after: String
    ) {
        repositories (
            orderBy: $orderBy 
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
            first: $first
            after: $after
        ) {
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                totalCount
                hasNextPage
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query repository($id: ID! $first: Int $after: String) {
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
            reviews(first: $first after: $after) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            username
                            id
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    totalCount
                    hasNextPage
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query getAuthorizedUser($includeReviews: Boolean = false) {
        authorizedUser {
            username
            reviews @include(if: $includeReviews) {
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
                        repositoryId
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    totalCount
                    hasNextPage
                }
            }
        }
    }
`;