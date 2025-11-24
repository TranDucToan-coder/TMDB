import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination"

interface PaginationProps {
  page: number
  setPage: (page: number) => void
  totalPages?: number
}

export function RenderPagination({ page, setPage, totalPages }: PaginationProps) {
  const maxVisible = 3
  totalPages = 243;
  const startPage = Math.max(1, page - 1)
  const endPage = Math.min(totalPages, startPage + maxVisible - 1)

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <Pagination className="w-full mb-8 p-5 sm:w-1/2">
      <PaginationContent className="w-full flex justify-around">
        <PaginationItem>
          <PaginationPrevious
            size={20}
            href="#"
            onClick={(e) => { e.preventDefault(); handlePrev(); }}
          />
        </PaginationItem>
        {startPage > 1 && (
          <>
            <PaginationItem className="w-3 h-4 border p-5 flex justify-center active:border-amber-200"
            >
              <PaginationLink size={20} href="#" onClick={(e) => { e.preventDefault(); setPage(1) }}>
                1
              </PaginationLink>
            </PaginationItem>
            {startPage > 2 && <PaginationEllipsis />}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
          const p = startPage + i
          return (
            <PaginationItem key={p} className="w-3 h-4 border p-5 flex justify-center active:border-amber-200">
              <PaginationLink
                size={20}
                href="#"
                isActive={p === page}
                onClick={(e) => { e.preventDefault(); setPage(p); }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <PaginationEllipsis />}
            <PaginationItem className="w-3 h-4 border p-5 flex justify-center active:border-amber-200">
              <PaginationLink size={20} href="#" onClick={(e) => { e.preventDefault(); setPage(totalPages); }}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            size={20}
            href="#"
            onClick={(e) => { e.preventDefault(); handleNext(); }}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
