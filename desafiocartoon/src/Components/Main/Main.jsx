import React from "react";
import * as S from "./MainStyle";
import Scooby from "./ImagensMain/img1.png"
import Ben10 from "./ImagensMain/img2.png"
import Looney from "./ImagensMain/img3.png"
import Gumball from "./ImagensMain/img4.png"
import Meninas from "./ImagensMain/img5.png"
import Tom from "./ImagensMain/img6.png"


function Main(){
    return(
        <main>
            <S.StyleSection>
                <img src={Scooby} alt=""></img>
                <img src={Ben10} alt=""></img>
                <img src={Looney} alt=""></img>
            </S.StyleSection>

            <S.StyleSection2>
                <img src={Gumball} alt=""></img>
                <img src={Meninas} alt=""></img>
                <img src={Tom} alt=""></img>
            </S.StyleSection2>

        </main>

    )
}
export default Main