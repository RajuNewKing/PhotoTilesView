import PropTypes from "prop-types";
import React from "react";
import styles from "./PhotoGrid.css";


class PhotoGrid extends React.Component {
    static propTypes = {
        photos : PropTypes.array /* { src, id, bigSrc}*/,
        columns : PropTypes.number,
        InformationElement : PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            fullScreenImage : null,
			fullScreenImageIndex : null
        }
    }

    render() {
        return (
            <div >
                {this.getGridElements()}
                {/* {this.getFullScreenImage(this.state.fullScreenImage)} */}
            </div>
        );
    }

    getGridElements() {
        const {photos}  = this.props;
        const classNames = this.isShowInfo() ? [styles.imageGridItem, styles.column1] : [styles.imageGridItem];
        const style = this.isShowInfo() ? {} : {width : this.getPercentWidth() + '%'};

        return photos.map((photo, index) => (
            <div className={classNames.join(' ')}
                 style={style}
                 key={photo.id}>
                {this.getImageElement(photo, index)}
            </div>

        ));
    }

    getImageElement = (photo, index) => {
        
        const classNames = this.isShowInfo() ? [styles.imageWrapper, styles.column1Image] : [styles.imageWrapper];
        const style = {backgroundImage : `url(${photo.src})`};

        return (
            <div >
                <div className={classNames.join(' ')}
                     onClick={this.image_clickHandler(photo, index)}
                     style={style}>
					<a href="#">{photo.title}</a>
                </div>
                <div style={{ border: '1px solid black', padding: '4px', fontSize: '12px'}}>{photo.text}</div>

            </div>
        );
    };

    
    image_clickHandler = (photo, index) => () => {
        // console.log('came inside')
        // this.setState({
        //     fullScreenImage : photo.bigSrc,
        //     fullScreenImageIndex : index
        // })
        window.location.href=photo.bigSrc
    };

	
    isShowInfo = () => this.props.columns == 1;
    getPercentWidth = () => 100 / this.props.columns - 1;
    getNextPhotoIndex = currentIndex => this.props.photos.length > currentIndex + 1 ? currentIndex + 1  : 0;
    getPreviousPhotoIndex = currentIndex => currentIndex - 1 >= 0 ? currentIndex - 1  : this.props.photos.length - 1;
    getPhoto = index => this.props.photos.length > index ? this.props.photos[index] : null;
}


export default PhotoGrid