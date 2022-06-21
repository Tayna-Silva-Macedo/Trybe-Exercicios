import { combineReducers } from "redux"
import postsFromSubreddit from "./postsFromSubreddit"
import selectSubreddit from "./selectedSubreddit";

const rootReducer = combineReducers({ postsFromSubreddit, selectSubreddit })

export default rootReducer;