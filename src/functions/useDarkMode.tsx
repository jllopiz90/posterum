import * as React from "react";

export type ThemeMode = 'dark' | 'light';

const toogleColors = (mode: ThemeMode) => {
  document.documentElement.style.setProperty(
    "--main-bg-color",
    mode === 'light' ? "#fff" : "#000"
  );
  document.documentElement.style.setProperty(
    "--main-text-color",
    mode === 'light' ? "#000" : "#fff"
  );
  document.documentElement.style.setProperty(
    "--button-bright",
    mode === 'light' ? "80%" : "120%"
  );
  document.documentElement.style.setProperty(
    "--sky-color",
    mode === 'light' ? "#276779" : "#61dafb"
  );
  document.documentElement.style.setProperty(
    "--shadow-color",
    mode === 'light' ? "#61dafb" : "#fff"
  );
};

export default function useDarkMode() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = React.useState<ThemeMode>(
    () =>
      (window.localStorage.getItem("colorMode") as ThemeMode) ||
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  React.useEffect(() => {
    toogleColors(mode);
    window.localStorage.setItem('colorMode', mode)
  }, [mode]);

  return {mode, setMode};
}
