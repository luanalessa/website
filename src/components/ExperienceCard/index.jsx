import React from 'react'
import * as S from './styles'

export default function Header({icon, title, subtitle, date, description}){

    return (
        <S.Container>
            <S.Icon icon={icon}/>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.Date>{date}</S.Date>
            <S.Description>
                {description.map( experiense => <ul>{experiense}</ul>)}
            </S.Description>

        </S.Container>
    )
}