import { createSlice } from '@reduxjs/toolkit';

const planificationSlice = createSlice({
    name: 'Planification',
    initialState: {
        planification: {
            "Lundi": [],
            "Mardi": [],
            "Mercredi": [],
            "Jeudi": [],
            "Vendredi": [],
            "Samedi": [],
            "Dimanche": [],
          },
    },
    reducers: {
        // add element to list
        addToPlanification(state, action) {
            const day = action.payload.day;
            const name = action.payload.name;
            console.log(action.payload)
            if (state.planification.hasOwnProperty(`${day}`) && !state.planification[day].includes(name) && state.planification[day] !== '') {
                console.log("day exists")
                state.planification[day].push(name);
            }else{
                console.log("day doesn't exist", state.planification)
                
            }
        }
        ,
        // reset all List states ( the part of the store that is managed by this slice : ListSlice )
        resetPlanification(state) {
            return state = {
                planification: {
                    "Lundi": [],
                    "Mardi": [],
                    "Mercredi": [],
                    "Jeudi": [],
                    "Vendredi": [],
                    "Samedi": [],
                    "Dimanche": [],
                    },
            } 
        },
    }
})

export const { addToPlanification, resetPlanification } = planificationSlice.actions
export default planificationSlice.reducer