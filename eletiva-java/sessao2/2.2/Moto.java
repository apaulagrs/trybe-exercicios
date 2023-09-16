public class Moto extends Veiculo {
  private String modelo;

  public void acelerar() {
    System.out.println("Metodo acelerar da classe Moto");
  }

  public void mostrar() {
    super.acelerar();
    this.acelerar();
  }
}
