import React from 'react';
import {Text, View, Button, Image,ScrollView} from 'react-native';
import GridView from 'react-native-super-grid';

let NewsItem = ({ article }) => (
  article ?
    <GridView
      itemDimension={250}
      items={article}
      renderItem={content => ( <Image style={{alignSelf: 'center', width: 400, height: 300}} source={{uri:content.urlToImage}} />)}
    />
  :
  null
);

export default NewsItem;
