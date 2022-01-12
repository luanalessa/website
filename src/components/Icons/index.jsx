import React from 'react'
import * as S from './styles'

export default function Icons(){

    return (
        <>
            {/* <S.LineLeft/> */}
            <S.Container>
                <a href="https://www.linkedin.com/in/luanalessa/" rel="noreferrer" target="_blank">
                    <S.Social className='linkedin'></S.Social>
                </a>
                <a href="https://github.com/luanalessa" rel="noreferrer" target="_blank">
                    <S.Social className='instagram'></S.Social>
                </a>
                <a href="https://www.instagram.com/lessalsn/" rel="noreferrer" target="_blank">
                    <S.Social className='github'></S.Social>
                </a>
                <S.LineRight/>
            </S.Container>
        </>
    )
}