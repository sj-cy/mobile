import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
            <div className="content">
              * 지하철 이용시
              <br />
              2호선, 수인분당선 <b>선릉역 1번 출구</b> (도보 7분)
              <br />
              2호선, <b>삼성역 4번 출구 </b> (도보 10분)
            </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            간선(파랑): 146,333,341,360,740
            <br />
            지선(초록): 3412,4434
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            * <b>포스코센터 아트홀 주차장</b> 검색
            <br />
            주차 요금은 4시간까지 무료입니다.
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
