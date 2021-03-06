import leadsActionTypes from './leads.types'

const INITIAL_STATE = {
    leadsObject:{}
}

const leadsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case leadsActionTypes.SET_LEADS_OBJECT: {
            let obj = {}
            action.payload.forEach((lead)=>{
                    obj[lead._id] = lead
            })
            return ({...state,leadsObject:obj})
        }
        case leadsActionTypes.ADD_LEAD:{
            let obj = state.leadsObject
            obj[action.payload._id] = action.payload
            return ({...state,leadsObject:{...obj}})
        }
        case leadsActionTypes.EDIT_LEAD:{
            let obj = state.leadsObject
            obj[action.payload._id] = action.payload
            return ({...state,leadsObject:{...obj}})
        }
        case leadsActionTypes.CLOSE_LEAD:{
            let obj = state.leadsObject
            delete obj[action.payload]
            return ({...state,leadsObject:{...obj}})
        }
        default:
            return state
    }
}

export default leadsReducer