import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import sair from "../../assets/img/sair.png"
import { useSelector, useDispatch } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';

export default function User({ navigation }) {

    const gitData = useSelector(state => state.git);
    const dispatch = useDispatch();

    return (
        <View style={styles.backGround}>
            <View style={styles.pageTop}>
                <Text style={styles.texto}>#{gitData?.userData?.login}</Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {dispatch(GitActions.getUserClear()); navigation.navigate("Login");}}>
                    <Text style={[{ marginRight: 12 }, styles.texto]}>Sair</Text>
                    <Image source={sair} style={styles.sair} />
                </TouchableOpacity>
            </View>
            <Image source={{uri: gitData?.userData?.avatar_url}} style={styles.foto} />

            <View style={styles.midView}>
                <View style={styles.viewAmarela}>
                </View>
                <View style={{ marginLeft: 14 }}>
                    <Text style={styles.texto}>{(gitData?.userData?.name)?.toUpperCase()}</Text>
                    <Text style={styles.texto}>
                        {gitData?.userData?.email === null ? "Sem e-mail" : gitData?.userData?.email}</Text>
                    <Text style={styles.texto}>{gitData?.userData?.location}</Text>
                </View>
            </View>
            <View style={styles.infoGit}>
                <TouchableOpacity onPress={() => navigation.navigate("Followers")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.userData?.followers}</Text>
                    <Text style={styles.texto}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Following")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.userData?.following}</Text>
                    <Text style={styles.texto}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Repos")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.userData?.public_repos}</Text>
                    <Text style={styles.texto}>Repos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.viewAmarela}>
                </View>
                <View style={{ marginLeft: 14 }}>
                    <Text style={styles.texto}>BIO</Text>
                    <Text style={[{ marginTop: 12, paddingRight: 18 }, styles.texto]}>{gitData?.userData?.bio}</Text>
                </View>
            </View>
        </View>
    )
}