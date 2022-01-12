import React, {useState} from 'react'

import * as S from './styles'

import { ReactComponent as Ovni} from '../../assets/images/ovni.svg'
import { ReactComponent as Person} from '../../assets/images/person.svg'


export default function Contact(){
    const [name, setName] = useState("");
    const [subject, setSubject ] = useState("");
    const [message, setMessage] = useState("");


    return (
            <S.Content id='ContactTag'>
                    <Ovni className='ovni'/>
                    <Person className='person'/>
                    <S.Form>

                    <S.Title>Contact me</S.Title>
                        <S.Input type='text' placeholder='Name' onChange={ e => setName(e.target.value)}/>
                        <S.Input type='text' placeholder='Email'/>
                        <S.Input type='text' placeholder='Subject' onChange={ e => setSubject(e.target.value)}/>
                        <S.TextArea type='text' placeholder='Message' onChange={ e => setMessage(e.target.value)}/>
                        <S.Button 
                            type='submit' 
                            href={`mailto:luana.lessa@driven.com.br?subject=${subject}&amp;body=Olá,%0D%0A%0D%0A${message}%0D%0A%0D%0AAtenciosamente,%0D%0A${name}`}>Send</S.Button>
                    </S.Form>
                    <S.Floor />
                        
            </S.Content>
    )
}