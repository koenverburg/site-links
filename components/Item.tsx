import { Platform } from "@/lib/types"
import { handleClick } from "@/lib/utils"
import { mapPlatformToColor } from "../data"
// import { Icons } from "./Icons"

type Props = {
  platform: Platform 
}

function suffixIcon(status: 'Live' | 'Coming Soon') {
  if (!status) return ''

  if (status === 'Live') {
    return '🚀' 
  } else if (status === 'Coming Soon') {
    return '🚧'
  } 

  return ''
}

//<Icons name={platform.label} />

export function Item({
  platform,
}: Props) {
  const fillColor = mapPlatformToColor(platform.label.toLowerCase()) 
  const statusIcon = suffixIcon(platform.status)

  return (
    <li key={platform.label} className="mb-4">
      <span className={`block text-center`}>
        <a
          href={platform.href}
          rel="noreferrer"
          target="_blank"
          onClick={handleClick(platform.label, platform.href)}
          className={`px-4 py-2 block font-semibold rounded-full ${fillColor}`}
        >
          {' '}{platform.label}{statusIcon}
          {platform.perk && ' - '}
          {platform.perk && platform.perk}
        </a>
      </span>
      {!platform.description ? null : (
        <p className={`text-center text-gray-500`}>{platform.description}</p>
      )}
    </li>
  );
}
