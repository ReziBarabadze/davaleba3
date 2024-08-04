//დავალება 1 - ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი: 
// 10, 50, 6, 7, 8, 11, 6, 3, 9



function sumOfAll(arry1) {
  let sum = 0;
  for (let a of arry1) 
    sum += a;
  return sum;
};
console.log(sumOfAll([10, 50, 6, 7, 8, 11, 6, 3, 9]));



//დავალება 2 - // ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
               // 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


// let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }


function testFunction () {
  let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  for (let item1 in testFunction) {

  console.log(testFunction[item1]);
  }
  
}
testFunction();


//დავალება 3 - შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
// (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max )


function test2 () {
  let array3 = [100, 44, 3, 334, 552, 11, 77, 14];

  for (let index = 0; index < array3.length; index++) {
    const element = array3[index];
    console.log(element);
  }
}
test2();


//დავალება 4 - დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘


function test3 () {
  
  let number1 = 77;
   if (number1 % 2 == 0 ){
    console.log(`${number1} this number is even`);
   } else {
    console.log(`${number1} this number is odd`);
   }

   }
   test3();


   //დავალება 5 - მოცემულია მასივი: let array = [1,2,3,4,5];
                   // for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1


   let array4 = [1, 2, 3, 4, 5];

   for (let i = array4.length - 1; i >= 0 ; i--) {

    console.log(array4[i]);
   }


   //დავალება 6 - ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრუწლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
  //  ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;



    let userFunction = () => 
      {

      age2: 22
    } 

    let ageAllowed = 18;

    if (userFunction.age2 >= ageAllowed) {                     

      console.log('სრულწლოვანი');
    } else {
      console.log('არასრულწლოვანი');

    }

    userFunction();
  


    //დავალება 7 - მოცემულია მასივი
    // ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი


      let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (let item2 of array5) {
        if (item2 == 5) {
          console.log('არის');
          break;
        }
      }


      //დავალება 8 - მოცემულია მასივი
     // გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

       let array6 = [1, 2, 3, 7, 6, 9];

       for (let item3 of array6) {
        if (item3 == 7) {
          continue;
        }
        console.log(item3);
       }







