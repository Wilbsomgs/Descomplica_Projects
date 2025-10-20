class Person {
  String name;
  int age;
  String endereco;

 Person(
  this.name,
  this.age,
  this.endereco
 );

 void introduce(){
  print("Olá, meu nome é: $name, tenho $age anos e moro no endereço: $endereco");
 }
}

void main(){
  var person = Person("Marcos Antônio", 32, "Rua Hidrolândia, 310");
  person.introduce();
}