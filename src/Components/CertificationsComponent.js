import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Divider, Paper } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BackNextBtnComponent from "./BackNextBtnComponent";
import InputComponent from "./InputComponent";

const CertificationsComponent = ({ setTab, tab, certificationsData, setCertificationsData }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [certifications, setCertifications] = useState(
    certificationsData && certificationsData.length ? certificationsData : [""]
  );

  const handlePreview = () => {
    setLoading(true);
    setCertificationsData && setCertificationsData(certifications);
    setTimeout(() => {
      setLoading(false);
      setTab(tab + 1); // Navigate to preview tab
    }, 500);
  };

  const handleBack = () => setTab(tab - 1);

  const handleEdit = (index, value) => {
    const updated = [...certifications];
    updated[index] = value;
    setCertifications(updated);
  };

  const handleAdd = () => setCertifications([...certifications, ""]);
  const handleRemove = (index) =>
    setCertifications(certifications.filter((_, i) => i !== index));

  return (
    <Paper elevation={3} className="key-skills-paper" style={{ padding: "20px" }}>
      <h2 className="key-skills-heading">Certifications</h2>
      <Divider sx={{ marginBottom: 2 }} />
      <form onSubmit={handleSubmit(handlePreview)}>
        {certifications.map((cert, index) => (
          <div key={index} className="key-input-with-delete" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <InputComponent
              type="text"
              name={`language${index + 1}`}
              register={register}
              multiline={false}
              value={cert}
              setValue={(val) => handleEdit(index, val)}
              error={errors[`language${index + 1}`] ? true : false}
              errorMessage={errors[`language${index + 1}`]?.message}
              placeholder="Certification"
            />
            {certifications.length > 1 && (
              <DeleteOutlineOutlinedIcon
                sx={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleRemove(index)}
              />
            )}
          </div>
        ))}
        <Button variant="text" onClick={handleAdd}>
          Add New
        </Button>
        <Divider sx={{ marginY: 2 }} />
        <BackNextBtnComponent
          onNext={handlePreview}
          loading={loading}
          tab={tab}
          onBack={handleBack}
          nextTitle="Preview"
          backTitle="Back"
        />
      </form>
    </Paper>
  );
};

export default CertificationsComponent;
