import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import enter from "../../assets/img/enter.png"
import seta from "../../assets/img/seta-para-tras.png";
import { useSelector, useDispatch } from 'react-redux';
import { Creators as GitActions } from '../../store/ducks/git';


export default function CheckUser({ navigation }) {
    const gitData = useSelector(state => state.git);
    const dispatch = useDispatch();

    return (
        <View style={styles.backGround}>
            <View style={styles.pageTop}>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Image source={seta} style={styles.enter}/>
                </TouchableOpacity>
                <Text style={styles.texto}>#{gitData?.checkUserData?.login}</Text>
                <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => dispatch(GitActions.getUserRequest(gitData?.checkUserData.login))}>
                    <Text style={[{ marginRight: 12 }, styles.texto]}>Salvar</Text>
                    <Image source={enter} style={styles.enter} />
                </TouchableOpacity>
            </View>
            <Image source={{uri: gitData?.checkUserData?.avatar_url}} style={styles.foto} />

            <View style={styles.midView}>
                <View style={styles.viewAmarela}>
                </View>
                <View style={{ marginLeft: 14 }}>
                    <Text style={styles.texto}>{(gitData?.checkUserData?.name)?.toUpperCase()}</Text>
                    <Text style={styles.texto}>
                        {gitData?.checkUserData?.email === null ? "Sem e-mail" : gitData?.checkUserData?.email}</Text>
                    <Text style={styles.texto}>{gitData?.checkUserData?.location}</Text>
                </View>
            </View>
            <View style={styles.infoGit}>
                <TouchableOpacity onPress={() => navigation.navigate("Followers")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.checkUserData?.followers}</Text>
                    <Text style={styles.texto}>Seguidores</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Following")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.checkUserData?.following}</Text>
                    <Text style={styles.texto}>Seguindo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Repos")}>
                    <Text style={[styles.texto, styles.infoGitText]}>{gitData?.checkUserData?.public_repos}</Text>
                    <Text style={styles.texto}>Repos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.viewAmarela}>
                </View>
                <View style={{ marginLeft: 14 }}>
                    <Text style={styles.texto}>BIO</Text>
                    <Text style={[{ marginTop: 12, paddingRight: 18 }, styles.texto]}>{gitData?.checkUserData?.bio}</Text>
                </View>
            </View>
        </View>
    )
}