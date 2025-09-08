import * as actionTypes from "./actionTypes";

// Initial States
const initialSelectedTemplateState = { selectedTemplateId: null, selectedResumeId: null };
const initialPersonalInfoState = { personalInfo: { profileImg: "", firstName: "", lastName: "", email: "", mobile: "", address: "", city: "", state: "", postalCode: "", objective: "" } };
const initialWorkExperienceState = { experiences: [] };
const initialSkillsState = { skills: [] };
const initialEducationState = { educationInfo: {} };
const initialProjectsState = { projects: [] };
const initialCertificationsState = { certifications: [] };
const initialAchievementsState = { achievements: [] };
const initialLanguagesState = { languages: [] };

// Reducers
export const selectedTemplateReducer = (state = initialSelectedTemplateState, action) => {
  switch (action.type) {
    case actionTypes.SELECTTEMPLATE:
      return { ...state, selectedTemplateId: action.payload };
    case actionTypes.SELECTRESUME:
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

export const personalInfoReducer = (state = initialPersonalInfoState, action) => {
  if (action.type === actionTypes.ADDPERSONALINFO) {
    return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
  }
  return state;
};

export const workExperienceReducer = (state = initialWorkExperienceState, action) => {
  switch (action.type) {
    case actionTypes.ADDEXPERIENCE:
      return { ...state, experiences: [...state.experiences, action.payload] };
    case actionTypes.ADDALLEXPERIENCE:
      return { ...state, experiences: action.payload };
    default:
      return state;
  }
};

export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case actionTypes.ADDNEWSKILLS:
      return { ...state, skills: [...state.skills, ""] };
    case actionTypes.EDITSKILL:
      return { ...state, skills: action.payload };
    case actionTypes.DELETESKILL:
      return { ...state, skills: state.skills.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
};

export const educationDetailsReducer = (state = initialEducationState, action) => {
  if (action.type === actionTypes.ADDEDUCATION) {
    return { ...state, educationInfo: action.payload };
  }
  return state;
};

export const projectsReducer = (state = initialProjectsState, action) => {
  switch (action.type) {
    case actionTypes.ADDPROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case actionTypes.ADDALLPROJECTS:
      return { ...state, projects: action.payload };
    case actionTypes.DELETEPROJECT:
      return { ...state, projects: state.projects.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
};

export const certificationsReducer = (state = initialCertificationsState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CERTIFICATION:
      return { ...state, certifications: [...state.certifications, action.payload] };
    case actionTypes.EDIT_CERTIFICATION:
      return {
        ...state,
        certifications: state.certifications.map((cert, idx) =>
          idx === action.payload.index ? action.payload.updatedCertification : cert
        ),
      };
    case actionTypes.DELETE_CERTIFICATION:
      return { ...state, certifications: state.certifications.filter((_, idx) => idx !== action.payload) };
    case actionTypes.ADDALLCERTIFICATIONS:
      return { ...state, certifications: action.payload };
    default:
      return state;
  }
};

export const achievementsReducer = (state = initialAchievementsState, action) => {
  switch (action.type) {
    case actionTypes.ADDACHIEVEMENT:
      return { ...state, achievements: [...state.achievements, action.payload] };
    case actionTypes.ADDALLACHIEVEMENTS:
      return { ...state, achievements: action.payload };
    case actionTypes.DELETEACHIEVEMENT:
      return { ...state, achievements: state.achievements.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
};

export const languagesReducer = (state = initialLanguagesState, action) => {
  switch (action.type) {
    case actionTypes.ADDLANGUAGE:
      return { ...state, languages: [...state.languages, action.payload] };
    case actionTypes.ADDALLLANGUAGES:
      return { ...state, languages: action.payload };
    case actionTypes.DELETELANGUAGE:
      return { ...state, languages: state.languages.filter((_, i) => i !== action.payload) };
    default:
      return state;
  }
};
