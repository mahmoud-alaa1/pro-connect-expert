import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number } = {}) {
  return (
    <Image src={"/Logo.png"} alt="platform logo" width={size} height={size} />
  );
}
