import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface CustomPageNationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CustomPageNation({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPageNationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* 이전 버튼 */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
            className="hover:bg-gray-300"
          />
        </PaginationItem>

        {/* 페이지 번호 버튼 */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => onPageChange(i)}
              className={`
                border-none
                  hover:bg-gray-300
                  ${i === currentPage ? "bg-black text-white" : ""}
                `}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 다음 버튼 */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              onPageChange(Math.min(currentPage + 1, totalPages - 1))
            }
            className="hover:bg-gray-300"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

CustomPageNation.Skeleton = () => {
  return <Skeleton className="h-12 w-80" />;
};
