import { useMediaQuery } from "react-responsive";

export const useLayout = () => {
  const isTablet = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)",
  });

  return {
    isTablet,
    isMobile,
  };
};
