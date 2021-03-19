import { gql } from '@apollo/client';


// GET ALL CHARACTERS QUERY
export const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page) {
            results {
                id
                name
            }
        }
    }
`;