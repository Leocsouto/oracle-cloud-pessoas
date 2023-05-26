import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PessoaListComponent from '../componentes/PessoaListComponent'

const PessoaListTela = () => {
  return (
    <PessoaListComponent navigation={navigation} />
  )
}

export default PessoaListTela

const styles = StyleSheet.create({})