import { Container, Paper } from "@mui/material";
import TemplateAchievementsComponent from "../Components/TemplateAchievementsComponent";
import TemplateCertificationsComponent from "../Components/TemplateCertificationsComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";
import TemplateLanguagesComponent from "../Components/TemplateLanguagesComponent";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateProjectsComponent from "../Components/TemplateProjectsComponent";
import { data } from "../Data/data";
import "../Styles/Template2.css";

const Template2 = (props) => {
  // === Use props if available, else fallback to dummy data ===
  const personalinfo = props.personalinfo || data.personal_info;
  const workexperience = props.workexperience || data.work_experience;
  const educationinfo = props.educationinfo || data.education_details;
  const skills = props.skills || data.key_skills;
  const languages = props.languages || data.languages || [];
  const projects = props.projects || data.projects || [];
  const achievements = props.achievements || data.achievements || [];
  const certifications = props.certifications || data.certifications || [];

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        minHeight: "650px",
      }}
      id={`${props.index}report`}
      elevation={3}
    >
      {/* === HEADER === */}
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />

      <Container>
        {/* === EXPERIENCE === */}
        {workexperience?.length > 0 && (
          <>
            <TemplateHeading
              color={"#9B536F"}
              title={"Professional Experience"}
            />
            <ul style={{ marginBottom: 10 }}>
              {workexperience.map((experience, index) => (
                <TemplateOneExperienceComponent
                  key={index}
                  experience={experience}
                />
              ))}
            </ul>
          </>
        )}

        {/* === EDUCATION ===
        {educationinfo?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Education"} />
            {educationinfo.map((edu, index) => (
              <TemplateEducationComponent key={index} education={edu} />
            ))}
          </>
        )} */}
        {/* Education */}
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />

        {/* === SKILLS === */}
        {skills?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
            <ul style={{ marginBottom: 10 }}>
              {skills.map((skill, index) => (
                <TemplateKeySkillComponent key={index} skill={skill} />
              ))}
            </ul>
          </>
        )}

        {/* === LANGUAGES === */}
        {languages?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Languages"} />
            <TemplateLanguagesComponent languages={languages} />
          </>
        )}

        {/* === PROJECTS === */}
        {projects?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Projects"} />
            <TemplateProjectsComponent projects={projects} />
          </>
        )}

        {/* === ACHIEVEMENTS === */}
        {achievements?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Achievements"} />
            <TemplateAchievementsComponent achievements={achievements} />
          </>
        )}

        {/* === CERTIFICATIONS === */}
        {certifications?.length > 0 && (
          <>
            <TemplateHeading color={"#9B536F"} title={"Certifications"} />
            <TemplateCertificationsComponent certifications={certifications} />
          </>
        )}
      </Container>
    </Paper>
  );
};

export default Template2;
