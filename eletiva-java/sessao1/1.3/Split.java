public class Split {

//  public static void main(String[] args) {
//    String casasTexto = "Grifinória123Sonseria456Corvinal789Lufa-Lufa";
//    String casas[] = casasTexto.split("\\d+");
//
//    for (String casa : casas) {
//      System.out.println(casa);
//    }
//  }

  public static void main(String[] args) {
    String frase = "caneta,lápis,lapiseira,caderno,borracha";
    String formatado[] = frase.split(",", 3);

    for (String novo_formato : formatado) {
      System.out.println(novo_formato);
    }
  }

}
