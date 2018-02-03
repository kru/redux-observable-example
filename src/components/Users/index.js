import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

const Users = ({ data }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    flex: 0.5,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{ uri: data.item.avatar_url }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    flexWrap: 'wrap'
                }}
            >
                <Text style={{ flex: 1 }}>{`Username: ${
                    data.item.login
                }`}</Text>
                <Text style={{ flex: 1 }}>{`Score: ${data.item.score}`}</Text>
                <Text style={{ flex: 1 }}>{`Url: ${data.item.html_url}`}</Text>
            </View>
        </View>
    );
};

export default Users;
