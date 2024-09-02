import Image from "next/image";

function Avatar({ src, width = 24 }) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="ml-2 rounded-full ring-1 ring-secondary-200"
      alt={src}
    />
  );
}
export default Avatar;
