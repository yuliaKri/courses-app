import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {withRouter} from "react-router-dom";

function Home(props) {
    const { courses } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const n = 2;
    const history = useHistory();

    return (

        <div >
            {courses
                .filter((el,i)=> i >= (currentPage * n - n) && i <= (currentPage * n) - n + (n - 1) )
                .map(el=>
                    <Link key={el.id} className="course" to={`/courses/${el.id}`}>
                        <div className="course-img">
                            <img src={el.image} />
                        </div>
                        <div className="course-description">
                            <div
                                className="course-name">{el.name.toUpperCase()}
                            </div>
                        </div>
                     </Link>
            )}

            <button onClick={()=>{setCurrentPage(prev=>prev-1)}} disabled={currentPage === 1}>
                back
            </button>
            {currentPage}({Math.ceil(props.courses.length/2)})
            <button onClick={()=>{setCurrentPage(prev=>prev+1)}} disabled={currentPage === Math.ceil(props.courses.length/2)}>
                next
            </button>
        </div>
    );
}

export default withRouter(Home);
