import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="absolute flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image alt="logo" src="/assets/logo.png" width={200} height={200} />
        <h1 className="font-extrabold text-center">
          Welcome to React Hook Form Tutorial!!
        </h1>
      </div>
    </div>
  );
}
