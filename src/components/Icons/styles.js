import styled from 'styled-components'

import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'
import github from '../../assets/icons/github.svg'


export const Container = styled.div`
    
    width: 60px;
    /* height: 250px; */
    position: fixed;

    right: 50px;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    align-items: center;

`

export const Social = styled.div`
    width: 30px;
    height: 29px;
    background-size: cover;

    margin-bottom: 30px;

    cursor: pointer;

    &.linkedin{    
        background-image: url(${linkedin});
    }

    &.instagram{    
        background-image: url(${instagram});
    }

    &.github{    
        background-image: url(${github});
    }
`
export const LineRight = styled.div`
    
    width: 3px;
    height: 100px;

    display: inline;

    background: white;
    margin: 0 auto;
`

export const LineLeft = styled.div`
    
    width: 2px;
    height: 100%;


    background: white;
    position: fixed;

    left: 78px;
    bottom: 0;
   
`