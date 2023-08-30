import React, { useEffect, useState } from "react"
import * as S from './styles';
import format from "date-fns/format";

export default function Home() {
    const today = format(new Date(), "yyyy-MM-dd");
    const [userDate, setUserDate] = useState(today);


    useEffect(() => {

        console.log(userDate)
    }, userDate);

    return (
        <S.Content>
            <S.Title>Type it your born date and find out your galaxy</S.Title>

            <S.Input type="date" value={userDate} onChange={(e) => setUserDate(e.target.value)}/>


        </S.Content>
    )
}
