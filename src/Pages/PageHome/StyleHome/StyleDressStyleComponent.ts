import { SxProps, Theme } from "@mui/material";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: { xs: "20px", md: "40px" },
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: "20px",
    height: { xs: "auto", md: "650px" },
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "20px",
  },
};
