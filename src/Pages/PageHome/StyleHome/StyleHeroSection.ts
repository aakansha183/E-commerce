import { SxProps, Theme } from "@mui/material";

export const heroSectionStyles: SxProps<Theme> = {
  marginTop: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#000",
  padding: "60px 0",
  width: "100%",
  height: { xs: "auto", md: "660px" },
};

export const gridContainerStyles: SxProps<Theme> = {
  marginLeft: { xs: "0", md: "-200px" },
  marginTop: { xs: "20px", md: "70px" },
};

export const titleStyles: SxProps<Theme> = {
  fontWeight: "700",
  fontFamily: "Poppins",
  fontSize: { xs: "32px", md: "64px" },
  lineHeight: { xs: "40px", md: "64px" },
};

export const subtitleStyles: SxProps<Theme> = {
  marginTop: 2,
  marginBottom: 4,
  fontWeight: "400",
  fontSize: { xs: "14px", md: "16px" },
  lineHeight: { xs: "20px", md: "22px" },
  color: "grey",
};

export const buttonStyles: SxProps<Theme> = {
  backgroundColor: "black",
  color: "white",
  padding: { xs: "12px 40px", md: "16px 54px" },
  width: { xs: "160px", md: "210px" },
  height: { xs: "40px", md: "52px" },
  borderRadius: "62px",
};

export const statsContainerStyles: SxProps<Theme> = {
  marginTop: 1,
  marginLeft: { xs: 0, md: -28 },
  fontWeight: "700",
  fontSize: { xs: "24px", md: "40px" },
  lineHeight: { xs: "32px", md: "54px" },
};

export const statTitleStyles: SxProps<Theme> = {
  fontWeight: "700",
  fontSize: { xs: "24px", md: "40px" },
  lineHeight: { xs: "32px", md: "54px" },
};

export const statSubtitleStyles: SxProps<Theme> = {
  fontWeight: "400",
  fontSize: { xs: "12px", md: "15px" },
  lineHeight: { xs: "18px", md: "22px" },
  color: "grey",
  width: { xs: "auto", md: "141px" },
};

export const starIconFirstStyles: SxProps<Theme> = {
  marginLeft: { xs: "auto", md: "1200px" },
  marginTop: { xs: "50px", md: "-500px" },
};

export const starIconSecondStyles: SxProps<Theme> = {
  marginLeft: { xs: "300px", md: "650px" },
  marginTop: { xs: "30px", md: "80px" },
};
