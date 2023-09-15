public class Carro {
  private String nome;
  private String montadora;
  private int ano;

  public String getNome() {
    return nome;
  }

  public String getMontadora() {
    return montadora;
  }

  public int getAno() {
    return ano;
  }

  public Carro(String nomeCarro, String montadoraCarro, int anoCarro) {
    nome = nomeCarro;
    montadora = montadoraCarro;
    ano = anoCarro;
  }

  public static void main(String[] args) {
    Carro carro = new Carro("Creta", "Hyunday", 2021);

    System.out.println("O nome do carro é: " + carro.getNome());
    System.out.println("A montadora do carro é: " + carro.getMontadora());
    System.out.println("O ano do carro é: " + carro.getAno());
  }
}
