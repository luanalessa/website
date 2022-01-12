import styled from 'styled-components'

export const Content = styled.div`
  width: 100vw;
  height: 85vh;
  margin: 0 auto;
 
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: flex-end;

  & .arrow{
    width: 60px;
    height: auto;
 
    cursor: pointer;
  }

`

export const Box = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: center;


  text-align: center;

  & .planet{
    width: 550px;
    height: auto;
    position: absolute;
    bottom: 0px;
    z-index: 2;
  }
`
export const Hi = styled.div`
  width: 100%;

  color: white;
  font-size: 30px;
  font-weight: bold;

  position: relative;
  z-index: 3;
  top: 0px;

`

export const Name = styled.div`
  width: 100%;
  height: 80px;

  color: white;
  font-size: 180px;
  font-weight: bold;
  line-height:160px;
  z-index: 4;
  top: 30px;

`

export const Subtitle = styled.div`
  
  color: white;
  font-size: 22px;
  position: relative;
  top: 90px;



`