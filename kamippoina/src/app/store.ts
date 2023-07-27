import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import tableDataReducer from "../features/TableData/TableSlice"
export default configureStore({
    reducer: {
        counter: counterReducer,
        //存放获取的table数据
        tableData: tableDataReducer,
    }
})