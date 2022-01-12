import React from 'react'
import Icons from '../components/Icons'

import Apresentation from '../components/Apresentation'
import About from '../components/About'
import Trail from '../components/Trail'
import Projects from '../components/Projects'

import Contact from '../components/Contact'




import * as S from './styles'

export default function Home(){

    return (
        <S.Container>
            <Apresentation />
            <About/>
            <Trail/>
            <Projects/>
            <Contact/>
            <Icons />
        </S.Container>
    )
}