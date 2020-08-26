import React from 'react';
import {StyleSheet,SafeAreaView,View} from 'react-native';
import PropTypes from 'prop-types';

import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar'

export default class Comment extends React.Component {

    static propTypes = {

    };

    static defaultProps= { 

    };

    render() {

        const {style, onClose, onSubmitComment,comments} = this.props;

        return (

            <SafeAreaView  style = {style}>
                <NavigationBar
                    title = "Comments"
                    leftText = "Close"
                    onPressLeftText = {onClose}/>
                <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
                <CommentList items={comments} />
            </SafeAreaView>

        );
    }

}

const styles = StyleSheet.create({

})