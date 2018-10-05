import PropTypes from 'prop-types';
import React from 'react';
import PhotoGrid from './../../../src/components/PhotoGrid';
import styles from './FeedView.css';

class Feed extends React.Component {
    static propTypes = {
        photos : PropTypes.array
    };
    constructor () {
        super ();
        this.state = {
            columns : 6,
            order : null
        }
    }

    render() {
        const { columns } = this.state;
        return (
            <div>
                <PhotoGrid photos={this.props.photos} columns={columns}/>
            </div>
        );
    }

    
}

export default Feed;
