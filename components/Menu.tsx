import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/lib/components/ui/dropdown-menu"

import { Button } from "@/lib/components/ui/button"


import {
  HamburgerMenuIcon,
  ExternalLinkIcon
} from '@radix-ui/react-icons';
import Link from "next/link";

export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Socials</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={'#'}>Other</Link>
            <DropdownMenuShortcut><ExternalLinkIcon /></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}