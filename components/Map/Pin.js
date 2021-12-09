import Image from "next/image";
import { Box } from "@chakra-ui/layout";
import pin from "../../images/pin.png";

const hoverStyle = {
  cursor: "pointer",
  transform: "scale(1.4) translateY(-7px)",
};

export const Pin = ({ isSelected, onSelect }) => {
  return (
    <Box
      width={55}
      height={55}
      position="relative"
      transform="translate(-50%, -100%)"
      onClick={onSelect}
      sx={{
        "& *": {
          overflow: "visible !important",
        },
        "& img": {
          overflow: "visible",
          transition: "transform 0.1s ease-in-out",
          ...(isSelected && {
            ...hoverStyle,
            filter: "hue-rotate(170deg)",
          }),
        },
        "& img:hover": hoverStyle,
      }}
    >
      <Image alt="Pin" src={pin} layout="fill" overflow="visible" />
    </Box>
  );
};
