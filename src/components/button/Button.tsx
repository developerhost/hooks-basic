import React from 'react';
import classes from './Button.module.scss';

type Props = {
  buttonText: string;
  onClick: () => void;
};

// react.memoでラップすることで、Buttonコンポーネントに渡すPropsに変更がない場合は再レンダリングされない
// react.memoでPropsの前後の値を比較してレンダリングするかを決定しています。
const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
console.log(`Button:${buttonText}`);


  return (
    <div className={classes.root}>
      <button onClick={onClick} type="button" className={classes.button}>
        {buttonText}
      </button>
    </div>
  );
});

export default Button
