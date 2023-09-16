public class MainCalculadora {

  public static void main(String[] args) {
    Calculadora calculadora = new Calculadora();

    System.out.println("soma(int a, int b): " + calculadora.soma(3, 7));
    System.out.println("soma(int a, int b, int c): " + calculadora.soma(3, 7, 5));
    System.out.println("soma(double a, double b): " + calculadora.soma(3.5, 7.9));
  }
}
