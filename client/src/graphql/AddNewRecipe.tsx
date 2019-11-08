import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ADD_NEW_RECIPE = gql`
  mutation newRecipe($data: RecipeCreateInput!) {
    createRecipe(data: $data) {
      title
    }
  }
`;

export default ADD_NEW_RECIPE;
