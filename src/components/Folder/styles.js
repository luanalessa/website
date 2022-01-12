import styled from 'styled-components'

import folder from '../../assets/icons/folder.svg'



export const Container = styled.div`
    margin: 10px;
    width: 250px;
    height: 250px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    background: #180656;
    border-radius: 10px;
    color: white;
    padding: 20px;

    position:relative;

    cursor: pointer;

    &:hover{
        background: none;
        transition: 0.2s;
    }

`

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${folder});
    background-size: cover;

`

export const Title = styled.div`
    font-weight: bold;
    width: 200px;
    height: 30px;
    margin-top: 10px;
    text-align: left;

`

export const Description = styled.div`
    width: 200px;
    height: 60px;
    text-align: justify;
    font-size: 14px;
    opacity: 0.5;

    margin-top: 10px;
`

export const Tecnologies = styled.div`
    width: 200px;
    height: 30px;

    display: flex;
    align-items: flex-end;
    font-size: 14px;
    opacity: 0.2;
    position:relative;


    right: 0px;

   
    span{
        margin-left: 10px;
        
        &:first-child{
        margin-left: 0px;
        }
    }

    


`