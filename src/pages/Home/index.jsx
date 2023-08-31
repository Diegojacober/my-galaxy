import React, { useEffect, useState } from "react"
import * as S from './styles';
import format from "date-fns/format";
import { AiOutlineDownload } from 'react-icons/ai';
import imageNotFound from './../../assets/image.png';
import api from "../../services/api";
import { toast } from 'react-toastify';

export default function Home() {
    const today = format(new Date(), "yyyy-MM-dd");
    const [userDate, setUserDate] = useState(today);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

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
                .catch(() => {
                    toast.error("We can't find a image for this day")
                    setLoading(false)
                    setUserDate(today)
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
                setData(resp.data)
            })
            .catch(() => {
                toast.error("We can't find a image for this day")
                setLoading(false)
                setUserDate(today)
            })
    }

    async function downloadImage(
        imageSrc,
        nameOfDownload = 'my-day.jpg',
      ) {
        const response = await fetch(imageSrc);
        console.log(response)
      
        const blobImage = await response.blob();
      
        const href = URL.createObjectURL(blobImage);
        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = nameOfDownload;
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
      }

      function image() {
        downloadImage(
            data.hdurl,
            'my-day.png',
          )
          .then(() => {
            console.log('The image has been downloaded');
          })
          .catch(err => {
            console.log('Error downloading image: ', err);
          });
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
                <S.Loader />
            ) :
                (
                    <S.Main>
                        <S.ImageContent>

                            {!data && !data.hdurl ?
                                (<img src="" alt="" />) :
                                (
                                    <img src={data.url} alt="" draggable={false} />
                                )}

                            <S.BtnDownload onClick={image}>
                                <p>Download</p>
                                <AiOutlineDownload size={25} />
                            </S.BtnDownload>
                        </S.ImageContent>

                        <S.Description>
                            <h4>{data.title}</h4>

                            <p> {data.explanation} </p>

                        </S.Description>
                    </S.Main>
                )}



        </S.Content>
    )
}
