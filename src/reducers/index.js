import { combineReducers } from "redux";
import searchForm from "./search_form";
import results from "./results";
import controls from "./controls";

const reducer = combineReducers({
  searchForm,
  controls,
  results
})

export default reducer;
