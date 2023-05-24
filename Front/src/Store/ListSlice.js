import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'Lists',
  initialState: {
    list_need: [],
    list_menu: [],
  },
  reducers: {
    // add element to need list
    listMenuAdd(state, action) {
      if (!state.list_menu.includes(action.payload) && action.payload !== '' && action.payload !== ' ') {
        state.list_menu.push(action.payload);
      }
    },
    // add element to menu list
    listNeedAdd(state, action) {
      if (!state.list_need.includes(action.payload) && action.payload !== '' && action.payload !== ' ') {
        state.list_need.push(action.payload);
      }
    },
    // reset all List states ( the part of the store that is managed by this slice : ListSlice )
    resetLists(state) {
      return state = {
        list_need: [],
        list_menu: [],
      }

    },
    // reset menu list
    resetListMenu(state) {
        state.list_menu = []
    },
    // reset need list
    resetListNeed(state) {
        state.list_need = []
    },
    // remove element from need list
    removeNeed(state, action) {
      state.list_need =  state.list_need.filter(item => item !== action.payload);
      
    },
    removeMenu(state, action) {
      state.list_menu =  state.list_menu.filter(item => item !== action.payload);
    }
  }
})

export const { listMenuAdd, listNeedAdd ,resetLists, resetListMenu, resetListNeed, removeNeed} = listSlice.actions
export default listSlice.reducer