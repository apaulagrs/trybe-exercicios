public class Porta {
  private int tamanho;
  private  String material;
  protected boolean estaAberta;

  public int getTamanho() {
    return tamanho;
  }

  public void setTamanho(int tamanho) {
    this.tamanho = tamanho;
  }

  public String getMaterial() {
    return material;
  }

  public void setMaterial(String material) {
    this.material = material;
  }

  public boolean isEstaAberta() {
    return estaAberta;
  }

  public void setEstaAberta(boolean estaAberta) {
    this.estaAberta = estaAberta;
  }

  public void abrir() {
    if (estaAberta) {
      System.out.println("A porta já estava aberta!");
    } else {
      estaAberta = true;
      System.out.println("A porta foi aberta");
    }
  }
  public void fechar() {
    if (!estaAberta) {
      System.out.println("A porta já estava fechada");
    } else {
      estaAberta = false;
      System.out.println("A porta foi fechada");
    }
  }
}
