import styled from 'styled-components';
export const ContactWrapper = styled.div`
scroll-snap-align:start;
background:#1B1B1B;
padding:150px 0;

@media screen and (max-width:789px){
    padding:100px 0;

}


.content{
    display:flex;
justify-content: center;
align-items: center;
height:100%;
width:100%;
position:relative;
}
.contact{
    width:70%;

    @media screen and (max-width:950px){
        width:89%;
    }

    @media screen and (max-width:789px){
        width:100%;
    }
}


.email-div{
    margin:100px 300px;

    @media screen and (max-width:789px){
        margin:50px;
    }
}

.email-is{
    color:#888888;  
}


.bouncing-email{
    height:100px;
    width:100px;
    border-radius:100%;
    background:#c32865;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    right:20%;
}


`