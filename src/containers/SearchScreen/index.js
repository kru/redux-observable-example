import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';

class SearchScreen extends Component<{}> {
    handlePress = username => this.props.fetchUserRepos(username);

    _keyExtractor = (item, index) => item.id;

    render() {
        console.log('REPOS', this.props.userRepos);
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: '15%'
                }}
            >
                <TextInput
                    style={{
                        height: 20,
                        borderColor: '#36fbe4',
                        borderWidth: 1
                    }}
                    onChangeText={value => this.handlePress(value)}
                    value={this.props.fieldValue}
                    autoCapitalize="none"
                />
                {/* <View>
                    <FlatList
                        data={this.props.users}
                        renderItem={item => <Users data={item} />}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={() => (
                            <View
                                style={{
                                    height: 1,
                                    width: '100%',
                                    backgroundColor: '#CED0CE',
                                    marginLeft: '5%',
                                    marginTop: '2%',
                                    marginBottom: '5%'
                                }}
                            />
                        )}
                    />
                </View> */}
            </View>
        );
    }
}

const mapStateToProps = () =>
    createStructuredSelector({
        fieldValue: selectors.getInputValue(),
        userRepoRejected: selectors.getUserReposRejected(),
        userRepos: selectors.getUserRepos()
    });

export default connect(mapStateToProps, actions)(SearchScreen);
