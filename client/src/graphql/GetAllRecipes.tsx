import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_RECIPES = gql`
  {
    recipes {
      title
      ingredients
    }
  }
`;

export default GET_ALL_RECIPES;
