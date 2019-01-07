import ImageSlider from 'react-native-image-slider';
import React, {Component} from 'react';

export default class _ImageSlider extends Component {
  render() {
    return (
    <ImageSlider 
    
    autoPlayWithInterval={3000}
    
    images={[
        'https://cdn.cnn.com/cnnnext/dam/assets/190106094307-adam-schiff-sotu-jan-6-super-tease.jpg',
        'https://cdn.cnn.com/cnnnext/dam/assets/190105181341-se-cupp-01052019-super-tease.jpg',
        'http://placeimg.com/640/480/any'
    ]}

    />
  );
  }
}