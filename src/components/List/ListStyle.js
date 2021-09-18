import styled from 'styled-components'

const ListSection = styled.section`
    padding: 20px 4%;
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #181d1f;
    color: #f1e8ff;

    section{
        width: 100%;
        max-width: 1100px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        div.void{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span{
                color: #8846f0;

                &::selection{
                    background-color: #f1e8ff;
                }
            }

            h1{
                font-size: 40px;
            }

            img.checklistImg{
                max-height: 500px;
                max-width: 100%;

                &::selection{
                    background-color: transparent;
                }
            }

            h2{
                text-align: center;
                font-size: 20px;
                max-width: 400px;
            }
        }

        div{
            display: flex;
            align-items: center;
            width: max-content;
            height: min-content;

            &:hover{
                button{
                    opacity: 1;
                }
            }

            input{
                accent-color: #8846f0;
                margin-right: 10px;

                &:checked{
                    & ~ span{
                        opacity: .5;
                        text-decoration: line-through;
                    }
                }
            }

            span{
                transition: .5s;
            }

            button{
                background-color: transparent;
                border: none;
                margin-left: 10px;
                height: 14px;
                width: 14px;
                cursor: pointer;
                opacity: 0;
                transition: .3s;

                &:hover{
                    img{
                        filter: brightness(1.3)
                    }
                }
            }
        }
    }
`

export default ListSection;