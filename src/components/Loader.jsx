import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        zIndex: 1000,
      }}
    >
      {/* Progress Bar */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "#e0e0e0",
          position: "relative",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#000",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Loading Text */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          fontSize: "10px",
          fontFamily: "monospace",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        <span>⏩ LOADING - {progress.toFixed(2)}%</span>
        <span className="text-xs">https://csefest.uiu.ac.bd/</span>
      </div>
    </Html>
  );
};

export default CanvasLoader;
