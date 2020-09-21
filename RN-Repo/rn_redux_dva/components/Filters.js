import React from 'react';
import {
    View
}
from 'react-native';
import FilterLink from '../components/FilterLink';
import {VisibilityFilters} from '../globle'

export default class Filters extends React.Component {
    render() {
        return (
            <View style = {{flexDirection: 'row' ,padding:20,justifyContent: 'space-around',alignItems: 'center' ,marginTop:20}}>
                <FilterLink visibleFilter = {VisibilityFilters.SHOW_ALL} title = "SHOW_ALL"/>
                <FilterLink visibleFilter = {VisibilityFilters.SHOW_COMPLETED}  title = "SHOW_COMPLETED"/>
                <FilterLink visibleFilter = {VisibilityFilters.SHOW_ACTIVE}  title = "SHOW_ACTIVE"/>
            </View>
        )
    }
}