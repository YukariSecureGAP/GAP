/**
 * @file TableSlice.ts
 * @desc TableSliceの定義
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  TableData: [],
  isLoading: false,
  TableInfo: [], // Add TableInfo property to initialState
};
export const AsyncTableData1 = createAsyncThunk(
  "table/fetchTableData1",
  async () => {
    try {
      const res = await fetch(
        "CateringSystem1.0/recruitment/catering/qryDeskArea.do?method=login"
      );
      const data = await res.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const AsyncTableData2 = createAsyncThunk(
  "table/fetchTableData2",
  async () => {
    try {
      const res = await fetch(
        "CateringSystem1.0/recruitment/catering/qryDeskTopList.do?method=login"
      );
      const data = await res.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    // 保存table数据
    saveTableData: (state, action) => {
      console.log(action.payload);

      state.TableData = action.payload;
    },
    //保存tableInfo数据
    saveTableInfo: (state, action) => {
      state.TableInfo = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(AsyncTableData1.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AsyncTableData1.fulfilled, (state, action) => {
        state.isLoading = false;
        state.TableData = action.payload.responseBody.deskAreaList;
      });
    builder.addCase(AsyncTableData2.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(AsyncTableData2.fulfilled, (state, action) => {
      state.isLoading = false;
      state.TableInfo = action.payload.responseBody.deskTopList;
    });
  },
});

export const { saveTableData, saveTableInfo } = TableSlice.actions;
export default TableSlice.reducer;
