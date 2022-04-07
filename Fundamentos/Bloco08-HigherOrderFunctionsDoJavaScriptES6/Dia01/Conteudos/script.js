const manha = () => "Acordando!!";

const cafe = () => "Bora tomar café!!";

const noite = () => "Partiu dormir!!";

const doingThings = (func) => {
  const resposta = func();
  console.log(resposta);
}

doingThings(manha);
doingThings(cafe);
doingThings(noite);
