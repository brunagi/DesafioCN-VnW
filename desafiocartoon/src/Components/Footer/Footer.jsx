import React from "react";
import * as S from "./FooterStyle";
import WarnerLogo from "./ImagensFooter/warnerlogo.png"
import LogoG from "./ImagensFooter/logogato.png"
import LnLogo from "./ImagensFooter/inlogo.png"


function Footer(){
    return(
        <S.StyleFooter>
            <img src={WarnerLogo} alt="" />
            <S.StyleSection>
                
                <S.StyleUl>
                    <li>Sobre Nós</li>
                    <li>Produtos</li>
                    <li>Personagens</li>
                </S.StyleUl>

            </S.StyleSection>


                <img src={LogoG} alt="" />
                <img src={LnLogo} alt="" />
               
            <S.StyleSection2>

            <h3>© 2024 Cartoon Network</h3>

            </S.StyleSection2>
    
        </S.StyleFooter>
    )


}
export default Footer