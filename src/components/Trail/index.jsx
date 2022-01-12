import React from 'react'

import * as S from './styles'
import ExperienceCard from '../ExperienceCard'  

export default function Trail(){

    return (
            <S.Content id="ExperienceTag">
                    <S.Title>My trail on tecnology</S.Title>
                    <ExperienceCard 
                        icon="alpha"
                        title="Alpha Edtech"
                        subtitle="Aspiring Full Stack"
                        date="Fev, 2021 - present" 
                        description={
                            [
                                "HTML, CSS, JavaScript",
                                "React, Bootstrap",
                                "Node.js",
                                "PostgreSQL"
                            ]}
                         />
                    <ExperienceCard 
                        icon="stone"
                        title="Stone Pagamentos"
                        subtitle="Apprentice" 
                        date="Nov, 2021 - present" 
                        description={
                            [
                                ".Net, C#",
                                "React",
                            ]}
                        />
                    <ExperienceCard 
                        icon="driven"
                        title="Driven Education"
                        subtitle="Tutor"
                        date="Dec, 2021 - present" 
                        description={
                            [
                                "HTML, CSS, JavaScript",
                                "React, Bootstrap",
                                "Node.js",
                                "PostgreSQL"
                            ]}
                        />
            
            </S.Content>
    )
}