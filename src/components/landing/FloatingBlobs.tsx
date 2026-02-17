const FloatingBlobs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="floating-blob w-72 h-72 top-20 -left-20" />
    <div className="floating-blob w-96 h-96 top-40 right-0" style={{ animationDelay: "2s" }} />
    <div className="floating-blob w-64 h-64 bottom-20 left-1/3" style={{ animationDelay: "4s" }} />
  </div>
);

export default FloatingBlobs;
