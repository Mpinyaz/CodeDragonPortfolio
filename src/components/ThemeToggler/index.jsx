import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggler.css";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="theme-toggle relative flex items-center justify-center">
        <input
          type="checkbox"
          name="theme-toggle"
          id="themeBtn"
          className="hidden"
          checked={theme && theme === "dark"}
          onChange={toggleTheme}
        />
        <label htmlFor="themeBtn">
          <span className="thumb cursor-pointer flex items-center justify-start overflow-hidden absolute">
            ON
          </span>
        </label>
      </div>
    </>
  );
};

export default ThemeToggler;
