import { SxProps, Theme } from "@mui/material";

export const brandBarStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, 1fr)",
    sm: "repeat(3, 1fr)",
    md: "repeat(5, 1fr)",
  },
  gap: { xs: 2, sm: 4 },
  justifyItems: "center",
  alignItems: "center",
  backgroundColor: "black",
  padding: { xs: "6px 0", sm: "10px 0" },
  height: { xs: "auto", sm: "100px" },
  overflow: "hidden",
  maxWidth: "100%",
  margin: "0 auto",
  marginTop: "-50px",
};

export const iconBoxStyles: SxProps<Theme> = {
  maxWidth: { xs: "40px", sm: "80px" },
  width: "100%",
};
