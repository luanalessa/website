import React from 'react'

import * as S from './styles'
import Folder from '../Folder'  

const projects = {
    portfolio: {
        name:'Portfolio',
        url:'https://github.com/luanalessa/resume',
        description: 'A interactive workspace as personal portfolio.',
        tecnologies:['React'],
    },
    alphaflix: {
        name:'Alphaflix',
        url:'https://github.com/luanalessa/alphaflix-frontend',
        description: 'Mock film rental system.',
        tecnologies:['React','PostgreSQL'],
    },
    eventin: {
        name:'Eventin',
        url: 'https://github.com/luanalessa/eventin-frontend',
        description: 'Application to managing events using QR Code validation.',
        tecnologies:['React','Axios'],
    },
    animalandia: {
        name:'Animalandia',
        url: 'https://github.com/luanalessa/Animalandia',
        description: 'Drag and drop game to help children with object recognition.',
        tecnologies:['HTML','CSS', 'Javascript'],
    },
    genius: {
        name:'Genius 1.0',
        url: 'https://github.com/luanalessa/genius-challenge',
        description: 'Develop a web version of the classic Simon game, released in Brazil as Genius.',
        tecnologies:['HTML','CSS', 'Javascript'],
    },
    githubexplorer: {
        name:'Github Explorer',
        url: 'https://github.com/luanalessa/githubexplorer-edtech',
        description: 'An application to explore github repositories.',
        tecnologies:['React'],
    }
}

export default function Projects(){

    return (
            <S.Content id='ProjectsTag'>
                    <S.Title>What I have done</S.Title>
                    <a href='https://github.com/luanalessa?tab=repositories'  rel="noreferrer" target='_blank'>
                        <S.More>see all repositories</S.More>
                    </a>
                  
                    <S.Box>
                    {
                        Object.values(projects).map(p => 
                            <a href={p.url} rel="noreferrer" target="_blank">
                                <Folder 
                                    title={p.name}
                                    description={p.description}
                                    tecnologies={p.tecnologies}
                                    />
                            </a>
                        )
                    }  
                    </S.Box>
          

            </S.Content>
    )
}