
function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   if (y === 0) {
      return "Error: no definida";
  } else {
      return x / y;
  }
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   if (y === 0) {
      return "Error: no definida";
  } else {
      return x % y;
  }
}
