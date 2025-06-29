export default function BackgroundDecoration() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute top-40 right-16 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}
