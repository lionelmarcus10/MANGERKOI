import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'Data',
  initialState: {
    list_liked: [],
    list_have: [],
    list_canDO: [],
  },
  reducers: {
    add_to_list_liked: (state, action) => {
        
        if (!state.list_liked.includes(action.payload) && action.payload !== '' && action.payload !== ' ') {
            state.list_liked.push(action.payload);
        }
    },
    add_to_list_have: (state, action) => {
        if (!state.list_have.includes(action.payload) && action.payload !== '' && action.payload !== ' ') {
            state.list_have.push(action.payload);
        }
    },
    add_to_list_canDO: (state, action) => {
        if (!state.list_canDO.includes(action.payload) && action.payload !== '' && action.payload !== ' ') {
            state.list_canDO.push(action.payload);
        }
    },

    remove_from_list_liked: (state, action) => {
        state.list_liked = state.list_liked.filter((item) => item!== action.payload)
    },
    remove_from_list_have: (state, action) => {
        state.list_have = state.list_have.filter((item) => item!== action.payload)
    },
    remove_from_list_canDO: (state, action) => {
        state.list_canDO = state.list_canDO.filter((item) => item!== action.payload)
    },
    resetList: (state) => state = {
        list_liked: [],
        list_have: [],
        list_canDO: [],
    },

  }
})

export const { add_to_list_have, add_to_list_liked, add_to_list_canDO, remove_from_list_have, remove_from_list_liked, remove_from_list_canDO, resetList } = dataSlice.actions
export default dataSlice.reducer




