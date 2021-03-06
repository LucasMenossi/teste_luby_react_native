import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import setaDireita from '../../assets/img/seta-direita-branca.png'
import setaEsquerda from '../../assets/img/seta-para-tras.png';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';
import { ScrollView } from 'react-native-gesture-handler';

export default function Following({ navigation }) {

    const dispatch = useDispatch();

    const gitData = useSelector(state => state.git);

    useEffect(() => {
        dispatch(GitActions.getFollowingRequest(gitData?.userData?.login))
    }, [gitData.userData])

    return (
        <View style={{paddingBottom: 130}}>
            <View style={styles.pageTop}>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Image source={setaEsquerda} style={styles.seta} />
                </TouchableOpacity>
                <Text style={[{ marginLeft: 80 }, styles.textoFollowing]}>Seguindo {gitData?.userData?.following}</Text>
            </View>
            <ScrollView style={styles.backGround}>
                {gitData?.followingLoading ?
                    <ActivityIndicator />
                    :
                    gitData.followingData && gitData.followingData?.map((item) => (
                        <TouchableOpacity style={styles.midView} onPress={() => { dispatch(GitActions.getCheckUserRequest(item.login)); navigation.navigate("CheckUser"); }}>
                            <View style={styles.viewAmarela} />
                            <Image source={{ uri: item.avatar_url }} style={styles.foto} />
                            <Text style={[styles.textoNome, styles.nome, { marginRight: 90 }]}>#{item.login}</Text>
                            <View style={styles.arrumar}>
                                <Image source={setaDireita} style={[styles.seta, styles.nome]} />
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}