const initalState = [];

export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];

    case "EDIT_PRODUCT":
      return state.map((i) => {
        if (i.id === action.id) {
          return {
            ...i,
            ...action.update,
          };
        } else {
          return i;
        }
      });

    case "GET_PRODUCTS":
      return action.products;
    case "REMOVE_PRODUCT":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
