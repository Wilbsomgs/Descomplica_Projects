// Funnçoes
void funcaoSemParametros(){
  print('Hello');
}

void funcaoComParametros(String name){
  print('Hello $name');
}

int funcaoComRetorno(int a, int b ){
  int result = a + b;
  print("Resultado: $result");
  return result;
}

int multiply(int a, int b)=> a * b ;

void main(){
  print('\nFunções Sem paramêtros');
  funcaoSemParametros();

  print('\nFunções Com paramêtros');
  funcaoComParametros('Wilbsom');
  
  print('\nFunções Com Retorno');
  funcaoComRetorno(10, 5);

  // Função anonima 
  print('\nFunções anônimas');
  var list = ['Banana', 'Apples', 'Oranges'];

  list.forEach((item){
    print('Item: $item');
  });

  print('\nArrow function');
  print('Multiply: ${multiply(32, 12)}');
}
