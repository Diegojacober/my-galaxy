import React, { useEffect, useState } from "react"
import * as S from './styles';
import format from "date-fns/format";
import { AiOutlineDownload } from 'react-icons/ai';
import imageNotFound from './../../assets/image.png'

export default function Home() {
    const today = format(new Date(), "yyyy-MM-dd");
    const [userDate, setUserDate] = useState(today);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    return (
        <S.Content>
            <S.Title>Type it your born date and find out your galaxy</S.Title>

            <S.Input type="date" value={userDate} onChange={(e) => setUserDate(e.target.value)} />


            {loading ? (
                <S.ButtonInactive href="#" >See my day</S.ButtonInactive>
            ) : (
                <S.Button href="#" >See my day</S.Button>
            )}



            {loading ? (
                <S.Loader/>
            ) :
                (
                    <S.Main>
                        <S.ImageContent>

                            {!data ?
                                (<img src="" alt="" />) :
                                (
                                    <img src={imageNotFound} alt="" draggable={false} />
                                )}

                            <S.BtnDownload>
                                <p>Download</p>
                                <AiOutlineDownload size={15} />
                            </S.BtnDownload>
                        </S.ImageContent>

                        <S.Description>
                            <h4>Description</h4>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ipsam fugit repudiandae? Dolorum officiis culpa quisquam. Doloremque fugit aperiam pariatur voluptatum ratione repellendus eum magnam tempore corrupti sapiente. Totam, sit?
                                Voluptatum, molestiae rem dolor, animi, in incidunt quibusdam quisquam nisi voluptas illo tempora magnam dolorem harum magni? Voluptates ut, ab voluptatem hic eum libero, quisquam incidunt porro excepturi dolor nesciunt.
                                Odit omnis nulla ad quidem recusandae, corporis itaque obcaecati cumque provident tempore magni harum iste aspernatur? Iste quaerat doloribus impedit, sunt tempora quae inventore repudiandae iure deleniti nesciunt, minus magni.
                            </p>

                        </S.Description>
                    </S.Main>
                )}



        </S.Content>
    )
}
