import "../Styles/TemplateAchievementsComponent.css";

const TemplateAchievementsComponent = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="template-achievements" style={{ marginBottom: 10 }}>
      
      <ul className="template-achievements-list">
        {achievements.map((ach, index) => (
          <li key={index} className="template-achievement-item">
            {ach}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateAchievementsComponent;
