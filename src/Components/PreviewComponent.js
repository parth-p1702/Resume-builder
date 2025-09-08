import { Button, CircularProgress, Container, TextField } from "@mui/material";
import JsPDF from "jspdf";
import React, { useState } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import { templates } from "../Data/templates";
import "../Styles/PreviewComponent.css";

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({});

const PreviewComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");

  const getTemplate = (template, index) => {
    if (template.id === props.selectedTemplateId) {
      return React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
        projects: props.projectsData,
        achievements: props.achievementsData,
        languages: props.languagesData,
        certifications: props.certificationsData,
        index: index,
      });
    }
    return null;
  };

  const saveToLocalStorage = () => {
    let resumes = window.localStorage.getItem("resumes");
    let newResumes = resumes ? JSON.parse(resumes) : [];

    let resumeFound = newResumes.find(
      (resume) => resume.id === props.selectedResumeId
    );

    if (resumeFound) {
      // Update existing resume
      const allNewResumes = newResumes.map((resume) =>
        resume.id === props.selectedResumeId
          ? {
              template_id: props.selectedTemplateId,
              id: props.selectedResumeId,
              personalInfo: props.personalInfo,
              experiences: props.experiences,
              educationInfo: props.educationInfo,
              skills: props.skills,
              projects: props.projectsData,
              achievements: props.achievementsData,
              languages: props.languagesData,
              certifications: props.certificationsData,
            }
          : resume
      );
      window.localStorage.setItem("resumes", JSON.stringify(allNewResumes));
    } else {
      // Add new resume
      newResumes.push({
        template_id: props.selectedTemplateId,
        id: uniqid(),
        personalInfo: props.personalInfo,
        experiences: props.experiences,
        educationInfo: props.educationInfo,
        skills: props.skills,
        projects: props.projectsData,
        achievements: props.achievementsData,
        languages: props.languagesData,
        certifications: props.certificationsData,
      });
      window.localStorage.setItem("resumes", JSON.stringify(newResumes));
    }
  };

  const handleSave = () => {
    if (resumeName.trim().length === 0) {
      setError("*Please fill this field");
      return;
    }

    setError("");
    setLoading(true);

    const report = new JsPDF("portrait", "pt", "a4");
    report
      .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
      .then(() => {
        report.save(`${resumeName}.pdf`);
        saveToLocalStorage();
        setLoading(false);
        window.location.reload(); // refresh to reflect saved resumes
      })
      .catch((error) => {
        console.error("PDF generation failed:", error.message);
        setLoading(false);
      });
  };

  const handleBack = () => props.setTab(props.tab - 1);

  return (
    <Container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        },
      }}
      className="preview-container"
    >
      <h2 className="preview-header-title">Resume Preview</h2>
      <div className="resume-preview-grid-container">
        {/* Resume Template Preview */}
        <div className="resume-preview-grid-item" id="previewresume">
          {templates.map((template, index) => getTemplate(template, index))}
        </div>

        {/* Resume Save Section */}
        <div className="resume-preview-grid-item">
          <div className="resume-save-container">
            <h3 className="resume-save-title">Create File Name</h3>
            <TextField
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              className="resume-name-field"
              sx={{ width: "70%" }}
              id="outlined-basic"
              variant="outlined"
              error={error.length > 0}
              helperText={error}
            />
            <div className="resume-back-next-container">
              <Button
                onClick={handleBack}
                className="outlined-btn"
                sx={{ marginRight: "20px" }}
                variant="outlined"
              >
                Back
              </Button>
              {loading ? (
                <CircularProgress size={25} />
              ) : (
                <Button
                  onClick={handleSave}
                  className="contained-btn"
                  variant="contained"
                >
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewComponent);
