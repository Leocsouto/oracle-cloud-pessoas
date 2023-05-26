import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React,{useState} from 'react'
import { Button, Card, Input } from '@rneui/themed'
import * as pessoaService from '../service/PessoaService'

const PessoaAddComponent = ({ navigation }) => {
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [hobby,setHobby] = useState('');
  
  const addPessoa = async () => {
    try{
        const res = await pessoaService.cadastrarPessoa({nome: name, idade: idade, hobby: hobby})
        console.log(res)
        ToastAndroid.show("Pessoa cadastrada com sucesso", ToastAndroid.LONG)
    }catch(e) {
        console.log('erro', e)
        ToastAndroid.show("Falha. Tente novamente mais tarde", ToastAndroid.LONG)

    }
  }
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title>
          CADASTRO DE PESSOA
        </Card.Title>
        <Card.Divider />
        <Input
          placeholder='Digite o nome'
          leftIcon={{ type: 'font-awesome', name: 'user' }}
          style = {styles.textInput}
        onChangeText={(nomeDigitado)=>setNome(nomeDigitado)}
        />
        <Input
          placeholder='Digite a idade'
          leftIcon={{ type: 'font-awesome', name: 'info' }}
          style = {styles.textInput}
          onChangeText={(idadeDigitado)=>setIdade(idadeDigitado)}
        />
        <Input
          placeholder='Digite o hobby'
          leftIcon={{ type: 'font-awesome', name: 'heart' }}
          style = {styles.textInput}
          onChangeText={(hobbyDigitado)=>setHobby(hobbyDigitado)}
        />
        <Button
          title='OK'
          onPress={addPessoa}
          // buttonStyle={styles.Button}
        />
      </Card>

    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 8
  },
  textInput:{
    textAlign:'center',
    margin:0,
    padding:0
  }

})