public class PortaSegura extends Porta {
  private String chave;
  private boolean estaTrancada;

  public PortaSegura(String chave) {
    super();
    this.chave = chave;
    this.estaTrancada = false;
  }

  public void trancar(String chave) {
    if (this.estaTrancada) {
      System.out.println("A PortaSegura já estava trancada!");
    } else {
      if (this.estaAberta) {
        super.fechar();
      }

      this.estaTrancada = true;
      System.out.println("A PortaSegura foi trancada.");
    }
  }
}
