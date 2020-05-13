function Game24(numStr) {
  var a = numStr[0];
  var b = numStr[1];
  var c = numStr[2];
  var d = numStr[3];
  var operators = ["+", "-","*", "/" ];
  var literals = [];
  var foundResult = false;

  for (let i = 0; i < operators.length; i++) {
    for (let j = 0; j < operators.length; j++) {
      for (let k = 0; k < operators.length; k++) {
        // console.log(`${a} ${operators[i]} ${b} ${operators[j]} ${c} ${operators[k]} ${d}`);
        literals.push(
          `${a} ${operators[i]} ${b} ${operators[j]} ${c} ${operators[k]} ${d}`
        );
        literals.push(
          `(${a} ${operators[i]} ${b} ${operators[j]} ${c}) ${
            operators[k]
          } ${d}`
        );
        literals.push(
          `((${a} ${operators[i]} ${b}) ${operators[j]} ${c}) ${
            operators[k]
          } ${d}`
        );
        literals.push(
          `(${a} ${operators[i]} (${b} ${operators[j]} ${c})) ${
            operators[k]
          } ${d}`
        );
        literals.push(`(${a} ${operators[i]} ${b}) ${operators[j]} (${c} ${operators[k]} ${d})`);

        literals.push(
          `${a} ${operators[i]} (${b} ${operators[j]} ${c} ${
            operators[k]
          } ${d})`
        );
        literals.push(
          `${a} ${operators[i]} ((${b} ${operators[j]} ${c}) ${
            operators[k]
          } ${d})`
        );
        literals.push(
          `${a} ${operators[i]} (${b} ${operators[j]} (${c} ${
            operators[k]
          } ${d}))`
        );
        literals.push(
          `(${a} ${operators[i]} ${b}) ${operators[j]} ${c} ${
            operators[k]
          } ${d}`
        );
        literals.push(
          `${a} ${operators[i]} (${b} ${operators[j]} ${c}) ${
            operators[k]
          } ${d}`
        );
        literals.push(
          `${a} ${operators[i]} ${b} ${operators[j]} (${c} ${
            operators[k]
          } ${d})`
        );

        for (let index = 0; index < literals.length; index++) {
          
          const element = literals[index];
          if (eval(element.toString()) === 24) {
            //console.log("Element: " + element);
            foundResult = true;
            // console.log(element);
            return element;
          }
        }
      }
    }
  }

  if (!foundResult) {    

    return "no solution exists";
  }
}

//console.log(Game24("6789"));

function getPerms(str){
let l1 = [str[0],str[1],str[2],str[3]];
let perms=[];

for (let i = 0; i < l1.length; i++) {
  let l2 = Array.from(l1);
  l2.splice(i, 1);
  for (let j = 0; j < l2.length; j++) {
    let l3 = Array.from(l2);
    l3.splice(j, 1);
    for (let k = 0; k < l3.length; k++) {            
      let l4 = Array.from(l3);
      l4.splice(k, 1);
      for (let l = 0; l < l4.length; l++) {
        perms.push(l1[i]+ l2[j]+ l3[k]+l4[l]);
    }
  }
}
}
return perms;
}

// getPerms("1234").forEach(x => console.log(x)  );



function solve24(numStr) {
  let foundSolution = false;
  let perms = getPerms(numStr);
  for (const item of perms) {
     let result = Game24(item);
    //  console.log(item, " : ", result);
     if(result != "no solution exists"){
       foundSolution=true;
       return result.split(" ").join("");
     }
  }

  if(!foundSolution){
    return "no solution exists"
  }
}