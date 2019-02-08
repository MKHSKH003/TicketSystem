import React from 'react';
import Toaster, { ToastStyles } from 'react-native-toaster';

let LoadingNews = ({ received, error }) => (
    received==true ? 
        <Toaster message={  { text: 'News loaded successfully',styles: ToastStyles.success }}  />
    :
    error ? 
        <Toaster message={  { text: 'Failed to load news',styles: ToastStyles.error }}  />
    :
    null
);

export default LoadingNews;