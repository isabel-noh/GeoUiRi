import BrushTeethVideo from "../Components/Kids/BrushTeethVideo";
import WashHandsVideo from "../Components/Kids/WashHandsVideo";
import Effect from "../Components/Kids/Effect";
import "./Kids.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Timer from "../Elements/Timer";
import PageParticles from "../Components/Kids/PageParticles";
import Character from "../Components/Kids/Character";
import { useNavigate } from "react-router";

function Kids(props) {
  const navigate = useNavigate();

  const { webSocket } = props;
  const member_info = useSelector((state) => state?.mirror?.member?.data);
  const mirror_action = useSelector((state) => state?.mirror?.action);
  const message = useSelector((state) => state?.mirror?.message);

  // const [comp, setComp] = useState(mirror_action); // component 설정
  const [comp, setComp] = useState("video"); // component 설정
  const [video, setVideo] = useState("wash_hands"); // 비디오 url
  const [videoEnded, setVideoEnded] = useState(false); // 자식 컴포넌트에서 비디오 재생이 끝나면 true로 바뀜
  const [cameraEnd, setCameraEnd] = useState(false);
  // useEffect(() => {
  //   if (videoEnded) {
  //     setComp("camera");
  //   }
  // }, [videoEnded]);

  // useEffect(() => {
  //   setComp("camera");
  // }, []);
  useEffect(() => {
    console.log(comp);
    if (comp === "ending") {
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
  }, [comp]);

  // 그 다음 소켓으로 양치 요청이 들어오면 이를 닦아보자! 보여주고, 이닦는 동영상 재생, 동영상 완료 후 3,2,1 타이머 보여주고, 찰칵 , 마지막 인삿말
  // if ([1, 2, 3, 4, 5, 6, 7, 8].includes(comp)) {
  if (comp === "greeting") {
    return (
      <>
        {member_info ? (
          <div className="total">
            <div className="balloon">
              <p className="balloon-text">
                {member_info?.nickname}, {mirror_action?.message}
                {/* {member_info?.nickname}, 안녕 좋은 아침이야 */}
              </p>
            </div>
            <Character />
          </div>
        ) : null}
      </>
    );
  } else if (comp === "message") {
    return (
      <>
        {mirror_action?.msg ? (
          <div className="balloon">
            <p className="balloon-text">{mirror_action?.msg}</p>
            <Character />
          </div>
        ) : null}
      </>
    );
  } else if (comp === "video") {
    if (video === "wash_hands") {
      return (
        <div className="video-box">
          <PageParticles />
          <Effect />
          <WashHandsVideo webSocket={webSocket} setComp={setComp} />
        </div>
      );
    } else if (video === "brush_teeth") {
      return (
        <div className="video-box">
          <PageParticles />
          <Effect />
          <BrushTeethVideo webSocket={webSocket} setComp={setComp} />
        </div>
      );
    }
  } else if (comp === "camera") {
    return (
      <>
        <Timer setComp={setComp} />
      </>
    );
  } else if (comp === "ending") {
    return (
      <div className="balloon">
        {/* <div className="balloon-text">{mirror_action?.msg}</div> */}
        <div className="balloon-text">수고했어~ </div>
        <Character />
      </div>
    );
  }
}

export default Kids;
