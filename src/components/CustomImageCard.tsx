import { ContentType } from "@/api/get/useGetImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function CustomImageCard(content: ContentType) {
  return (
    <div className="flex flex-col w-48 h-60 p-2 bg-black rounded-lg shadow-md justify-between hover:brightness-75">
      <img
        src={content.url}
        alt="이미지 로드에 실패했습니다."
        className="w-44 h-44 object-cover rounded-md"
      />
      <div className="flex flex-row gap-2 mb-1">
        <Avatar className="size-9">
          <AvatarImage src={content.profileImage} alt="@shadcn" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <div className="text-left text-white">
          <p className="text-sm font-semibold">{content.nickname}</p>
          <p className="text-xs text-white">{content.date}</p>
        </div>
      </div>
    </div>
  );
}

CustomImageCard.Skeleton = () => {
  return <Skeleton className="w-48 h-60" />;
};
