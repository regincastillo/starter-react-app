import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import { useTheme } from "@mui/material/styles";
import { LoadingComponent, LoadingWrapper } from "./Loading.style";

const Loading = ({ isLoadingBackdropOpen, loadingType, type, background, zIndex }) => {
  const { zIndex: MUIZindex } = useTheme();
  const loadingBackdrop = () => (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoadingBackdropOpen}
    >
      <LoadingComponent>
        <div />
        <div />
        <div />
        <div />
      </LoadingComponent>
    </Backdrop>
  );

  const loadingDefault = () => (
    <LoadingWrapper type={type} background={background} zindex={MUIZindex[zIndex]}>
      <LoadingComponent>
        <div />
        <div />
        <div />
        <div />
      </LoadingComponent>
    </LoadingWrapper>
  );

  return loadingType === "backdrop" ? loadingBackdrop() : loadingDefault();
};

Loading.propTypes = {
  isLoadingBackdropOpen: PropTypes?.bool,
  loadingType: PropTypes?.string,
  type: PropTypes?.string,
  background: PropTypes?.string,
  zIndex: PropTypes?.string,
};

Loading.defaultProps = {
  isLoadingBackdropOpen: false,
  loadingType: "default",
  type: "default",
  background: "",
  // for zindex option kindly look here https://mui.com/material-ui/customization/default-theme/?expand-path=$.zIndex
  zIndex: "mobileStepper",
};

export default Loading;
