import styled from 'styled-components'

export const Head = styled.div`
    margin: 0 auto;
    width: 1000px;
    height: 60px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
`

export const Menu = styled.ul`
    list-style: none;

    width: 700px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
`

export const Item = styled.ul`
    cursor: pointer;
    color: white;

    &.button {
        padding: 5px 20px;
        color: #F3367E;
        border: 2px solid  #F3367E;
        border-radius: 5px;
        font-weight: bold;
    }

    &:hover{
            color: #F3367E;
            transition: 0.2s;
        }
`
