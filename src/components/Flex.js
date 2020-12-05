import React from 'react';
import PropTypes from "prop-types";

const Flex = props => {
    const { className, children } = props;
    return (
        <div className={`flex ${className}`} >
            {children}
        </div>
    );
};

Flex.propTypes = {
    className: PropTypes.string
};

export default Flex;
