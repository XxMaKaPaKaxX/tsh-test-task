import React from 'react';
import './Pagination.scss';

const Pagination = ({ changePage, currentPage, totalPages }) => {

    const paginationLinks = [];
    if (totalPages > 6) {
        if ((currentPage === 1) || (currentPage === 2)) {
            paginationLinks.push(1);
            paginationLinks.push(2);
            paginationLinks.push(3);
            paginationLinks.push('...');
            paginationLinks.push(totalPages - 2);
            paginationLinks.push(totalPages - 1);
            paginationLinks.push(totalPages);
        } else if (currentPage >= totalPages - 4) {
            paginationLinks.push('...');
            paginationLinks.push(totalPages - 5);
            paginationLinks.push(totalPages - 4);
            paginationLinks.push(totalPages - 3);

            paginationLinks.push(totalPages - 2);
            paginationLinks.push(totalPages - 1);
            paginationLinks.push(totalPages);
        } else {
            paginationLinks.push(currentPage - 1);
            paginationLinks.push(currentPage);
            paginationLinks.push(currentPage + 1);
            paginationLinks.push('...');
            paginationLinks.push(totalPages - 2);
            paginationLinks.push(totalPages - 1);
            paginationLinks.push(totalPages);
        }
    } else {
        for (let i = 1; i <= totalPages; i++) {
            paginationLinks.push(i);
        }
    }

    const paginationLinksEl = paginationLinks.map((futureEl, id) => {
        if (typeof (futureEl) === 'number') {
            if (futureEl === currentPage) {
                return <p className='pagination__item pagination__item--current-page mx-1  mx-md-2 my-0' key={id} data-topage={futureEl} onClick={changePage}>{futureEl}</p>
            } else {
                return <p className='pagination__item mx-1 mx-md-2 my-0' key={id} data-topage={futureEl} onClick={changePage}>{futureEl}</p>
            }
        } else {
            return <p className='mx-1 mx-md-2 my-0' key={id}>{futureEl}</p>
        }

    });

    return (
        <nav className='pagination d-flex justify-content-around justify-content-md-center align-items-center my-4'>
            <p className={`pagination__item ${currentPage === 1 ? 'pagination__item--disable' : ''} mx-1 mx-md-2 my-0`} data-topage={1} onClick={changePage}>First</p>
            {paginationLinksEl}
            <p className={`pagination__item ${currentPage === totalPages ? 'pagination__item--disable' : ''} mx-1 mx-md-2 my-0`} data-topage={totalPages} onClick={changePage}>Last</p>
        </nav>
    );
}

export default Pagination;