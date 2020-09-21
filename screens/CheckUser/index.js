import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import enter from "../../assets/img/enter.png"
import seta from "../../assets/img/seta-para-tras.png";
import { useSelector, useDispatch } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';
import { ScrollView } from 'react-native-gesture-handler';


export default function CheckUser({ navigation }) {
    const gitData = useSelector(state => state.git);
    const dispatch = useDispatch();

    return (
        <ScrollView style={{marginBottom: 60}}>
            { gitData.checkUserLoading ?
                <ActivityIndicator />
                :
                <View style={styles.backGround}>
                    <View style={styles.pageTop}>
                        <TouchableOpacity onPress={() => navigation.navigate("User")}>
                            <Image source={seta} style={styles.enter} />
                        </TouchableOpacity>
                        <Text style={styles.textoLogin}>#{gitData?.checkUserData?.login}</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {dispatch(GitActions.getUserRequest(gitData?.checkUserData.login)); navigation.navigate("User")}}>
                            <Text style={[{ marginRight: 8 }, styles.textoInfo]}>Salvar</Text>
                            <Image source={enter} style={styles.enter} />
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: gitData?.checkUserData?.avatar_url }} style={styles.foto} />

                    <View style={styles.midView}>
                        <View style={styles.viewAmarela}>
                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text style={styles.textoNome}>{(gitData?.checkUserData?.name)?.toUpperCase()}</Text>
                            <Text style={styles.textoInfo}>
                                {gitData?.checkUserData?.email === null ? "Sem e-mail" : gitData?.checkUserData?.email}</Text>
                            <Text style={styles.textoInfo}>{gitData?.checkUserData?.location}</Text>
                        </View>
                    </View>
                    <View style={styles.infoGit}>
                        <TouchableOpacity onPress={() => navigation.navigate("Followers")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.checkUserData?.followers}</Text>
                            <Text style={styles.textoInfo2}>Seguidores</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Following")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.checkUserData?.following}</Text>
                            <Text style={styles.textoInfo2}>Seguindo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Repos")}>
                            <Text style={[styles.textoNumero, styles.infoGitText]}>{gitData?.checkUserData?.public_repos}</Text>
                            <Text style={styles.textoInfo2}>Repos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.viewAmarela}>
                        </View>
                        <View style={{ marginLeft: 14 }}>
                            <Text style={styles.textoNome}>BIO</Text>
                            <Text style={[{ marginTop: 12, paddingRight: 18 }, styles.textoInfo]}>{gitData?.checkUserData?.bio}</Text>
                        </View>
                    </View>
                </View>
            }
        </ScrollView>
    )
}