/* TYPES */
interface office {
    name: string,
    description: string,
    adress: string,
    coordinates: number[],
  }

interface scrollAnimation {
    children: React.JSX.Element,
    orientation: 'right' | 'left',
}