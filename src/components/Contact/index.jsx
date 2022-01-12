import React from 'react'

import * as S from './styles'

import { ReactComponent as Ovni} from '../../assets/images/ovni.svg'
import { ReactComponent as Person} from '../../assets/images/person.svg'


export default function Contact(){
 // incrementally scroll up 100px
window.scrollBy({ top: -100, behavior: 'smooth' });

// scroll to the top
window.scroll({ top: 0, behavior: 'smooth' });



    return (
            <S.Content id='ContactTag'>
                    <Ovni className='ovni'/>
                    <Person className='person'/>
                    <S.Form>

                    <S.Title>Contact me</S.Title>
                        <S.Input type='text' placeholder='Name'/>
                        <S.Input type='text' placeholder='Email'/>
                        <S.Input type='text' placeholder='Subject'/>
                        <S.TextArea type='text' placeholder='Message'/>
                        <S.Button type='submit'>Send</S.Button>
                    </S.Form>
                    <S.Floor />
                        
            </S.Content>
    )
}