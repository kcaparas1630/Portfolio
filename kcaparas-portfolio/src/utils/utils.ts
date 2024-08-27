export default function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
