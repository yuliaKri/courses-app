import React from 'react';
import {withRouter} from "react-router-dom";

function Course(props) {

    const { course } = props;
    const id = +props.match.params.courseId;
    let displayedCourse  = course.find(el => el.id === id)


    return (
        <div>
            <div>
                {displayedCourse.name}
                <br/>
                {displayedCourse.description}
                <br/>
                {displayedCourse.price}
                <br/>
                {displayedCourse.date}
            </div>
        </div>
    );
}

export default withRouter(Course);
