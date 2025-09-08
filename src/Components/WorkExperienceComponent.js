import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import "../index.css";
import { addAllExperience, addExperience } from "../Redux/actions";
import "../Styles/WorkExperienceComponent.css";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";

const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

const years = [
  "2030","2029","2028","2027","2026","2025", "2024", "2023", "2022", "2021",
  "2020", "2019", "2018", "2017", "2016",
  "2015", "2014", "2013",
];

const WorkExperienceComponent = (props) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const handleNext = (data) => {
    setLoading(true);

    let experienceOne = {};
    let experienceTwo = {};

    for (let index in data) {
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else {
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
    }

    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
      ]);
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const addNewExperience = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };

  const removeExperience = (id) => {
    const filtered = props.experiences.filter((exp) => exp.id !== id);
    // Reassign IDs to keep them sequential
    const updated = filtered.map((exp, idx) => ({ ...exp, id: idx + 1 }));
    props.setAllExperience(updated);
  };

  const editExperience = (id, field, value) => {
    const updated = props.experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    props.setAllExperience(updated);
  };

  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="work-experience-heading">Work Experience</h2>
      <form onSubmit={handleSubmit(handleNext)}>
        {props.experiences.map((experience) => (
          <div key={experience.id} className="experience-cont">
            <div className="experience-header">
              <h3 className="experience-heading">Experience {experience.id}</h3>
              {props.experiences.length > 1 && (
                <DeleteOutlineOutlinedIcon
                  sx={{ cursor: "pointer", color: "black" }}
                  onClick={() => removeExperience(experience.id)}
                />
              )}
            </div>
            <Divider sx={{ margin: "5px 0px" }} />
            <div className="experience-form-cont">
              <InputComponent
                title="Job Title"
                type="text"
                name={"jobTitle" + experience.id}
                register={register}
                value={experience.jobTitle}
                setValue={(val) => editExperience(experience.id, "jobTitle", val)}
                error={Boolean(errors[`jobTitle${experience.id}`])}
                errorMessage={errors[`jobTitle${experience.id}`]?.message}
              />
              <InputComponent
                title="Organization Name"
                type="text"
                name={"organizationName" + experience.id}
                register={register}
                value={experience.organizationName}
                setValue={(val) => editExperience(experience.id, "organizationName", val)}
                error={Boolean(errors[`organizationName${experience.id}`])}
                errorMessage={errors[`organizationName${experience.id}`]?.message}
              />
              <SelectComponent title="Start Year" error={Boolean(errors[`startYear${experience.id}`])} errorMessage={errors[`startYear${experience.id}`]?.message}>
                <Controller
                  name={`startYear${experience.id}`}
                  control={control}
                  defaultValue={experience.startYear}
                  rules={{ required: "*Please select start year" }}
                  render={({ field }) => (
                    <Select value={field.value} onChange={field.onChange}>
                      {years.map((year, idx) => (
                        <MenuItem key={idx} value={year}>{year}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </SelectComponent>
              <SelectComponent title="End Year" error={Boolean(errors[`endYear${experience.id}`])} errorMessage={errors[`endYear${experience.id}`]?.message}>
                <Controller
                  name={`endYear${experience.id}`}
                  control={control}
                  defaultValue={experience.endYear}
                  rules={{ required: "*Please select end year" }}
                  render={({ field }) => (
                    <Select value={field.value} onChange={field.onChange}>
                      {years.map((year, idx) => (
                        <MenuItem key={idx} value={year}>{year}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </SelectComponent>
            </div>
          </div>
        ))}
        {props.experiences.length < 2 && (
          <Button onClick={addNewExperience} variant="text">Add New</Button>
        )}
        <Divider sx={{ marginY: 1 }} />
        <BackNextBtnComponent
          onNext={handleNext}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle="Next"
          backTitle="Back"
        />
      </form>
    </Paper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceComponent);
