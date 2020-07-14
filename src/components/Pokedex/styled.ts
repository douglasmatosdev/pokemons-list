import styled from 'styled-components'

export const PokedexBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 80%;
    height: 80vh;

    margin: 0 auto;
    padding: 0;

`

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 10px auto;
    padding: 4px 8px;
    width: 50%;
    height: 60px;

    outline: none;


    cursor: pointer;


   .current-page {
       margin: 0 20px
   }

   .navigation-link {
       position: relative;
       display: flex;
       justify-content: center;
       align-items: center;

       width: 75px;
       height: 95px;
       
       background-color: #555;
       color: #fff;
       font-weight: 900;
       font-size: 20px;
   }

   .navigation-link:hover {
    background: #999;
    transform: scale(1.05);
   }

   .left::after {
    content: '';
    display: block;
    position: absolute;
    top: 67px;
    left: -2px;
    border-top: 15px solid transparent;
    border-right: 15px solid transparent;
    border-left: 15px solid #fff;
    border-bottom: 15px solid #fff;
   }

   .right::after {
    content: '';
    display: block;
    position: absolute;
    top: 67px;
    right: -2px;
    border-top: 15px solid transparent;
    border-left: 15px solid transparent;
    border-right: 15px solid #fff;
    border-bottom: 15px solid #fff;
   }
   
   
`
