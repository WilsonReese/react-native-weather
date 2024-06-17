import { s } from "./Clock.style";
import { Txt } from "../../components/Txt/Txt";
import { useEffect, useState } from "react";
import { convertNowToHHMM, updateTime } from "../../utils/date-time";

export function Clock({}) {
  const [time, setTime] = useState(convertNowToHHMM);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(convertNowToHHMM());
    }, 1000); // Update every second
    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
    };
  }, []);

  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
}
