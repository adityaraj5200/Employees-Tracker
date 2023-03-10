import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('db.db');

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Employees VALUES(Name VARCHAR(100) NOT NULL,Email VARCHAR(100) NOT NULL,Occupation VARCHAR(100) NOT NULL,PhoneNumber INTEGER NOT NULL);'
      );
    });
  }, []);
  
  var rows = [];
  for (let i = 1; i < 100; i++){
    rows.push(i);
  }

  return (
    <View style={styles.container} >
      <Text>Employess List</Text>
      <ScrollView>
        {
          rows.map((item) => {
            return (
              <Pressable
                android_ripple={{
                  color: 'red',
                  // borderless: true
                }}
                key={item}
                style={{
                  paddingVertical: 10,
                  marginVertical: 5,
                  // borderColor: 'red', borderWidth: 1,
                  backgroundColor: 'pink',
                }}
              >
                <Text>
                  Employee {item}
                </Text>
              </Pressable>
            )
          })
        }

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red', borderWidth: 1,
    flex: 1,
    paddingHorizontal: 15,
  }
})