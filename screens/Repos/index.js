import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import seta from '../../assets/img/seta-para-tras.png';
import estrela from '../../assets/img/estrela.png';
import cadeado from '../../assets/img/bloquear.png';
import cadeadoAberto from '../../assets/img/bloqueio-aberto.png';
import setaEsquerda from '../../assets/img/seta-para-tras.png';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Repos({ navigation }) {

    const dispatch = useDispatch();

    const gitData = useSelector(state => state.git);

    useEffect(() => {
        dispatch(GitActions.getReposRequest(gitData.userData.login))
    }, [])


    return (
        <ScrollView style={styles.backGround}>
            <View style={styles.pageTop}>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Image source={setaEsquerda} style={styles.seta} />
                </TouchableOpacity>
                <Text style={[{ marginLeft: 80 }, styles.texto]}>{gitData?.userData?.public_repos} repositórios</Text>
            </View>
            {gitData.reposData && gitData.reposData?.map((item) => (
                <View style={styles.repos}>
                    <View style={styles.viewAmarela}>
                    </View>
                    <View style={{ marginLeft: 18 }}>
                        <Text style={[{ marginBottom: 9 }, styles.texto]}>{item.name}</Text>
                        <Text style={[{ paddingRight: 18, paddingBottom: 14 }, styles.texto]}>{item.description}</Text>
                        <View style={styles.reposInfo}>
                            <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={estrela} style={styles.icons} />
                                    <Text style={styles.texto}>{item.stargazers_count}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginRight: 23 }}>
                                    <Image source={cadeado} style={styles.icons} />
                                    <Image source={cadeadoAberto} style={styles.icons} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}