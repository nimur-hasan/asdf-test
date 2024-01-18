'use client';

import Image from "next/image";
import Placeholder from '@/app/theme/icons/placeholderAvater.svg'

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={Placeholder}
    />
  );
}
 
export default Avatar;