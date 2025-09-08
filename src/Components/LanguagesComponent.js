import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Divider, Paper } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";

const LanguagesComponent = ({ setTab, tab, languagesData, setLanguagesData }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [languages, setLanguages] = useState(
    languagesData && languagesData.length ? languagesData : [""]
  );

  const handleNext = (data) => {
    setLoading(true);
    setLanguagesData && setLanguagesData(languages);
    setTimeout(() => {
      setLoading(false);
      setTab(tab + 1);
    }, 500);
  };

  const handleBack = () => setTab(tab - 1);

  const handleEdit = (index, value) => {
    const updated = [...languages];
    updated[index] = value;
    setLanguages(updated);
  };

  const handleAdd = () => setLanguages([...languages, ""]);
  const handleRemove = (index) =>
    setLanguages(languages.filter((_, i) => i !== index));

  return (
    <Paper elevation={3} className="key-skills-paper">
      <h2 className="key-skills-heading">Languages</h2>
      <Divider />
      <form onSubmit={handleSubmit(handleNext)}>
        {languages.map((lang, index) => (
          <div key={index} className="key-input-with-delete">
            <InputComponent
              type="text"
              name={`language${index + 1}`}
              register={register}
              multiline={false}
              value={lang}
              setValue={(val) => handleEdit(index, val)}
              error={errors[`language${index + 1}`] ? true : false}
              errorMessage={errors[`language${index + 1}`]?.message}
              placeholder="Language"
            />
            {languages.length > 1 && (
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

export default LanguagesComponent;
