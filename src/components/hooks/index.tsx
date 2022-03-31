import {useEffect, useRef} from 'react';

export const useAutoResize = (value:string) => {
  // refの作成
  const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      // 現在参照している要素を取得
      const element = ref.current;

      // 現在参照している要素がない場合は何もしない
      if (!element) {
        return;
      }

      element.style.height = 'auto';

      // element.scrollHeightを導入することで、textareaの高さを動的に変更する
      // element.scrollHeight : 溢れて画面上に表示されない部分を含めた要素の中身の高さ
      element.style.height = `${element.scrollHeight}px`;
    },[value]);

    return ref;
}