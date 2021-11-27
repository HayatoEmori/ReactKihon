import React from "react";

// State : 各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる。

// こっちのexportのほうは import 箇所で使用するコンポーネントを明記する必要がある。
export const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color, // JSのルール同じ名前のプロパティ名の場合は: 以降を省略可能
    fontSize: "18px" // css : font-size
  };

  return <p style={contentStyle}>{children}</p>;
};

// defaultのexportは1ファイルに1つ。
// import 側で 別名を付けられる。タイプミスが紛れ込む。
// export default ColorfulMessage;

// 昔はstateをクラスコンポーネントでしか使えなかった
// 今はフックスによって関数コンポーネントでも使えるので、今後は関数コンポーネントだけ使う、でよい。（今の主流）
