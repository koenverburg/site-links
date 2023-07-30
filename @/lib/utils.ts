import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Plausible from "plausible-tracker";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const { trackEvent } = Plausible()
export const handleClick = (label: string, url: string) => () =>
  trackEvent(
    "click",
    {
      props: {
        label,
      },
    },
    {
      url,
    }
  )

