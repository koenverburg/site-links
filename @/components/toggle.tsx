import * as React from "react";
import { darkTheme, IconButton } from "@modulz/design-system";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <IconButton
      variant="ghost"
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";

        document.documentElement.classList.toggle(darkTheme.className);
        document.documentElement.classList.toggle("light-theme");
        document.documentElement.style.setProperty("color-scheme", newTheme);

        // Finally, we still need to let `next-themes` know of the theme change so that it saves it to local storage.
        setTheme(newTheme);
      }}
      aria-label="toggle a light and dark color scheme"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
