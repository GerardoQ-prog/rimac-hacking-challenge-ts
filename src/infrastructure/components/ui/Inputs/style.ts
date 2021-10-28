import styled from "styled-components";


export const CInputText = styled.input`
    border: 1px solid ${props => props.theme.colors.input};
    color : ${props => props.theme.colors.input};
    font-size: 16px;
    font-weight: 500;
    width: 298px;
    height: 50px;
    padding: 10px;
    border-radius: 4px;
    outline: none;
    margin:10px 0px;
    ::placeholder{
            color:${props => props.theme.colors.input}
        }

`

export const CSelect = styled.div`
    border:0.5px solid ${props => props.theme.colors.input};
    border-radius: 4px 0px 0px 4px;
    width: 80px;
    height: 56px;
    position: relative;
    padding-left: 10px ;
    margin:10px 0px;
    select{
        border: none;
        outline: none;
        font-size: 16px;
        color:${props => props.theme.colors.text.primary};
        &:focus ~ label,
        &:valid ~ label{
            transform: translateY(-20px);
            font-size: 12px;
        }
    }
    label{
        position: absolute;
        bottom: 20px;
        left: 0;
        color:$input;
        transition: all 0.3s ease;
        padding-left: 10px ;

    }
`
export const CInputSelect = styled.div`
    border:0.5px solid ${props => props.theme.colors.input};
    border-radius: 0px 4px 4px 0px;
    width: 220px;
    height: 56px;
    position: relative;
    padding-left: 10px ;
    margin:10px 0px;
    input{
        height: 95%;
        width: 97%;
        border: none;
        outline: none;
        font-size: 16px;
        color:${props => props.theme.colors.input};
        ::placeholder{
            color:${props => props.theme.colors.input}
        }
    }

`

export const CInputCheckbox = styled.div`
    max-width: 288px;
    height: 40px;
    font-size: 14px;
    color: ${props => props.theme.colors.text.secondary};   
    position: relative;
    margin: 10px 0px;
    width: 300px;
    input{
        width: 20px;
        height: 20px;
        
    }
    label{
        position: absolute;
        height: 50px;
        margin-left: 15px;
        a{
            text-decoration: underline;
        }
    }

`