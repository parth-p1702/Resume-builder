import { useState } from "react";
import AchievementsComponent from "../Components/AchievementsComponent";
import CertificationsComponent from "../Components/CertificationsComponent";
import Navbar from "../Components/Common/Navbar";
import DetailFillingSidebar from "../Components/DetailFillingSidebar";
import EducationComponent from "../Components/EducationComponent";
import KeySkillsComponent from "../Components/KeySkillsComponent";
import LanguagesComponent from "../Components/LanguagesComponent";
import PersonalInfoComponent from "../Components/PersonalInfoComponent";
import PreviewComponent from "../Components/PreviewComponent";
import ProjectsComponent from "../Components/ProjectsComponent";
import WorkExperienceComponent from "../Components/WorkExperienceComponent";
import "../Styles/DetailsFilling.css";

const DetailsFilling = () => {
  const [tab, setTab] = useState(0);

  // Parent states to store data from all components
  const [projectsData, setProjectsData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);
  const [certificationsData, setCertificationsData] = useState([]);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab !== 8 && (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />

          {tab === 0 && <PersonalInfoComponent setTab={setTab} tab={tab} />}
          {tab === 1 && <WorkExperienceComponent setTab={setTab} tab={tab} />}
          {tab === 2 && <EducationComponent setTab={setTab} tab={tab} />}
          {tab === 3 && <KeySkillsComponent setTab={setTab} tab={tab} />}
          {tab === 4 && (
            <ProjectsComponent
              setTab={setTab}
              tab={tab}
              projectsData={projectsData}
              setProjectsData={setProjectsData}
            />
          )}
          {tab === 5 && (
            <AchievementsComponent
              setTab={setTab}
              tab={tab}
              achievementsData={achievementsData}
              setAchievementsData={setAchievementsData}
            />
          )}
          {tab === 6 && (
            <LanguagesComponent
              setTab={setTab}
              tab={tab}
              languagesData={languagesData}
              setLanguagesData={setLanguagesData}
            />
          )}
          {tab === 7 && (
            <CertificationsComponent
              setTab={setTab}
              tab={tab}
              certificationsData={certificationsData}
              setCertificationsData={setCertificationsData}
            />
          )}
        </div>
      )}

      {tab === 8 && (
        <PreviewComponent
          setTab={setTab}
          tab={tab}
          projectsData={projectsData}
          achievementsData={achievementsData}
          languagesData={languagesData}
          certificationsData={certificationsData}
        />
      )}
    </div>
  );
};

export default DetailsFilling;
