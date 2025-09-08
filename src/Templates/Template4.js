import { Avatar, Divider, Paper, Typography } from "@mui/material";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import { data } from "../Data/data.js";
import "../Styles/Template4.css";

const Template4 = (props) => {
  const personalinfo = props.personalinfo || data.personal_info;
  const workexperience = props.workexperience || data.work_experience;
  const educationinfo = props.educationinfo || data.education_details;
  const skills = props.skills || data.key_skills;
  const projects = props.projects || data.projects;
  const certifications = props.certifications || data.certifications;
  const achievements = props.achievements || data.achievements;
  const languages = props.languages || data.languages;
  const summary = props.summary || data.summary;

  return (
    <Paper className="template4-container" 
    sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },}}
    id={`${props.index}report`} elevation={5}>
      {/* LEFT SIDEBAR */}
      <div className="template4-left">
        {/* Profile Image */}
        <div className="profile-pic-container">
          <Avatar
            src={personalinfo?.profileImg}
            alt={personalinfo?.name}
            sx={{ width: 110, height: 110, marginBottom: "10px" }}
          />
          <Typography variant="h6" className="sidebar-name">
            {personalinfo?.name}
          </Typography>
          <Typography variant="body2" className="sidebar-designation">
            {personalinfo?.designation}
          </Typography>
        </div>

        {/* Contact Section */}
        <div className="sidebar-section">
          <h3>CONTACT</h3>
          <p>{personalinfo?.phone}</p>
          <p>{personalinfo?.email}</p>
          <p>{personalinfo?.address}</p>
          {personalinfo?.website && <p>{personalinfo.website}</p>}
        </div>

        {/* Education */}
        <div className="sidebar-section">
          <h3>EDUCATION</h3>
          <TemplateEducationComponent education={educationinfo} />
        </div>

        {/* Skills */}
        <div className="sidebar-section">
          <h3>SKILLS</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <TemplateKeySkillComponent key={index} skill={skill} />
            ))}
          </ul>
        </div>

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div className="sidebar-section">
            <h3>LANGUAGES</h3>
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      <div className="template4-right">
        {/* Summary/Profile */}
        {summary && (
          <div className="right-section-block">
            <TemplateHeading title={"PROFILE"} color={"#0D47A1"} />
            <Divider sx={{ mb: 1, borderColor: "#0D47A1" }} />
            <p>{summary}</p>
          </div>
        )}

        {/* Work Experience */}
        <div className="right-section-block">
          <TemplateHeading title={"WORK EXPERIENCE"} color={"#0D47A1"} />
          <Divider sx={{ mb: 1, borderColor: "#0D47A1" }} />
          <ul>
            {workexperience.map((exp, index) => (
              <TemplateOneExperienceComponent key={index} experience={exp} />
            ))}
          </ul>
        </div>

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="right-section-block">
            <TemplateHeading title={"PROJECTS"} color={"#0D47A1"} />
            <Divider sx={{ mb: 1, borderColor: "#0D47A1" }} />
            <ul>
              {projects.map((proj, index) => (
                <li key={index}>
                  <strong>{proj.title}</strong> - {proj.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="right-section-block">
            <TemplateHeading title={"CERTIFICATIONS"} color={"#0D47A1"} />
            <Divider sx={{ mb: 1, borderColor: "#0D47A1" }} />
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="right-section-block">
            <TemplateHeading title={"ACHIEVEMENTS"} color={"#0D47A1"} />
            <Divider sx={{ mb: 1, borderColor: "#0D47A1" }} />
            <ul>
              {achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Template4;
