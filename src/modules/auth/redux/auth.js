export const DUMMY_AUTH = "auth/DUMMY_AUTH"

const initialState = {
  url: "",
  accessToken: "",
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DUMMY_AUTH:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const onDummyAuth = ({ url = "", accessToken = "" }) => ({
  type: DUMMY_AUTH,
  payload: {
    url,
    accessToken,
  },
})
