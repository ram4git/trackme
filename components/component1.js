import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
    action1
} from "./../action/action";
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import reducer1 from "../reducer/reducer";

const Component1 = (props) => {
        return (
            <View>
                <Text>{ props.number }</Text>
            </View>
        )
}

function mapStateToProps(state, props) {
    return {
        number: state.reducer1.thisIsDefault
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        action1
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
