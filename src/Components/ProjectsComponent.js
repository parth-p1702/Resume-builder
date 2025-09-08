import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Divider, Paper } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/ProjectsComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";

const ProjectsComponent = ({ setTab, tab, projectsData, setProjectsData }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [projects, setProjects] = useState(
    projectsData && projectsData.length ? projectsData : [{ title: "", description: "" }]
  );

  const handlePreview = (data) => {
    setLoading(true);
    setProjectsData && setProjectsData(projects);
    setTimeout(() => {
      setLoading(false);
      setTab(tab + 1);
    }, 500);
  };

  const handleBack = () => {
    setTab(tab - 1);
  };

  const handleEditProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleAddProject = () => setProjects([...projects, { title: "", description: "" }]);
  const handleRemoveProject = (index) =>
    setProjects(projects.filter((_, i) => i !== index));

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Projects (Major / Minor)</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        {projects.map((proj, index) => (
          <div key={index} className="key-input-with-delete">
            <InputComponent
              type="text"
              name={`projectTitle${index + 1}`}
              register={register}
              multiline={false}
              value={proj.title}
              setValue={(val) => handleEditProject(index, "title", val)}
              error={errors[`projectTitle${index + 1}`] ? true : false}
              errorMessage={errors[`projectTitle${index + 1}`]?.message}
              placeholder="Project Title"
            />
            <InputComponent
              type="text"
              name={`projectDesc${index + 1}`}
              register={register}
              multiline={true}
              value={proj.description}
              setValue={(val) => handleEditProject(index, "description", val)}
              error={errors[`projectDesc${index + 1}`] ? true : false}
              errorMessage={errors[`projectDesc${index + 1}`]?.message}
              placeholder="Project Description"
            />
            {projects.length > 1 && (
              <DeleteOutlineOutlinedIcon
                sx={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleRemoveProject(index)}
              />
            )}
          </div>
        ))}
        <Button variant="text" onClick={handleAddProject}>
          Add New
        </Button>
        <Divider sx={{ marginY: 1 }} />
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={tab}
          onBack={handleBack}
          nextTitle={"Next"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
};

export default ProjectsComponent;
