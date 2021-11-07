import Falling from "../components/Falling/Falling";

export const Backdrop = ({ quantity = 20 }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        height: "inherit",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <Falling key={index} delay={600 * index}>
            <>♥</>
          </Falling>
        ))}
    </div>
  );
};
