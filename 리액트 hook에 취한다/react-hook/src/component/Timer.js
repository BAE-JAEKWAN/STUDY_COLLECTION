import { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 종료 되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다.</span>
    </div>
  );
};

export default Timer;
