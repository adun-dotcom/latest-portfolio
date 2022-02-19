import styled from "styled-components"
import Image from '../../image/home-bg.png';
 
export const HomeWrapper = styled.div`
position:relative;
height:100%;
width:100%;



.bg-div{
    background:rgba(0,0,0,.4) url(${Image});
    background-repeat:no-repeat;
    background-position:center;
    position:relative;
    background-size: cover;
     background-attachment: fixed;
    background-blend-mode:multiply;
    filter: blur(5px);
      -webkit-filter: blur(5px);
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    scroll-snap-align:start;
}


.content{
    position:absolute;
    top:50%;
    left:10%;
    transform: translateY(-50%);
   max-width:600px;
   width:100%;

   @media screen and (max-width:900px){
       left:5%;
   }

   @media screen and (max-width:700px){
    left:0;
    // top:30%;
}

.text{
    @media screen and (max-width:680px){
        text-align:center;

    }
    .btn-div{
        position:relative;
        margin-top:50px;

        @media screen and (max-width:680px){
            display:flex;
            justify-content:center;
    
        }

    }
}

}

`