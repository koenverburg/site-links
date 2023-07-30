
type Props = {
  name: string
}


export function Icons({ name}: Props) {
  switch(name.toLowerCase()) {
    case 'twitter':
      return ''
    default:
      return ''
  }
}
