import styled from 'styled-components'

import alpha from '../../assets/images/alpha.svg'
import stone from '../../assets/images/stone.svg'
import driven from '../../assets/images/driven.svg'


export const Container = styled.div`
    margin: 0 auto;
    width: 250px;
    height: 60px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    color: white;
`

export const Icon = styled.div`
    width: 80px;
    height: 80px;

    ${({icon}) => 
            icon === 'alpha' &&
        `
        background-image: url(${alpha});
        `
    }

    ${({icon}) => 
            icon === 'stone' &&
        `
        background-image: url(${stone});
        `
    }

    ${({icon}) => 
            icon === 'driven' &&
        `
        background-image: url(${driven});
        `
    }
    background-size: cover;
`

export const Title = styled.div`
    font-weight: bold;
    width: 200px;
    height: 20px;
    margin-top: 10px;
    text-align: center;
`

export const Subtitle = styled.div`
    width: 200px;
    height: 10px;
    margin-top: 10px;

    text-align: center;
    font-size: 14px;    
    opacity: 0.5;
`
export const Date = styled.div`
    width: 200px;
    height: 20px;
    text-align: center;
    font-size: 14px;
    opacity: 0.2;

    margin-top: 10px;
`
export const Description = styled.ul`
    list-style-type: none;
    width: 160px;
    height: 20px;

    text-align: left;
    font-size: 14px;
    opacity: 0.5;

    margin-top: 10px;
`
