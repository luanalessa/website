import styled from 'styled-components'

import pic from '../../assets/images/me.png'
import hover from '../../assets/images/me-hover.png'


export const Content = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
 
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

`

export const Description = styled.div`
  width: 40%;
  height: auto;
  position: relative;

  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
  align-items: center;


  text-align: center;



`
export const Figure = styled.div`
  width: 40%;
  height: auto;
  
  display: flex;
  flex-wrap: wrap;
  justify-content:flex-end;
  align-items: center;

`

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;

`

export const Legend = styled.div`
  width: 95%;

  font-size: 16px;
  text-align: justify;

  margin-top: 30px;

  p{
    margin-top: 10px;
  }
`

export const Picture = styled.img`
  width: 324px;
  height: 321px;
  
  background-image: url(${hover});
  background-size: cover;
  border-radius: 5px;

  margin-top: 70px;

  transition: 0.4s;

  &:hover{
    background-image: url(${pic});

  }

`