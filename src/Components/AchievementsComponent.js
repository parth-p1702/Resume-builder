import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Divider, Paper } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/AchievementsComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";

const AchievementsComponent = ({ setTab, tab, achievementsData, setAchievementsData }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [achievements, setAchievements] = useState(
    achievementsData && achievementsData.length ? achievementsData : [""]
  );

  const handleNext = (data) => {
    setLoading(true);
    setAchievementsData && setAchievementsData(achievements);
    setTimeout(() => {
      setLoading(false);
      setTab(tab + 1);
    }, 500);
  };

  const handleBack = () => setTab(tab - 1);

  const handleEdit = (index, value) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };

  const handleAdd = () => setAchievements([...achievements, ""]);
  const handleRemove = (index) =>
    setAchievements(achievements.filter((_, i) => i !== index));

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Achievements</h2>
      <Divider />
      <form onSubmit={handleSubmit(handleNext)}>
        {achievements.map((ach, index) => (
          <div key={index} className="key-input-with-delete">
            <InputComponent
              type="text"
              name={`achievement${index + 1}`}
              register={register}
              multiline={false}
              value={ach}
              setValue={(val) => handleEdit(index, val)}
              error={errors[`achievement${index + 1}`] ? true : false}
              errorMessage={errors[`achievement${index + 1}`]?.message}
              placeholder="Achievement"
            />
            {achievements.length > 1 && (
              <DeleteOutlineOutlinedIcon
                sx={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleRemove(index)}
              />
            )}
          </div>
        ))}
        <Button variant="text" onClick={handleAdd}>Add New</Button>
        <Divider sx={{ marginY: 1 }} />
        <BackNextBtnComponent
          onNext={handleNext}
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

export default AchievementsComponent;
