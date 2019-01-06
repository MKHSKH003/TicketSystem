import React from 'react';
import { View} from 'react-native';
import NewsFeed from '../news/news-feed';
import LoginScreen from '../../containers/login/login';


class LoginToNews extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
          const {isLoggedIn} = this.props;
         return (
             isLoggedIn?
             <NewsFeed />
             :<LoginScreen />
         );
         
    }
}
export default LoginToNews;