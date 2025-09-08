import { Container, Divider, Paper } from "@mui/material";
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
import "../Styles/Template2.css"; // reuse or create Template3.css if needed

const Template3 = (props) => {
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
        width: { xs: "360px", sm: "420px", md: "480px", lg: "520px", xl: "580px" },
        minHeight: { xs: "520px", sm: "580px", md: "640px", lg: "700px", xl: "760px" },
        backgroundColor: "#f5f5f5",
        padding: 2,
        borderRadius: 3,
      }}
      id={`${props.index}report`}
      elevation={4}
    >
      {/* Header */}
      <TemplateHeader
        primaryColor={"#6A1B9A"}
        secondaryColor={"#333"}
        bgColor={"#EDE7F6"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />

      <Container sx={{ mt: 2 }}>
        {/* === Experience === */}
        <TemplateHeading color={"#6A1B9A"} title={"Professional Experience"} />
        <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
        <ul style={{ paddingLeft: 15, marginBottom: 15 }}>
          {workexperience.map((exp, index) => (
            <TemplateOneExperienceComponent key={index} experience={exp} />
          ))}
        </ul>

        {/* === Education === */}
        <TemplateHeading color={"#6A1B9A"} title={"Education"} />
        <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
        <TemplateEducationComponent education={educationinfo} />

        {/* === Skills === */}
        <TemplateHeading color={"#6A1B9A"} title={"Key Skills"} />
        <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: 10 }}>
          {skills.map((skill, index) => (
            <TemplateKeySkillComponent key={index} skill={skill} />
          ))}
        </ul>

        {/* === Languages === */}
        {languages?.length > 0 && (
          <>
            <TemplateHeading color={"#6A1B9A"} title={"Languages"} />
            <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
            <TemplateLanguagesComponent languages={languages} />
          </>
        )}

        {/* === Projects === */}
        {projects?.length > 0 && (
          <>
            <TemplateHeading color={"#6A1B9A"} title={"Projects"} />
            <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
            <TemplateProjectsComponent projects={projects} />
          </>
        )}
        

        {/* === Achievements === */}
        {achievements?.length > 0 && (
          <>
            <TemplateHeading color={"#6A1B9A"} title={"Achievements"} />
            <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
            <TemplateAchievementsComponent achievements={achievements} />
          </>
        )}

        {/* === Certifications === */}
        {certifications?.length > 0 && (
          <>
            <TemplateHeading color={"#6A1B9A"} title={"Certifications"} />
            <Divider sx={{ mb: 1, borderBottomWidth: 2, borderColor: "#6A1B9A" }} />
            <TemplateCertificationsComponent certifications={certifications} />
          </>
        )}

      </Container>
    </Paper>
  );
};

export default Template3;
