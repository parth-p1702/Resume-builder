import { Container } from "@mui/system";
import "../Styles/TemplateLanguagesComponent.css";

const TemplateLanguagesComponent = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <Container>
      
      <ul style={{ marginBottom: 10 }}
      className="template-languages-list">
        {languages.map((lang, index) => (
          <li key={index} className="language">
            {lang}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TemplateLanguagesComponent;
