import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSetRecoilState } from 'recoil';
import { paginationOperaton } from 'types/state';

type FeedProps = {
  totalPage: number;
  currentPage: number;
};

export const FeedPagination = (props: FeedProps) => {
  const setPaginationOperaton = useSetRecoilState(paginationOperaton);

  return (
    <div className='w-full text-center'>
      <ReactPaginate
        initialPage={props.currentPage - 1}
        containerClassName='inline-flex -space-x-px'
        previousLinkClassName='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        pageLinkClassName='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        activeLinkClassName='px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
        nextLinkClassName='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        breakLabel='...'
        nextLabel='>'
        onPageChange={(e) => {
          setPaginationOperaton({
            page: e.selected + 1
          });
        }}
        pageRangeDisplayed={3}
        marginPagesDisplayed={5}
        pageCount={props.totalPage}
        previousLabel='<'
        renderOnZeroPageCount={() => {}}
      />
    </div>
  );
};
