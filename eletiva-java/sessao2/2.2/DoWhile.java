import java.util.Random;

public class DoWhile {

  public static void main(String[] args) {
    int tentativas = 1;
    do {
      System.out.println("Tentando... ");
      tentativas++;
    } while(tentativas == 4);
  }
}
