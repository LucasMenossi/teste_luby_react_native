import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import logo from '../../assets/img/logotipo-do-github.png';
import seta from '../../assets/img/seta-direita.png';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as GitActions } from '../../store/ducks/git';

export default function Login({ navigation }) {

    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const gitData = useSelector(state => state.git);

    useEffect(() => {
        if (gitData?.userData) {
            navigation.navigate("User");
        }
    }, [gitData?.userData])

    return (
        <View style={styles.backGround}>
            <Image source={logo} style={styles.image} />
            <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#535353" value={input} onChangeText={text => setInput(text)} />
            <TouchableOpacity style={styles.button} onPress={() => dispatch(GitActions.getUserRequest(input))}>
                {gitData?.userLoading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Text style={styles.texto}>ENTRAR</Text>
                        <Image source={seta} style={styles.seta} />
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}