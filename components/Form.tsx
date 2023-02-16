import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import  firebase  from '../firebaseConfig'

const genderOptions = ['Masculino', 'Feminino', 'Não-binário'];

export interface NewRecordProps {
    name: string,
    email: string,
    contact: string,
    gender: string
}

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);



    const database = firebase.firestore();


    const isEmailValidSetState = (email: string) => {
        if (isValidEmail(email)) {
            setEmail(email)
            setErrorEmail(false)
        } else {
            setEmail(email)
            setErrorEmail(true)
        }
    }

    function isValidEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const newRecord: NewRecordProps = {
        name,
        email,
        contact,
        gender
    };
    const addUserFirebaseStore = () => {
        database.collection('users').add(newRecord)
        .then((docRef) => {
          console.log(`User ${newRecord.name} salvo com sucesso com o ID: ${docRef.id}`);
        })
        .catch((error) => {
          console.error(`Erro ao salvar User: ${error}`);
        });
    }
   
    return (
        <View style={styles.containerForm}>
            <Text style={styles.label}>Nome</Text>

            <TextInput
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={isEmailValidSetState}
                style={styles.input}
            />
            {errorEmail ? <Text>email invalido</Text> : null}
            <Text style={styles.label}>Contato</Text>
            <TextInput
                placeholder="Contato"
                value={contact}
                onChangeText={setContact}
                style={styles.input}
            />
            {genderOptions.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => setGender(option)}>
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => {
                return addUserFirebaseStore();
            }}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },
    input: {
        height: 50,
        width: "90%",
        backgroundColor: "#404040",
        color: "#CBCBCB",
        borderRadius: 5,
        marginBottom: 20,
        padding: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});





export default Form;


