import NewItemInfo from "../new_items_info.json";
import NewItemKuchikomi from "../new_items_kuchikomi.json";
import { useState } from "react";

export function CreateTag(props) {
  const itemName = props.itemName;
  // 商品限定フィルター
  const itemInfo = NewItemInfo.filter(
    (item) =>
      // 検索文字が含まれている商品に限
      item.item_name === itemName
  );
  const antiSizzle = itemInfo[0].tag_word;
  const keywordsList = antiSizzle.split(",");
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleButtonClick = (value) => {
    console.log(`ボタンがクリックされました: ${value}`);

    // クリックされたボタンの情報を配列に追加または削除
    if (clickedButtons.includes(value)) {
      // ボタンがすでにクリックされている場合、削除
      setClickedButtons((prevButtons) =>
        prevButtons.filter((button) => button !== value)
      );
    } else {
      // ボタンがクリックされていない場合、追加
      setClickedButtons((prevButtons) => [...prevButtons, value]);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-24">
        {keywordsList.map((word) => (
          <div className="bg-white p-4 my-2 py-2 rounded-5xl">
            <p>{word}</p>
          </div>
        ))}
      </div>
    </>
  );
}
