import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import JsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlackScreen from "../Components/BlackScreen";
import Navbar from "../Components/Common/Navbar";
import { templates } from "../Data/templates";
import {
  addAllAchievements,
  addAllCertifications,
  addAllExperience,
  addAllLanguages,
  addAllProjects,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectResume,
  selectTemplate,
} from "../Redux/actions";
import "../Styles/MyResumes.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  setAllProjects: (projects) => dispatch(addAllProjects(projects)),
  setAllCertifications: (certifications) =>
    dispatch(addAllCertifications(certifications)),
  setAllAchievements: (achievements) =>
    dispatch(addAllAchievements(achievements)),
  setAllLanguages: (languages) => dispatch(addAllLanguages(languages)),
});

const MyResumes = (props) => {
  const [resumes, setResumes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedResumes = window.localStorage.getItem("resumes");
    setResumes(storedResumes ? JSON.parse(storedResumes) : []);
  }, []);

  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );

    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      projects: resume.projects || [],
      certifications: resume.certifications || [],
      achievements: resume.achievements || [],
      languages: resume.languages || [],
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  const deleteResume = (resume) => {
    const newResumes = resumes.filter((r) => r.id !== resume.id);
    window.localStorage.setItem("resumes", JSON.stringify(newResumes));
    setResumes(newResumes);
  };

  const downloadResume = (id) => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
    });
  };

  const setUserData = (resume) => {
    props.onAddPersonalInfo(resume.personalInfo);
    props.setAllExperience(resume.experiences);
    props.onAddEducation(resume.educationInfo);
    props.onEditSkill(resume.skills);

    // New Fields
    props.setAllProjects(resume.projects || []);
    props.setAllCertifications(resume.certifications || []);
    props.setAllAchievements(resume.achievements || []);
    props.setAllLanguages(resume.languages || []);
  };

  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  return (
    <>
      <Navbar active={"My Resumes"} />
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center" alignItems="center" className="grid">
            {resumes.length > 0 ? (
              resumes.map((resume, index) => (
                <Grid item className="resume" id={`${index}resume`} margin={2} key={index}>
                  <Item id={`${index}ITEM`}>
                    {getTemplate(resume, index)}
                    <BlackScreen />
                    <div className="use-template-btn-cont">
                      <Button
                        className="use-template-btn"
                        onClick={() => downloadResume(index)}
                        size="medium"
                        variant="contained"
                      >
                        Download
                      </Button>
                      <Button
                        className="use-template-btn"
                        onClick={() => deleteResume(resume)}
                        size="medium"
                        variant="contained"
                      >
                        Delete
                      </Button>
                      <Button
                        className="use-template-btn"
                        onClick={() => navigateToFillDetails(resume)}
                        size="medium"
                        variant="contained"
                      >
                        Edit Template
                      </Button>
                    </div>
                  </Item>
                </Grid>
              ))
            ) : (
              <div className="no-resumes-container">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p className="no-resumes-text" style={{ margin: "0 13px" }}>
                  <strong style={{ fontSize: "20px" }}>Oops!.</strong> You do not have any Resumes yet. Make One to view it here.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);
