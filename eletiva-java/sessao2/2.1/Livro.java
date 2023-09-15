public class Livro {
  String titulo;
  int numeroDePaginas;
  String isbn;

  public Livro(String mensagem) {
    System.out.println(mensagem);
  }

  Livro(int paginas) {
    this.numeroDePaginas = paginas;
  }

  public int retornarNumeroDePaginas() {
    return numeroDePaginas;
  }

  public static void main(String[] args) {
    Livro livro = new Livro(100);
    int numeroDePaginas = livro.retornarNumeroDePaginas();
    System.out.println(numeroDePaginas);
  }
}
