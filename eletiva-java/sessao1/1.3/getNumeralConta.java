public class getNumeralConta {

  public static void main(String[] args) {
    String nomes = "Maria Magali, Magali da Silva, Magali Medeiros";
    String pessoa = "Laura";

    nomes = nomes.replaceAll("Magali", pessoa);

    System.out.println(nomes);
  }

}
