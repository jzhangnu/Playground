function doWork(){
  throw new Error('Unable to decrypt the thing you wanted');
}

try {
    doWork();
} catch(e) {
  console.log('something went wrong');
  console.log(e.message);
} finally {
  console.log('finally block executed');
}

console.log('try catch ended');
