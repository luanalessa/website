import styled from 'styled-components'

import floor from '../../assets/images/floor.png'

export const Content = styled.div`
  width: 100%;
  height: 100vh;
 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  color: white;
 
  background-position:bottom;
  .ovni{
    width: 400px;
    height: 500px;
    position: relative;

    z-index:1;
    top: 100px;
    right: 40px;

  }

  .person{
    width: 40px;
    height: 80px;
    position: relative;
    cursor: pointer;

    z-index:2;

    top: 400px;
    right: 255px;
  
   
  }

  .up{
    &:hover .person{
      animation: abduction 3s ;
    }
  }
    

    @keyframes abduction {
      from{
        transform: translateY(0) rotate(0);
        opacity: 1;
      }
      to{
        transform: translateY(-200px) rotate(0);
        opacity: 0;
      }
   

}
  

`

export const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;


`

export const Floor = styled.div`
  width: 100%;
  height: 120px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;

  background-image: url(${floor});
  background-size: cover;

  position: relative;
  bottom:0;
  z-index:0;



`

export const Input = styled.input`

  height: 35px; 

`

export const Button = styled.a`
  width: 100px;
  height: 35px;
  background: #F3367E;
  border: 4px solid #F3367E;
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
  line-height:30px;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  font-size: 14px;

  cursor: pointer;

  &:hover{
    color: #F3367E;
    border: 2px solid  #F3367E;
    background: none;
    transition: 0.2s;

  }


`
export const TextArea = styled.textarea`

    height: 100px;
    overflow: auto;
    word-break: break-word;

    display: flex;
    flex-wrap: nowrap;
  

`
export const Form = styled.form`

  width: 400px;
  height: 300px;

  margin-top: 120px;
  font-size: 14px;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  input[type="text"], textarea{
  width: 100%;

  margin: 5px 0;
  background: rgba(14, 6, 39, 0.75);
  border: none;
  border-radius: 3px;

  padding: 10px;

  color: white;

  &::placeholder{
    font-family: 'Poppins', sans-serif;

    font-size: 14px;
  }
  }

`