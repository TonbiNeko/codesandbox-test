/*
 * const,letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き、再宣言不可
// // val3 = "const変数を上書き";
// //val3 is read-only

// const val3 = "const変数を再宣言";

// //constで定義してもobjectの中身は上書きできる
// //プロパティを変更、追加できる
// const val4 = {
//   name: "J2",
//   age: 33
// };
// val4.name = "object val4のnameを上書き";
// val4.address = "Yokohama";
// console.log(val4);

//配列の中身も変更、追加できる
//基本constで宣言して、上書きが必要な時にletを使用する
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列について
// const name = "J2";
// const age = 33;
// //「私の名前はJ2です。年齢は３３歳です。」
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//アロー関数について
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です！"));
// //アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// //引数の（）省略できる※引数が一つの場合に可能
// //{}とreturnも省略した場合
// const func2 = (str) => str;
// console.log(func2("func2です！"));
// //単一式の時{}とreturn省略できる
// //{}の場合は必ずreturnが必要

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//分割代入　　オブジェクトの場合
// const myProfile = {
//   name: "J2",
//   age: 33
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //指定のプロパティーを抜き出すことができる。
// //コードが簡潔になり、わかりやすい
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// //分割代入　　配列の場合
// const myProfile = ["J2", 33];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // const [name, age] = myProfile;
// // const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// // console.log(message4);

// //※分割代入の値が数字だと代入できなかった！
// const [a, b] = myProfile;
// const message5 = `私の名前は${a}です。年齢は${b}歳です。`;
// console.log(message5);

// //デフォルト値、引数について
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("J2"); //こんにちは！J2さん
// sayHello(); //デフォルト引数なしだと⇨こんにちは!undefinedさん
// //引数にデフォルト値（初期値）を設定出来た。

//スプレッド構文について...
//①配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);
