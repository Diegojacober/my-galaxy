import React, { useEffect, useState } from "react"
import * as S from './styles';
import format from "date-fns/format";
import { AiOutlineDownload } from 'react-icons/ai';
import imageNotFound from './../../assets/image.png';
import api from "../../services/api";

export default function Home() {
    const today = format(new Date(), "yyyy-MM-dd");
    const [userDate, setUserDate] = useState(today);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        
        async function getToday() {
            setLoading(true)
            const response = await api.get('/planetary/apod', {
                params: {
                    'date': userDate,
                    'api_key': import.meta.env.VITE_API_KEY
                }
            })
            .then((resp) => {
                setLoading(false)
                setData(resp.data)
            }) 
        }
        
        getToday()
    }, []);

    const getData = async () => {
        setLoading(true)
        const response = await api.get('/planetary/apod', {
            params: {
                'api_key': import.meta.env.VITE_API_KEY,
                'date': userDate
            }
        })
        .then((resp) => {
            setLoading(false)
            console.log(resp)
            setData(resp.data)
        }) 
    }

    return (
        <S.Content>
            <S.Title>Type it your born date and find out your galaxy</S.Title>

            <S.Input type="date" value={userDate} onChange={(e) => setUserDate(e.target.value)} />


            {loading ? (
                <S.ButtonInactive href="#" >See my day</S.ButtonInactive>
            ) : (
                <S.Button href="#" onClick={getData}>See my day</S.Button>
            )}



            {loading ? (
                <S.Loader/>
            ) :
                (
                    <S.Main>
                        <S.ImageContent>

                            {!data && !data.hdurl ?
                                (<img src="" alt="" />) :
                                (
                                    <img src={data.hdurl} alt="" draggable={false} />
                                )}

                            <S.BtnDownload>
                                <p>Download</p>
                                <AiOutlineDownload size={15} />
                            </S.BtnDownload>
                        </S.ImageContent>

                        <S.Description>
                            <h4>{ data.title }</h4>

                            <p> { data.explanation } </p>

                        </S.Description>
                    </S.Main>
                )}



        </S.Content>
    )
}
