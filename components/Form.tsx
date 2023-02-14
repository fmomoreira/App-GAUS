import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const genderOptions = ['Masculino', 'Feminino', 'Não-binário'];

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const handleSubmit = () => {
        console.log('Nome: ', name);
        console.log('E-mail: ', email);
        console.log('Contato: ', contact);
        console.log('Gênero: ', gender);
    }

    const isEmailValidSetState = (email: string) => {
        if(isValidEmail(email)){
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
            <TouchableOpacity onPress={handleSubmit}>
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
        paddingHorizontal: 16,
        backgroundColor: '#f2f2f2',

        borderRadius: 8,
        fontSize: 16,
        color: '#333',
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});





export default Form;


