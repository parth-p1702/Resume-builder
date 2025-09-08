import "../Styles/TemplateCertificationsComponent.css";

const TemplateCertificationsComponent = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="template-certifications">
      <ul className="template-certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="template-certification-item">
            {cert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateCertificationsComponent;
