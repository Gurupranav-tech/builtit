import GridDistortion from "../components/ui/GridDistortion"; // Ensure the path is correct

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <GridDistortion
        imageSrc="public/fluxus.jpg"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
      />
    </div>
  );
}
