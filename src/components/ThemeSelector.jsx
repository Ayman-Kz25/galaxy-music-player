export default function ThemeSelector({ currentTheme, setTheme }) {
  const themeOptions = ["purple", "pink", "cyan"];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      {themeOptions.map((color) => (
        <button
          key={color}
          onClick={() => setTheme(color)}
          className={`w-10 h-10 rounded-full shadow-lg border-2
            ${currentTheme === color ? "border-white" : "border-transparent"}
            transition-all`}
          style={{
            backgroundColor:
              color === "purple"
                ? "#8b5cf6"
                : color === "pink"
                ? "#ec4899"
                : "#06b6d4",
          }}
        />
      ))}
    </div>
  );
}