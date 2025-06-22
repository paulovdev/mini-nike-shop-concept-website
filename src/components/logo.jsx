import Image from "next/image";

const Logo = () => {
  return (
    <div className="size-full p-10  flex items-center justify-center max-lg:p-5">
      <Image
        src={"/nike-logo.png"}
        width={1000}
        height={1000}
        alt=""
        className="w-[80px] h-[25px]"
      />
      {/*  <h1 className="text-t text-[38px] font-bold italic">
        NIKE <span className="text-[14px]">®</span>
      </h1> */}
    </div>
  );
};

export default Logo;
