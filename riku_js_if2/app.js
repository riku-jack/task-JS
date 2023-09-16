let testa = 30;
// A君のテストの点数を入れてください
let testb = 40;
// B君のテストの点数を入れてください

if ((testa==100) && (testb==100)) {
    console.log("２人とも満点");
 }else if ((testa==0) && (testb==0)){
  console.log("２人とも０点");
 }else if ((testa>=70) && (testb>=70)){
    console.log("２人とも合格");
 }else if ((testa>=70) && (testb<70)){
    console.log("A君だけ合格");
 }else if ((testa<70) && (testb>=70)){
    console.log("B君だけ合格");
 }else if ((testa<70) && (testb<70)){
    console.log("２人とも不合格");
 }