import * as S from './styles'

export default function Header(){

    return (
        <S.Head>
            <S.Menu>
                <a href="#AboutTag">   
                    <S.Item>About</S.Item>
                </a>
                <a href="#ExperienceTag">
                    <S.Item>Experience</S.Item>
                </a>
                <a href="#ProjectsTag">
                    <S.Item>Projects</S.Item>
                </a>
                <a href="#ContactTag">
                    <S.Item>Contact</S.Item>
                </a>

            </S.Menu>
        </S.Head>
    )
}