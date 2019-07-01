import axios from "axios"

import store from "src/redux/store"

export const SEARCH = "catalog/SEARCH"
export const SEARCH_RESULTS = "catalog/SEARCH_RESULTS"

const initialState = {
  query: "",
  items: [],
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, ...action.payload }
    case SEARCH_RESULTS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const onSearch = (query = "") => async dispatch => {
  dispatch({
    type: SEARCH,
    payload: {
      query,
    },
  })

  const { accessToken } = store.getState().auth

  // TODO: move it to api handler
  const { data: { items = [] } = {} } = await axios.get(
    "api/catalogue/items/",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        ...(query && { query }),
      },
    }
  )

  return dispatch({
    type: SEARCH_RESULTS,
    payload: {
      items: items.map(item => {
        // eslint-disable-next-line
        delete item["@type"]
        return { ...item }
      }),
    },
  })
}
