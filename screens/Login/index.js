import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import logo from '../../assets/img/logotipo-do-github.png';
import seta from '../../assets/img/seta-direita.png';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as GitActions } from '../../store/ducks/git';

export default function Login({ navigation }) {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const gitData = useSelector(state => state.git);

    useEffect(() => {
        if (gitData?.userData) {
            navigation.navigate("User");
        }
        return () => {
            setInput("")
        }
    }, [gitData?.userData])

    return (
        <View style={styles.backGround}>
            <Image source={logo} style={styles.image} />
            <View style={styles.input}>
                <TextInput placeholder="Usuário" placeholderTextColor="#535353" value={input} onChangeText={text => setInput(text)} style={[{ flex: 1 }, styles.textoInput]} />
                {error && <Text style={ styles.textoError }>Campo obrigatório</Text>}
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                if (input !== "") {
                    dispatch(GitActions.getUserRequest(input))
                    setError(false)
                } else {
                    setError(true)
                }
            }}>
                {gitData?.userLoading ?
                    <ActivityIndicator />
                    :
                    <View style={styles.button}>
                        <Text style={styles.texto}>ENTRAR</Text>
                        <Image source={seta} style={styles.seta} />
                    </View>
                }
            </TouchableOpacity>
        </View>
    )
}