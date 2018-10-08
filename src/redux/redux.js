const CHANGE_IMG = "CHANGE_IMG";

export const changeImage = src => ({
  type: CHANGE_IMG,
  payload: src
});

export const rootRerucer = (state = { src: null }, action) => {
  switch (action.type) {
    case CHANGE_IMG:
      return { ...state, src: action.payload };
    default:
      return state;
  }
};
