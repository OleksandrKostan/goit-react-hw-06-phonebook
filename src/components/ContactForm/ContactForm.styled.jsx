import styled from 'styled-components';

export const Button = styled.button`
 color:#00c6ff;
 padding: 15px 50px;

 text-decoration:none;
 text-align:center;
 margin:20px auto;

 display: block;
 background-image: linear-gradient(to left,transparent,transparent 50%,#00c6ff 50%,#00c6ff);
 background-position: 100% 0;
 background-size: 200% 100%;
 transition: all .25s ease-in;
 font: 400 18px tahoma;
 border: 1px solid #00C6FF;

:hover {
background-position: 0 0;
color:#fff;

}

:disabled{

    color: red;
    background-color: white;
    background-image: white;
     transition: none;
    

}`;