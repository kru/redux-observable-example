import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';

import Users from '../../components/Users';

class SearchScreen extends Component<{}> {
    handleSearch = username => {
        if (username) {
            return this.props.fetchUserRepos(username);
        }
        this.props.clearTextInput();
        this.props.fetchUserReposFullfilled([]);
    };

    handlePress = () => this.props.sortUserRepos();

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: '15%'
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginBottom: 50
                    }}
                >
                    <TextInput
                        style={{
                            height: 30,
                            width: '80%',
                            borderColor: '#36fbe4',
                            borderWidth: 1,
                            marginLeft: '5%'
                        }}
                        onChangeText={value => this.handleSearch(value)}
                        value={this.props.username}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={{
                            height: 30,
                            borderWidth: 1,
                            borderColor: 'blue',
                            backgroundColor: '#def436'
                        }}
                    >
                        <Button
                            title="sort"
                            onPress={this.handlePress}
                            style={{ fontSize: 30 }}
                            disabled={this.props.userRepos == 0}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={this.props.userRepos.items}
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
                </View>
            </View>
        );
    }
}

const mapStateToProps = () =>
    createStructuredSelector({
        username: selectors.getUsername(),
        userRepoRejected: selectors.getUserReposRejected(),
        userRepos: selectors.getUserRepos()
    });

export default connect(mapStateToProps, actions)(SearchScreen);
