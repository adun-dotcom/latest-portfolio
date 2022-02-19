import styled from "styled-components";

export const HeaderWrap = styled.div`
   position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  top:200;
  z-index:3000;
  
  .close{
    cursor:pointer;
}
.close:hover{
    color:#c32865 !important;
}


  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fffffe;
    width:100%;
    padding:100px 50px;

    @media screen and (max-width:650px){
      padding:100px 20px;
    }
    @media screen and (max-width:500px){
      padding:100px 0;

    }
  }

  .info {
    display: flex;
    align-items: center;


    .brand {
      font-size: 18px;
      font-weight: 700;
      color: #fffffe;
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      display:flex;
      align-items: center;
      
      img{
        width:50px;
        height:30px;
      }
      

    }

    
    .contact{
        margin-left:80px;
        font-size:14px;

        a{
            margin:0 20px;
            cursor:pointer;
            letter-spacing:.04rem;

            &:hover {
                text-decoration: underline;
              }
        }

        span{
            color:#262626;
            font-weight:bold;
            font-size:16px;
        }
    }
  }




  .hidden-menu{
    position:absolute;
    z-index:3000;
    background:#1B1B1B;
    padding:50px 70px;;
    height:100vh;
    max-width:500px;
    width:100%;
    top:0;
    right:0;

    
    .close-div{
        display:flex;
        justify-content:flex-end;
        margin-bottom:40px;
    }

    .hidden-menu-list{
        text-align:left;


        a{
            font-size:20px;
            font-weight:700;
            margin-bottom:30px;
            color:#636363;
            display:block;
            cursor:pointer;
        }
        a:hover{
            color:#fff;
        }
    }
  }
`;
