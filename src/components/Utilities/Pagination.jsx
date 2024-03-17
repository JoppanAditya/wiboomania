import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import ReactPaginate from "react-paginate";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePageClick = ({ selected }) => {
    if (page >= 1 || page <= lastPage) {
      setPage(selected + 1);
      scrollTop();
    }
  };

  return (
    <>
      <ReactPaginate
        breakLabel={<span className="mx-2">...</span>}
        nextLabel={
          <button
            onClick={() => setPage(page === lastPage ? lastPage : page + 1)}
            className={`flex items-center justify-center hover:text-color-primary transition-all sm:absolute sm:right-0 sm:bottom-4 sm:hover:bg-color-dark-200 h-10 pl-3 sm:pr-1 rounded-md ${
              page === lastPage ? "disabled text-color-light-300 cursor-not-allowed hover:text-color-light-300" : ""
            }`}
          >
            <span className="hidden sm:block">Next</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={lastPage}
        previousLabel={
          <button
            onClick={() => setPage(page == 1 ? page : page - 1)}
            className={`flex items-center justify-center hover:text-color-accent transition-all sm:absolute sm:left-0 sm:bottom-4 sm:hover:bg-color-dark-200 h-10 pr-3 sm:pl-1 rounded-md ${
              page <= 1 ? "disabled text-color-light-300 cursor-not-allowed hover:text-color-light-300" : ""
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:block">Previous</span>
          </button>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center py-4 px-0 sm:px-2 sm:gap-2 gap-64 text-color-light-100 sm:mt-10 relative"
        pageClassName="cursor-pointer sm:hover:bg-color-dark-200 hover:text-color-accent rounded-md h-10 sm:w-10 px-2 hidden sm:flex items-center justify-center transition-all"
        activeClassName="sm:bg-color-primary text-color-primary sm:text-color-dark-300"
        breakClassName="hidden sm:block"
      />

      <div className="sm:hidden text-color-light-100 flex justify-center items-center -m-12">
        <p>
          {page} of <span className="text-color-light-200">{lastPage}</span>
        </p>
      </div>
    </>
  );
};

export default Pagination;
