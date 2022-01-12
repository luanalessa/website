import React from 'react'

import Header from '../../components/Header'

import {ReactComponent as Planet} from '../../assets/images/planet.svg'
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg'

import * as S from './styles'

export default function Apresentation(){

    return (
        <>
            <Header />
            <S.Content>
                <S.Box>
                    <Planet className='planet' />
                    <S.Hi>Hi, I'm</S.Hi>
                    <S.Name>Lessa</S.Name>
                    <S.Subtitle>I like to build creative things for the web.</S.Subtitle>    
                </S.Box>
                <a href="#AboutTag">   
                    <Arrow className='arrow'/>
                </a>
            </S.Content>
        </>
    )
}