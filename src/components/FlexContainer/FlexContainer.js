import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlexContainer extends Component {
    
    render() {
        const {flexDirection, justifyContent, alignItems} = this.props;
        const inlineStyles = {
            display: 'flex',
            flexDirection,
            alignItems,
            justifyContent
        }

        return (
            <article style={inlineStyles}>
                {this.props.children}
            </article>
        );
    }
}

FlexContainer.propTypes = {
    flexDirection: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired
}

export default FlexContainer;
