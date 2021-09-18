import styled from "styled-components";

const HeaderSection = styled.header`
    padding: 20px 4%;
    background-color: #192123;

    section{
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        gap: 5px;

        input{
            height: 30px;
            border: none;
            border-radius: 5px;
            outline: none;
        }
    
        input[type=text]{
            padding-left: 10px;
            background-color: #f1e8ff;
            box-shadow: 0 0 10px 5px rgba(0,0,0,.1);
        }
    
        input[type=submit]{
            padding: 0 10px;
            background-color: #8846f0;
            color: #f1e8ff;
            font-weight: bold;
            cursor: pointer;
            transition: .3s;
    
            &:hover{
                filter: brightness(1.1);
                box-shadow: 0px 0px 10px 0px rgba(172, 120, 255, 1);
            }
        }
    }

    div.alert{
        display: flex;
        align-items: center;
        position: absolute;
        top: 100px;
        right: 20px;
        width: max-content;
        max-width: 80%;
        height: 60px;
        padding-left: 10px;
        background-color: #192123;
        color: #f1e8ff;
        border-left: 5px solid #8846f0;
        box-shadow: 0 0 10px 10px rgba(0,0,0,.1);
        animation-name: showAlertfunc;
        animation-duration: .5s;
        animation-interation-count: 1;
        animation-timing-function: ease-in-out;
        z-index: 1;

        button{
            height: 100%;
            min-width: 40px;
            font-size: 20px;
            font-weight: bold;
            background-color: #8846f0;
            color: #181d1f;
            opacity: 1;
            border: none;
            cursor: pointer;
            margin-left: 10px;

            &:hover{
                filter: brightness(1.1);
                box-shadow: 0 0 10px 0 #8846f0;
            }
        }
    }

    @media screen and (max-width: 500px) {
        section{
            
            justify-content: center;
            flex-wrap: wrap;

            input{
                flex-grow: 1;
            }

            div.alert{
                top: auto;
                bottom: 100px;
            }
        }
    }

    @keyframes showAlertfunc {
        from{
            transform: translateX(600px)
        }

        to{
            transform: translateX(0)
        }
    }
`

export default HeaderSection;