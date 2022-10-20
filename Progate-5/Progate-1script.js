// 以下のAnimalクラスの定義部分を切り取って、animal.jsに貼り付けてください


// 以下のDogクラスの定義部分を切り取って、dog.jsに貼り付けてください

// 以下はAnimalクラス, Dogクラスの定義部分ではないので残してください
const dog = new Dog("レオ", 4, "チワワ");
dog.info();

// Animalクラスの定義部分を貼り付けてください
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
