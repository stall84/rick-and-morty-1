import { gql } from '@apollo/client';


// GET ALL CHARACTERS QUERY
export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
            }
        }
    }
`;

export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            name
            status
            species
            gender
            image
            location {
                name
            }
        }
    }
`;