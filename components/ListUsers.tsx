import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import  firebase  from '../firebaseConfig'


export interface NewRecordProps {
    name: string,
    email: string,
    contact: string,
    gender: string
}

export const ListUser = () => {
   
    const [users, setUsers] = useState([])

    const database = firebase.firestore();
    
    useEffect(() => {
        database.collection("users").onSnapshot((query)=>{
          const listUsers: any = [] 
          query.forEach((doc) => {
            listUsers.push({...doc.data(), id: doc.id})
          })
          setUsers(listUsers)
        })
      }, [])


    return (
        <View style={styles.containerForm}>
            {users.map((users: NewRecordProps) => {
                return (
                    <Text>{users.name}</Text>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    }
});


