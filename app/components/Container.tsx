'use client';

interface ContainerProps {
  children: React.ReactNode
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
        max-w-[1320px]
        mx-auto
        xl:px-0 
        md:px-0
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
   );
}
 
export default Container;
