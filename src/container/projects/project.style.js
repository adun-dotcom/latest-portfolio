import styled from 'styled-components';


export const ProjectWrapper = styled.div`
scroll-snap-align:start;
width:100%;
background:#1B1B1B;
padding:150px 0;

.projects{
display:flex;
justify-content: center;
align-items: center;
height:100%;
width:100%;
}

.content-display::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}

.content-display::-webkit-scrollbar-thumb {
  background-color: #1B1B1B;
}
.content-display{
  display:flex;
  justify-content: space-between;
  height:100vh;
  overflow-y:scroll;

  @media screen and (max-width:1000px){
    flex-direction:column;
    height:100%;
  }
}


.about-work{
  width:60%;
  margin-right:100px;
  position:sticky;
  top:30%;

  @media screen and (max-width:1233px){
    margin-right:50px;
  }

  @media screen and (max-width:1000px){
    position:relative;
    top:0;

  }
  @media screen and (max-width:680px){
   width:100%;

  }
}
p{
  color:#888888;
  font-weight:700;
}
    h3{
        color:rgba(255,255,255,0.4);
        margin-left:100px;
    }

    .work{
       display:flex;
       justify-content: space-between;
       align-items: center;
       margin:100px auto;
       padding:20px;
        background:#1B1B1B;
       box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
       
       @media screen and (max-width:789px){
       flex-direction: column;
       padding:0;
    
      }
    }

    .btn-div{
      height:50px;
      display:inline-block;
    }

    .links{
      display:flex;
      justify-content:space-between;
      align-items: center;
      width:45%;
      position:relative;
      margin-top:30px;

      @media screen and (max-width:600px){
        width:60%;
      }

      @media screen and (max-width:480px){
        width:80%;
      }

      @media screen and (max-width:340px){
        width:100%;
      }


    }

    .image-div{
      max-width:300px;
      width:100%;
     height:280px;
     overflow:hidden;
     cursor:pointer;
     -webkit-box-shadow: -2px -1px 15px 7px rgba(0,0,0,0.5);
     -moz-box-shadow: -3px -2px 30px 14px rgba(0,0,0,0.425);
     box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);

     img{
       width:inherit;
       height:inherit;
       object-fit: cover;
     }

     @media screen and (max-width:1233px){
      max-width:250px;
    }
    @media screen and (max-width:1000px){
     max-width:300px;
     height:250px;
    }
    // @media screen and (max-width:905px){
    //   max-width:300px;
    //   height:250px;

    // }
    // @media screen and (max-width:798px){
    //   max-width:250px;
    //   height:250px;
    // }
    @media screen and (max-width:789px){
      max-width:100%;
   
     }
    }
    

    .text{
    width:50%;
    padding:15px;
    -webkit-box-shadow: -2px -1px 15px 7px rgba(0,0,0,0.5);
        -moz-box-shadow: -3px -2px 30px 14px rgba(0,0,0,0.425);
        box-shadow: -4px -3px 45px 21px rgba(0,0,0,0.35);

        @media screen and (max-width:789px){
          width:100%;
         }

         h4{
           @media screen and (max-width:500px){
             margin-top:15px;
           }
         }

      small{
        color:#c32865;
        font-size:.6rem;       
        letter-spacing:.2rem;
        text-transform:uppercase;
        font-weight:700;

        @media screen and (max-width:1024px){
          font-size:.46rem;       
        letter-spacing:.1rem;
        }

      }

      .stacks{
        display:flex;
        justify-content:flex-start;
        align-items: center;
       
        margin-top:18px;

        li{
          color:#888888;
          font-size:.6rem;
          text-transform:uppercase;
          letter-spacing:.2rem;
          border-right:1px solid #888888;
          padding-right:20px;
          margin-right:20px;


        li:last-child{
          border-right:none;
        }
      }

      .responsibilities{
        border-bottom:1px solid #888888;
        color:#888888;
      }


      .requirements{
        padding-left:18px;

        @media screen and (max-width:460px){
          padding-left:8px;
        }

        li{
            margin-bottom:20px;
           font-weight:300;
            
          }
      }
     

    }

}


`