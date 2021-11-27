import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネントは拡張子jsxとしたほうがわかりやすい

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); // 動的に変わる部分は useStateを使う
  const [onOff, setOnOff] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickOnOff = () => {
    setOnOff(!onOff);
  };

  // 処理の関心を分離する
  // 第二引数に[]空の配列を渡すことで最初の1回だけ動作させたい処理をかける
  useEffect(() => {
    if (0 < num) {
      if (num % 3 === 0) {
        onOff || setOnOff(true);
      } else {
        onOff && setOnOff(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気だあよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickOnOff}>On/Off</button>
      <p>{num}</p>
      {onOff && <p>☺</p>}
    </>
  );
};

// 他のファイルでも使用できるように
export default App;
