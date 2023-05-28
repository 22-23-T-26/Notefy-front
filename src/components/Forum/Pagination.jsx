import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import "./Forum.css";
const PageNumber = ({ active, children, onClick, number }) => (
    <div className={active ? "number-with-circle" : "number-with-circle-transparent"}
        style={{
            cursor: "pointer"
        }}
        onClick={onClick?.bind(this, number)}>
        {number}
    </div >
);
function Pagination({ totalPages, number, onClick, ...props }) {
    let items = [];
    let currentPage = props?.pageable?.pageNumber + 1;


    const startPage = Math.max(currentPage - 5, 1);
    const endPage = Math.min(currentPage + 5, totalPages);

    if (currentPage > 1) {
        items.push(
            <div className="number-with-circle-transparent" key={`pageprev`} onClick={onClick?.bind(this, currentPage - 1)} style={{
                cursor: "pointer"
            }}>
                &lt;
            </div>
        );
    }

    if (startPage > 1) {
        items.push(
            <PageNumber onClick={() => onClick(1)} number={1} key={`page${1}`} />,
            <span key="morenext">...</span>
        );
    }

    for (let number = startPage; number <= endPage; number++) {
        items.push(
            <PageNumber active={number === currentPage} number={number} onClick={onClick} key={`page${number}`} />
        );
    }

    if (endPage < totalPages) {
        items.push(
            <span key={"moreprev"}>...</span>,
            <PageNumber onClick={() => onClick(totalPages)} key={`page${totalPages}`} />
        );
    }


    if (currentPage < totalPages) {
        items.push(
            <div className="number-with-circle-transparent" key="next" onClick={onClick?.bind(this, currentPage + 1)} style={{
                cursor: "pointer"
            }}>
                &gt;
            </div>
        );
    }

    return (
        <BootstrapPagination className="justify-content-center mt-2">{items}</BootstrapPagination>
    );
}

export default Pagination;
