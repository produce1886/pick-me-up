export default function duplicate(Component: JSX.Element, number: number) {
  return Array.from({ length: number }).map(() => Component);
}
