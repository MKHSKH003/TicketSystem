import React from 'react';
import {Text, View} from 'react-native';
import Toaster, { ToastStyles } from 'react-native-toaster';

import LoadButton from '../../containers/news/load-button';
import NewsItem from '../../containers/news/news-item'
import Loading from '../../containers/news/loading';
import LoadingNews from '../../containers/notifications/loading-news'

let NewsFeed = () => (
    <View style={{zIndex: 0}}>
        <LoadingNews />
        <View  style={{zIndex: 0}}> 
          <LoadButton />
          <Loading />
          <NewsItem />
        </View>
     </View>
);
export default NewsFeed;