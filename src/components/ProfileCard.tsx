import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProfileCardProps {
  name: string;
  part: string;
  email: string;
  profileImg: string;
}

export default function ProfileCard({
  name,
  part,
  email,
  profileImg,
}: ProfileCardProps) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="bg-[#B9DED1] min-w-[10rem] min-h-[16rem] rounded-xl flex flex-col items-center justify-center shadow-md">
        <div className="relative size-20 flex items-center justify-center">
          <img
            src="/landing/mirror-frame.webp"
            alt="mirror frame"
            className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
          />
          <Avatar className="size-19 absolute z-0">
            <AvatarImage
              src={profileImg}
              className="object-cover object-[center_20%] w-full h-full"
            />
            <AvatarFallback className="bg-[#87D9B9] opacity-80 blur-xl text-white font-bold">
              {name[0]}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-center mt-3 text-center">
          <p className="text-[1.1rem] font-bold text-[#0E4838]">{name}</p>
          <p className="text-[0.8rem] font-semibold text-[#588F80]">{part}</p>
          <p className="text-[0.7rem] font-normal mt-4 text-[#A0BCB1]">
            {email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#B9DED1] min-w-[14rem] min-h-[20rem] rounded-xl flex flex-col items-center justify-center shadow-md">
      <div className="relative size-32">
        <img
          src="/landing/mirror-frame.webp"
          alt="mirror frame"
          className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
        />
        <Avatar className="size-28 absolute top-2 left-2 z-0">
          <AvatarImage
            src={profileImg}
            className="object-cover object-[center_20%] w-full h-full"
          />
          <AvatarFallback className="bg-[#87D9B9] opacity-80 blur-xl text-white font-bold">
            {name[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center mt-6 text-center">
        <p className="text-xl font-bold text-[#0E4838]">{name}</p>
        <p className="text-md font-semibold text-[#588F80]">{part}</p>
        <p className="text-sm font-normal mt-4 text-[#A0BCB1]">{email}</p>
      </div>
    </div>
  );
}
