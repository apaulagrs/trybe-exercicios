public class Calculadora {
  private int primeiroNumero;
  private int segundoNumero;

  public void setPrimeiroNumero(int primeiroNumero) {
    this.primeiroNumero = primeiroNumero;
  }

  public void setSegundoNumero(int segundoNumero) {
    this.segundoNumero = segundoNumero;
  }

  public int somar() {
    int resultado = primeiroNumero + segundoNumero;
    return resultado;
  }

  public int subtrair() {
    int resultado = primeiroNumero - segundoNumero;
    return resultado;
  }

  public int multiplicar() {
    int resultado = primeiroNumero * segundoNumero;
    return resultado;
  }

  public int dividir() {
    int resultado = primeiroNumero / segundoNumero;
    return resultado;
  }

  public static void main(String[] args) {
    Calculadora calculadora = new Calculadora();

    calculadora.setPrimeiroNumero(10);
    calculadora.setSegundoNumero(7);

    System.out.println("O resultado da subtração é: " + calculadora.subtrair());
  }
}
