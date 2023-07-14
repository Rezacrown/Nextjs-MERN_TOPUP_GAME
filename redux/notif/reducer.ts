import { createSlice  } from "@reduxjs/toolkit";
import { CLEAR_NOTIF, SET_NOTIF, notifInterface } from "./constants";


const initialState = {
  status: false,
  typeNotif: "",
  message: null,
};



const notifReducer = createSlice({
  name: "notif",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(SET_NOTIF, (state, action: any) => {
        return {
            ...state,
            status: action?.status,
            typeNotif: action?.typeNotif,
            message: action?.message,
        }
    });

    builder.addCase(CLEAR_NOTIF, (_state, _action) => {
        return _state = initialState
    }) 
  },
});



export default notifReducer.reducer
