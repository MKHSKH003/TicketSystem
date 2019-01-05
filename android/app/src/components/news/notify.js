import React from 'react';
import {Text, View} from 'react-native';
import Toaster, { ToastStyles } from 'react-native-toaster';

let Notify = ({ received, error }) => (
    received ? 
        <Toaster message={  { text: 'News loaded successfully',styles: ToastStyles.success }}  />
    :
    error ? 
        <Toaster message={  { text: 'Failed to load news',styles: ToastStyles.error }}  />
    :
    null
);

export default Notify;