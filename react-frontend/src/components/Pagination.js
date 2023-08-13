import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Pagination({page, items, totalItems, totalPages, pageChanged}) {

    const [pageNumbers, setPageNumbers] = useState([]);

    Pagination.propTypes = {
        page: PropTypes.number.isRequired,
        items: PropTypes.number.isRequired,
        totalItems: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        pageChanged: PropTypes.func.isRequired,
    };

    useEffect(()=>{
        let pages = [];
        //Close to 1
        if(page<4) {
            for(let i=1; i<=(totalPages<3? totalPages: 3); i++)
                pages.push(<button type="button" key={i} className={i===page? "btn pagination active": "btn pagination"} onClick={()=>pageChanged(i)}>{i}</button>);
        //Close to last page
        } else if (page>totalPages-3) {
            for(let i=totalPages-2; i<=totalPages; i++)
                pages.push(<button type="button" key={i} className={i===page? "btn pagination active": "btn pagination"} onClick={()=>pageChanged(i)}>{i}</button>);
        }
        //In the middle
        else {
            for(let i=page-2; i<=page+2; i++)
                pages.push(<button type="button" key={i} className={i===page? "btn pagination active": "btn pagination"} onClick={()=>pageChanged(i)}>{i}</button>);
        }
        setPageNumbers(pages);
    }, [page, items, totalItems, totalPages, pageChanged])

    return <div>
        <div className="flex justify-between items-center">
            <div className="text-gray-500 text-xs sm:text-sm">Showing {items} of {totalItems} tasks</div>
            {totalPages!==1?
                <div className="pagination text-xs sm:text-sm">
                    {page <= 3? null: <button type="button" className="btn pagination" onClick={()=>pageChanged(1)}>First</button>}
                    {page <= 1? null: <button type="button" className="btn pagination" onClick={()=>pageChanged(page-1)}>Prev</button>}
                    {pageNumbers}
                    {page >= totalPages? null: <button type="button" className="btn pagination" onClick={()=>pageChanged(page+1)}>Next</button>}
                    {page >= totalPages-2? null: <button type="button" className="btn pagination" onClick={()=>pageChanged(totalPages)}>Last</button>}
                </div>
            :
            <div className="text-gray-500 text-sm">No other pages</div>
            }
        </div>
    </div>
}

export default Pagination;