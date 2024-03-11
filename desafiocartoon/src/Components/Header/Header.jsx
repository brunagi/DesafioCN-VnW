import React from "react";
import * as S from "./HeaderStyle"
import Logo from "../../assets/logocartoon.png"
import LogoJogos from "../../assets/jogos.png"
import LogoProgram from "../../assets/programacao.png"


function Header() {
    return (
        <S.StyleHeader>
            <img src={Logo} alt="Logo cartoon network"/>

            <S.StyleSection>
                <S.StyleDiv>
                    <img src={LogoJogos} alt="Imagem de um console para os Jogos"/>
                    <h2>JOGOS</h2>
                </S.StyleDiv>
                
                <S.StyleDiv>
                <img src={LogoProgram} alt="Imagem de um relógio para a programação"/>
                    <h2>PROGRAMAÇÃO</h2>   
                </S.StyleDiv>
            </S.StyleSection>

        </S.StyleHeader>
    )
}
export default Header