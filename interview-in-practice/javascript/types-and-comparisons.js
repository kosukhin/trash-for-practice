// difference between "==" and "==="
/*
Оператор == Выполняет приведение типов перед выполнением сравнения, === не выполняет приведение типов
*/
// По умолчанию приведение типов приводит к числовому типу
// Объекты могут переопределять свой тип приведения поумолчанию через свойство Symbol.toPrimitive

// Приведение чисел - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion

// Приведение строк - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion

// Приведение булевых - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion

// Статья о неявном приведении типов Кайл симсон - https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md

/*

# Перевод в булев

if утверждение переводит выражение в булев тип неявно.
https://262.ecma-international.org/13.0/#sec-toboolean
*/
