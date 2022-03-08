import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellersProfile: null,
  buyersProfile: null,
  sellerServices: null,
  allOrdersData: null,
  chatTicketsDta: null,
  complaintsDta: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSellersProfile: (state, action) => {
      state.sellersProfile = action.payload.slrPrfle;
    },
    setBuyersProfile: (state, action) => {
      state.buyersProfile = action.payload.byrPrfle;
    },
    setSellerServices: (state, action) => {
      state.sellerServices = action.payload.slrSrvcs;
    },
    setAllOrdersData: (state, action) => {
      state.allOrdersData = action.payload.ordrDta;
    },
    setChatTicketsDta: (state, action) => {
      state.chatTicketsDta = action.payload.ticktDta;
    },
    setComplaintsDta: (state, action) => {
      state.complaintsDta = action.payload.complDta;
    },
  },
});

export const {
  setChatTicketsDta,
  setAllOrdersData,
  setBuyersProfile,
  setSellerServices,
  setSellersProfile,
  setComplaintsDta,
} = dataSlice.actions;

export default dataSlice.reducer;
