import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import sair from "../../assets/img/sair.png"
import { useSelector, useDispatch } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function User({ navigation }) {

    const gitData = useSelector(state => state.git);
    const dispatch = useDispatch();

    return (
        <ScrollView style={{marginBottom: 60}}>
            { gitData.userLoading ?
                <ActivityIndicator size="large"/>
                :
                <View style={styles.backGround}>
                    <View style={styles.pageTop}>
                        <Text style={styles.textoLogin}>#{gitData?.userData?.login}</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => { dispatch(GitActions.getUserClear()); navigation.navigate("Login"); }}>
                            <Text style={[{ marginRight: 12 }, styles.textoInfo2]}>Sair</Text>
                            <Image source={sair} style={styles.sair} />
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: gitData?.userData?.avatar_url }} style={styles.foto} />

                    <View style={styles.midView}>
                        <View style={styles.viewAmarela}>
                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text style={styles.textoNome}>{(gitData?.userData?.name)?.toUpperCase()}</Text>
                            <Text style={styles.textoInfo}>
                                {gitData?.userData?.email === null ? "Sem e-mail" : gitData?.userData?.email}</Text>
                            <Text style={styles.textoInfo}>{gitData?.userData?.location}</Text>
                        </View>
                    </View>
                    <View style={styles.infoGit}>
                        <TouchableOpacity onPress={() => navigation.navigate("Followers")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.userData?.followers}</Text>
                            <Text style={styles.textoInfo2}>Seguidores</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Following")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.userData?.following}</Text>
                            <Text style={styles.textoInfo2}>Seguindo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Repos")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.userData?.public_repos}</Text>
                            <Text style={styles.textoInfo2}>Repos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.viewAmarela}>
                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text style={styles.textoNome}>BIO</Text>
                            <Text style={[{ marginTop: 12, paddingRight: 18 }, styles.textoInfo]}>{gitData?.userData?.bio}</Text>
                        </View>
                    </View>
                </View>
            }
        </ScrollView>
    )
}