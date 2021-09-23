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
const name = "J2";
const age = 33;
//「私の名前はJ2です。年齢は３３歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
