import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';

import Users from '../../components/Users';

class MainScreen extends Component<{}> {
    handlePress = () => this.props.fetchUsers();

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: '15%'
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#36dfeb',
                        marginBottom: '5%'
                    }}
                >
                    <Button
                        title="Show me Github Users!"
                        onPress={this.handlePress}
                    />
                </TouchableOpacity>
                <View>
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
                </View>
            </View>
        );
    }
}

const mapStateToProps = () =>
    createStructuredSelector({
        users: selectors.getUserFetchFulfilled()
    });

export default connect(mapStateToProps, actions)(MainScreen);
