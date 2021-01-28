import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
    mutation authorize($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation createReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;

export const SIGN_UP = gql`
    mutation createUser($user: CreateUserInput!) {
        createUser(user: $user) {
            username
            id
            createdAt
            reviewCount
        }
    }
`;