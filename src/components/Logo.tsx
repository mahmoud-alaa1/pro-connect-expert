import Image from "next/image";
import logo from '../../public/Logo.webp'
export default function Logo({ size = 40 }: { size?: number } = {}) {
  return (
    <Image src={logo} alt="platform logo" width={size} height={size} />
  );
}
