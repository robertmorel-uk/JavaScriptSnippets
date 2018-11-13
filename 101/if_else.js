let x = 1;

if ((x = 1)) {
  console.log(1);
} else if ((x = 2)) {
  console.log(2);
} else {
  console.log(0);
}

// alternative syntax

if ((x = 1)) console.log(1);
else if ((x = 2)) console.log(2);
else console.log(0);
