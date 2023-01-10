import React, { useState } from "react";
import { ExchangeInfo } from '../../../model/Model';
import { Loading } from '../loading/Loading';

type AppProps = {
    eurInfo: ExchangeInfo
}

export const ExchangeTotalInfo = (props: AppProps) => {

    let eurInfo = props.eurInfo;
    const [isReady, setIsReady] = useState(false);

    setInterval(() => {
      setIsReady(true);
    },3000);

    if (!isReady) return <Loading />

    return(
        <>
            <div>환율기준 (1 유로)</div>
            <div>
                {eurInfo.basePrice}
                {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
                {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
                {eurInfo.changePrice}원 (
                {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
            </div>
            <div>
                <div>살때 : {eurInfo.cashBuyingPrice}</div>
                <div>팔때 : {eurInfo.cashSellingPrice}</div>
                <div>보낼때 : {eurInfo.ttSellingPrice}</div>
                <div>받을때 : {eurInfo.ttBuyingPrice}</div>
            </div>
      </>
    )
}