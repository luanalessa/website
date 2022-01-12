import React from 'react'
import * as S from './styles'

export default function Folder({title, description, tecnologies}){

    return (
        <S.Container>
            <S.Icon/>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Tecnologies>
                {tecnologies.map(item => 
                    (<span>{item}</span>))
                }
            </S.Tecnologies>
           

        </S.Container>
    )
}