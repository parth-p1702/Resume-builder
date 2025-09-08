import "../Styles/TemplateProjectsComponent.css";

const TemplateProjectsComponent = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="template-projects">
      {projects.map((proj, index) => (
        <div key={index} className="template-project">
          <h4 className="template-project-title">{proj.title}</h4>
          <p className="template-project-description">{proj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateProjectsComponent;
