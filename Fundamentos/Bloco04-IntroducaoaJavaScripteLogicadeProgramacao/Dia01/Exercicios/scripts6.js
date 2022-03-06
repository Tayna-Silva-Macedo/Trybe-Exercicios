let piece = "Queen";
let chessPiece = piece.toLowerCase();

if (chessPiece === "king") {
  console.log("O rei anda em todas as direções, uma casa por vez.");
} else if (chessPiece === "queen") {
  console.log("A rainha anda em todas as direções, quantas casas quiser.");
} else if (chessPiece === "bishop") {
  console.log("O bispo anda na diagonal.");
} else if (chessPiece === "rook") {
  console.log("A torre anda na vertical e horizontal.");
} else if (chessPiece === "knight") {
  console.log("O cavalo anda em L.");
} else if (chessPiece === "pawn") {
  console.log("O peão anda em frente.");
} else {
  console.log("Peça inválida!");
}