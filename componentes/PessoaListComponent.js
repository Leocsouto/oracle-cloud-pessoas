import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { LinearProgress, ListItem } from '@rneui/themed'
import * as pessoaService from '../service/PessoaService'

const PessoaListComponent = () => {
    const [pessoas, setPessoas] = useState([])
    const [refreshing,setRefreshing] = useState(false)

    const updateList = async () =>{
        try{
            const res = await pessoaService.obterLista()
            
            const f1 = (a,b)
            setPessoas(res.data)
        }catch(e) {
            console.log('erro', e)
            ToastAndroid.show("Falha. Tente novamente mais tarde", ToastAndroid.LONG)
    
        }
    }
    const onRefresh = () =>{
        setRefreshing(true)

        setRefreshing(false)
    }
    return (
        <View>
            {
                pessoas.length > 0 ?
                    <>
                        <FlatList
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                            data={pessoas}
                            renderItem={(pessoas) => (
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>
                                            {pessoas.item.nome}
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                            {pessoas.item.hobby}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            )}
                        />
                    </>
                    :
                    <LinearProgress />
            }
        </View>
    )
}

export default PessoaListComponent

const styles = StyleSheet.create({})