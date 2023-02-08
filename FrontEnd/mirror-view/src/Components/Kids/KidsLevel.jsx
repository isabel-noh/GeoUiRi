import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.css";
import "./KidsLevel.css";

const KidsLevel = (props) => {
  const [level, setLevel] = useState();
  const [point, setPoint] = useState();
  //   const { member } = props;
  // 멤버의 경험치, 레벨 데이터 수신받음
  // const pointNow = {member.point}
  // const levelNow = {member.level}

  //   useEffect(() => {
  // setLevel(pointNow);
  // setPoint(levelNow);
  //   }, []);
  const pointNow = 30;
  const memlevel = "lv1";

  return (
    <div>
      <div className="chaimg">
        <img
          src={process.env.PUBLIC_URL + `/images/${memlevel}.png`}
          alt="캐릭터"
          id="levcha"
        />
        <ProgressBar id="levelBar" animated now={pointNow} />
      </div>
    </div>
  );
  // if(level == 0){
  //     return(
  //         <div></div>
  //         )
  //     }
  //     if(level == 1){

  //     }
};

export default KidsLevel;