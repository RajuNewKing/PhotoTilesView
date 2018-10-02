import React from 'react';
import FeedView from './FeedView';
import menuIcon from './menu512.png';
import styles from './Container.css';

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            photos : [
                {title: "AV1W0937.jpg", id: "29932887417", link: "https://www.flickr.com/photos/les_stills/29932887417/", src: "https://farm2.staticflickr.com/1907/29932887417_6972cc9a9a_n.jpg", bigSrc: "https://farm2.staticflickr.com/1907/29932887417_6972cc9a9a_b.jpg"},
          {title: "_DSF9347.jpg", id: "29932887947", link: "https://www.flickr.com/photos/125395935@N02/29932887947/", src: "https://farm2.staticflickr.com/1951/29932887947_948649942f_n.jpg", bigSrc: "https://farm2.staticflickr.com/1951/29932887947_948649942f_b.jpg"},
          {title: " ", id: "30997098418", link: "https://www.flickr.com/photos/136058623@N06/30997098418/", src: "https://farm2.staticflickr.com/1968/30997098418_f9f8d8e2ed_n.jpg", bigSrc: "https://farm2.staticflickr.com/1968/30997098418_f9f8d8e2ed_b.jpg"},
          {title: "2018-09-23_02-17-12", id: "30997099258", link: "https://www.flickr.com/photos/152722747@N06/30997099258/", src: "https://farm2.staticflickr.com/1921/30997099258_d565327b27_n.jpg", bigSrc: "https://farm2.staticflickr.com/1921/30997099258_d565327b27_b.jpg"},
          {title: "2011-12-31-DSCN2279.JPG", id: "30997099578", link: "https://www.flickr.com/photos/161709423@N02/30997099578/", src: "https://farm2.staticflickr.com/1936/30997099578_0da18f852c_n.jpg", bigSrc: "https://farm2.staticflickr.com/1936/30997099578_0da18f852c_b.jpg"},
          {title: "2017Egypte42", id: "30997100228", link: "https://www.flickr.com/photos/159613215@N08/30997100228/", src: "https://farm2.staticflickr.com/1941/30997100228_e81ee41669_n.jpg", bigSrc: "https://farm2.staticflickr.com/1941/30997100228_e81ee41669_b.jpg"},
          {title: "Gilmore Car Museum 2018", id: "43058131260", link: "https://www.flickr.com/photos/tlucal/43058131260/", src: "https://farm2.staticflickr.com/1973/43058131260_1a0bd86d38_n.jpg", bigSrc: "https://farm2.staticflickr.com/1973/43058131260_1a0bd86d38_b.jpg"},
          {title: "_DSC2422", id: "43058131290", link: "https://www.flickr.com/photos/128667306@N03/43058131290/", src: "https://farm2.staticflickr.com/1960/43058131290_138de3a19a_n.jpg", bigSrc: "https://farm2.staticflickr.com/1960/43058131290_138de3a19a_b.jpg"},
          {title: "Meilleurs Citations De Jalousie : Boredom... https://is.gd/kXkm21 #LaJalousie", id: "43058132580", link: "https://www.flickr.com/photos/155872937@N06/43058132580/", src: "https://farm2.staticflickr.com/1911/43058132580_084afa9e9a_n.jpg", bigSrc: "https://farm2.staticflickr.com/1911/43058132580_084afa9e9a_b.jpg"},
          {title: "Entice", id: "43058132740", link: "https://www.flickr.com/photos/162425064@N05/43058132740/", src: "https://farm2.staticflickr.com/1948/43058132740_d6fb5b5d55_n.jpg", bigSrc: "https://farm2.staticflickr.com/1948/43058132740_d6fb5b5d55_b.jpg"},
          {title: "Denny & Steve", id: "43958874395", link: "https://www.flickr.com/photos/dad/43958874395/", src: "https://farm2.staticflickr.com/1963/43958874395_b67edc50c6_n.jpg", bigSrc: "https://farm2.staticflickr.com/1963/43958874395_b67edc50c6_b.jpg"}
          
              
            ]
        };
    }

    

    render() {
        const {photos} = this.state;
        return (
            <div>
                <div style={{display: 'flex', border: '1px solid grey'}}>
                    <img src={menuIcon} style={{width: '50px', height: '50px', marginTop: '8px'}}/>
                    <h2 style={{textAlign: 'center', marginLeft: '16px'}}>Oracle Admin</h2>
                </div>
                <FeedView photos={photos}/>
            </div>
        );
    }
}

export default Container;