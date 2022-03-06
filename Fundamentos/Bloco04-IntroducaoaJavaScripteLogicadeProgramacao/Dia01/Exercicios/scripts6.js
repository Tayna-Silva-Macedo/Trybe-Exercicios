let chessPiece = "KING";

switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("O rei anda em todas as direções, uma casa por vez.");
    break;
  case "queen":
    console.log("A rainha anda em todas as direções, quantas casas quiser.");
    break;
  case "bishop":
    console.log("O bispo anda na diagonal.");
    break;
  case "rook":
    console.log("A torre anda na vertical e horizontal.");
    break;
  case "knight":
    console.log("O cavalo anda em L.");
    break;
  case "pawn":
    console.log("O peão anda em frente.");
    break;
  default:
    console.log("Peça inválida!");
    break;
}