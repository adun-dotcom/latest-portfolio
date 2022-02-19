import styled from 'styled-components';

export const AboutWrapper = styled.div`
scroll-snap-align:start;
width:100%;
background:#1B1B1B;
padding:100px 0;

.about-me{
    width:60%;

    @media screen and (max-width:1000px){
        width:75%;
    }

    @media screen and (max-width:850px){
        width:85%;
    }
    @media screen and (max-width:450px){
        width:100%;
    }
    }



.text{
    padding-top:50px ;
   

   h3{
       color:#3d3d3d !important;
   }

    h4{
    }

    p{
        
        color:#888888;
        width:100%;

    }

    p:nth-child(2){ 
        margin-top:40px;
    }

  
}

.stacks{
    margin-top:80px;

    .skills-list{
        display:flex;
        justify-content:flex-start;
        align-items: center;
        flex-wrap:wrap;
        width:100%;

        li{
            list-style: square;
            width:150px;
            margin:20px 40px;
            color:#ffffe;
            font-size:1rem;

            @media screen and (max-width:1280px){
                margin:20px;
            }
            @media screen and (max-width:1056px){
                width:100px;
            font-size:.8rem;
            }
            @media screen and (max-width:789px){
                width:150px;
            font-size:.8rem;
            }
        }

    }
}
`