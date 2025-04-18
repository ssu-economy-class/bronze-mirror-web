import CustomImageCard from "@/components/CustomImageCard";
import { useGetImage } from "@/api/get/useGetImage";
import { useState } from "react";
import { CustomPageNation } from "@/components/CustomPagination";

export default function HomePage() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useGetImage(page);

  if (isLoading)
    return (
      <main className="flex flex-col items-center min-w-screen gap-8 py-6 overflow-x-hidden scrollbar-hide">
        <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <CustomImageCard.Skeleton key={i} />
            ))}
        </section>
        <CustomPageNation.Skeleton />
      </main>
    );
  if (isError || !data)
    return (
      <main className="flex flex-col items-center min-w-screen gap-8 py-6 overflow-x-hidden scrollbar-hide">
        <p>관리자에게 문의하세요.</p>
      </main>
    );

  return (
    <main className="flex flex-col items-center min-w-screen gap-8 py-6 overflow-x-hidden scrollbar-hide">
      <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {data.content.length === 0 ? (
          <p>생성된 사진이 없습니다.</p>
        ) : (
          data?.content.map((e) => <CustomImageCard key={e.id} {...e} />)
        )}
      </section>
      <CustomPageNation
        currentPage={data.page}
        totalPages={data.totalPages}
        onPageChange={setPage}
      />
    </main>
  );
}
