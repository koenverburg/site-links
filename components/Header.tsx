import { Menu } from "./Menu";
import { ModeToggle } from "./ModeToggle";
import { WordLogo } from "./WordLogo";

export function Header() {
  return (
    <div className="py-2 flex items-center justify-between">
      <WordLogo />
      <div className="justify-items-end items-center">
        <ModeToggle/>
        <span className="px-1"/>
        {/* <Menu /> */}
      </div>
    </div>
  )
}
