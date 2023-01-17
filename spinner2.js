// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\|    '); 
// }, 900);

const arr = ["|", "/", "-", "\\", "|"];

let t = 0;

const spinner = () => {
  for (let i in arr) {
    t = t + 200;
    (function() {
      setTimeout((t) => {
        process.stdout.write(`\r\ ${arr[i]}  `);
      }, t);
    })(t);
  }
  setTimeout(() =>{
    process.stdout.write('\n');
  }, t)
};

spinner();
