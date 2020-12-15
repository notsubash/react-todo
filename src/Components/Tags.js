import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({setStatus}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <div className="tags-container">
            <button
                onClick = {statusHandler}
                value = "all"
                autoFocus
                >
                All
            </button>
            <button
                onClick = {statusHandler}
                value = "completed"
                >
                Completed
            </button>
            <button
                onClick = {statusHandler}
                value = "incompleted"
                >
                Incompleted
            </button>
        </div>
    )

}

export default Tags;

Tags.propTypes = {
    statusHandler: PropTypes.func
}