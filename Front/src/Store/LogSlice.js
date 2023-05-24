import { createSlice } from '@reduxjs/toolkit'

const logSlice = createSlice({
  name: 'Log',
  initialState: {
    email: '',
    password: '',
    nom: '',
    prenom: '',
    connected: false,
  },
  reducers: {
    changeName(state, action) {
        state.nom = action.payload
    },
    changePrenom(state, action) {
        state.prenom = action.payload
    },
    changeEmail(state, action) {
        state.email = action.payload
    },
    changePassword(state, action) {
        state.password = action.payload
    },
    changeConnected(state, action) {
        state.connected = action.payload
    },

    // reset all states ( the part of the store that is managed by this slice : ListSlice )
    resetlog(state) {
      return state = {
        email: '',
        password: '',
        nom: '',
        prenom: '',
        connected: false,
      }

    },
    
  }
})

export const { changeConnected, changeEmail, changeName, changePassword, changePrenom, resetlog } = logSlice.actions
export default logSlice.reducer