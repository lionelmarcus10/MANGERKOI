import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'Data',
  initialState: {
    list_liked: [],
    list_have: [],
  },
  reducers: {
    add_to_list_liked: (state, action) => {
        state.list_liked.push(action.payload)
    },
    add_to_list_have: (state, action) => {
        state.list_have.push(action.payload)
    },
    remove_from_list_liked: (state, action) => {
        state.list_liked = state.list_liked.filter((item) => item!== action.payload)
    },
    remove_from_list_have: (state, action) => {
        state.list_have = state.list_have.filter((item) => item!== action.payload)
    }

  }
})

export const { add_to_list_have, add_to_list_liked, remove_from_list_have, remove_from_list_liked } = dataSlice.actions
export default dataSlice.reducer




