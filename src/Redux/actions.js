import * as actionTypes from "./actionTypes";

// Template & Resume
export const selectTemplate = (id) => ({
  type: actionTypes.SELECTTEMPLATE,
  payload: id,
});

export const selectResume = (id) => ({
  type: actionTypes.SELECTRESUME,
  payload: id,
});

// Personal Info
export const addPersonalInfo = (details) => ({
  type: actionTypes.ADDPERSONALINFO,
  payload: details,
});

// Work Experience
export const addExperience = (experience) => ({
  type: actionTypes.ADDEXPERIENCE,
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: actionTypes.ADDALLEXPERIENCE,
  payload: experiences,
});

// Skills
export const addNewSkills = () => ({
  type: actionTypes.ADDNEWSKILLS,
});

export const editSkill = (skills) => ({
  type: actionTypes.EDITSKILL,
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: actionTypes.DELETESKILL,
  payload: id,
});

// Education
export const addEducation = (details) => ({
  type: actionTypes.ADDEDUCATION,
  payload: details,
});

// Projects
export const addProject = (project) => ({
  type: actionTypes.ADDPROJECT,
  payload: project,
});

export const addAllProjects = (projects) => ({
  type: actionTypes.ADDALLPROJECTS,
  payload: projects,
});

export const deleteProject = (index) => ({
  type: actionTypes.DELETEPROJECT,
  payload: index,
});

// Certifications
export const addCertification = (certification) => ({
  type: actionTypes.ADD_CERTIFICATION,
  payload: certification,
});

export const editCertification = (index, updatedCertification) => ({
  type: actionTypes.EDIT_CERTIFICATION,
  payload: { index, updatedCertification },
});

export const deleteCertification = (index) => ({
  type: actionTypes.DELETE_CERTIFICATION,
  payload: index,
});

export const addAllCertifications = (certifications) => ({
  type: actionTypes.ADDALLCERTIFICATIONS,
  payload: certifications,
});

// Achievements
export const addAchievement = (achievement) => ({
  type: actionTypes.ADDACHIEVEMENT,
  payload: achievement,
});

export const addAllAchievements = (achievements) => ({
  type: actionTypes.ADDALLACHIEVEMENTS,
  payload: achievements,
});

export const deleteAchievement = (index) => ({
  type: actionTypes.DELETEACHIEVEMENT,
  payload: index,
});

// Languages
export const addLanguage = (language) => ({
  type: actionTypes.ADDLANGUAGE,
  payload: language,
});

export const addAllLanguages = (languages) => ({
  type: actionTypes.ADDALLLANGUAGES,
  payload: languages,
});

export const deleteLanguage = (index) => ({
  type: actionTypes.DELETELANGUAGE,
  payload: index,
});
