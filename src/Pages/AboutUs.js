import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutline from "./aboutline.png";
import aboutus from "./aboutus.png";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <span><img style={{ width: "200px", height: "50px" }} src={aboutline} alt="aboutline" /></span>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
           <p>➤ We are college friends who created this major and minor project to help job seekers build professional resumes and impactful cover letters. Our easy-to-use platform offers customizable templates and industry keywords to showcase your unique skills.</p><br/>

<p>➤ This project provides a high-quality, affordable solution to boost your career opportunities. As friends working together, we combined our knowledge, creativity, and technical skills to deliver a platform that reflects the latest trends in resume building.</p><br/>

<p>➤ We’re excited to help you create a resume that opens doors to your dream job!</p>
          </Typography>
          <Stack>
            <img className="about-img"
              src={aboutus}
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="1px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
