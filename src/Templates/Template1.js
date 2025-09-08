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
import "../Styles/Template1.css";

const Template1 = (props) => {
  const personalinfo = props.personalinfo || data.personal_info;
  const workexperience = props.workexperience || data.work_experience;
  const educationinfo = props.educationinfo || data.education_details;
  const skills = props.skills || data.key_skills;
  const projects = props.projects || data.projects;
  const languages = props.languages || data.languages;
  const certifications = props.certifications || data.certifications;
  const achievements = props.achievements || data.achievements;

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
        
      }}
      id={`${props.index}report`}
      elevation={3}
    >
      <TemplateHeader
        primaryColor={"#C98A55"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />

      <Container>
        {/* === Experience === */}
        <TemplateHeading color={"#C98A55"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 5 }}>
          {workexperience.map((experience, index) => (
            <TemplateOneExperienceComponent
              key={index}
              experience={experience}
            />
          ))}
        </ul>

        {/* === Education === */}
        <TemplateHeading color={"#C98A55"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />

        {/* === Skills === */}
        <TemplateHeading color={"#C98A55"} title={"Key Skills"} />
        <ul style={{ marginBottom: 5 }}>
          {skills.map((skill, index) => (
            <TemplateKeySkillComponent key={index} skill={skill} />
          ))}
        </ul>

        {/* === Languages === */}
        {languages?.length > 0 && (
          <>
            <TemplateHeading color={"#C98A55"} title={"Languages"} />
            <TemplateLanguagesComponent languages={languages} />
          </>
        )}

        {/* === Projects === */}
        {projects?.length > 0 && (
          <>
            <TemplateHeading color={"#C98A55"} title={"Projects"} />
            <TemplateProjectsComponent projects={projects} />
          </>
        )}
        {/* === Achievements === */}
        {achievements?.length > 0 && (
          <>
            <TemplateHeading color={"#C98A55"} title={"Achievements"} />
            <TemplateAchievementsComponent achievements={achievements} />
          </>
        )}
        {/* === Certifications === */}
        {certifications?.length > 0 && (
          <>
            <TemplateHeading color={"#C98A55"} title={"Certifications"} />
            <TemplateCertificationsComponent certifications={certifications}/>
          </>
        )}
      </Container>
    </Paper>
  );
};

export default Template1;
