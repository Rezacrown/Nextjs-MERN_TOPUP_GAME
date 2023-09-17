import React, { useCallback, useEffect, useState } from "react";
import CardGame from "./card-game";
import { config } from "@/config";
import { getLandingpageAPI } from '@/services/Player'
import {GameItemsInterface} from '@/interface/Player'

export default function FeatureGame() {
  const [gameList, setGameList] = useState([]);


  const fetchData = useCallback(() => {
    getLandingpageAPI().then((data: any)=> setGameList(data))
  }, [getLandingpageAPI])


  useEffect(() => {
    fetchData()
  }, [getLandingpageAPI]);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-start gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList?.length > 0 &&
            gameList.map(({_id, category, name, status, thumbnail}: GameItemsInterface, index) => {
              return (
                <CardGame
                  key={_id}
                  src={thumbnail}
                  link={`/detail/${_id}`}
                  title={name}
                  subTitle={category?.name}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
