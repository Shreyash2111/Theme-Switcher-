import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Themecontext";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  const onChangeBtn = (e) => {
    const status = e.currentTarget.checked;
    if (status) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-screen h-screen  flex flex-col gap-4 py-12 sm:py-0 sm:justify-center items-center ">
        <div className="flex gap-3 justify-center items-center">
          <p className="text-xl sm:text-3xl">Dark Mode</p>

          <FormControlLabel
            control={<Switch />}
            className="h-full"
            checked={themeMode === "dark"}
            onChange={onChangeBtn}
          />
        </div>
        <div className="w-4/5 sm:w-1/2 sm:h-2/3 bg-slate-100 rounded-lg dark:bg-slate-950 flex flex-col gap-3  p-4">
          <img
            src="https://contents.mediadecathlon.com/p1962600/294de5e4093cf3fc92fafdb60f7c1bf4/p1962600.jpg?format=auto&quality=70&f=650x0"
            alt="shirt"
            className=" mx-auto  h-1/2"
          />
          <div className="flex justify-between items-center">
            <p className="text-lg sm:text-2xl dark:text-white">
              Printed T-shirt{" "}
            </p>
            <div className="bg-blue-600 text-white px-2 py-1 rounded-xl">
              $26.00
            </div>
          </div>
          <div className="dark:text-white text-sm sm:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            beatae qui veniam maxime ea at reiciendis odio aut placeat quam ex
            sed minima non vero! Dolores distinctio debitis cupiditate? Maiores.
          </div>
          <button className="bg-blue-700 hover:bg-blue-600 text-lg sm:text-xl text-white font-bold rounded-3xl p-2 w-full">
            BUY NOW
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
