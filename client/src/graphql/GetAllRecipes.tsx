import gql from "graphql-tag";

const GET_ALL_RECIPES = gql`
  {
    recipes {
      title
      ingredients
    }
  }
`;

export default GET_ALL_RECIPES;
