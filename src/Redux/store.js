import { combineReducers, createStore } from "redux";
import {
  achievementsReducer,
  certificationsReducer,
  educationDetailsReducer,
  keySkillsReducer,
  languagesReducer,
  personalInfoReducer, // ✅ import this
  projectsReducer,
  selectedTemplateReducer,
  workExperienceReducer,
} from "./reducers";

 const store = createStore(
  combineReducers({
    selectedTemplateReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
    certificationsReducer,  // ✅ add this
    projectsReducer,        // (Optional)
    achievementsReducer,    // (Optional)
    languagesReducer,    
  })
);

export default store;