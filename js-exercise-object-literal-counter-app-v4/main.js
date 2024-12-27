function counterApp(arr) {
    if (arr === undefined) {
        return "Invalid input";
      }

    if (arr.length === 0) {
        return "Data not found";
      }
    
    let result = {};
    
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // Jika elemen sudah ada di objek, tambahkan 1
        if (result[element]) {
          result[element]++;
        } else {
          // Jika elemen belum ada, inisialisasi dengan nilai 1
          result[element] = 1;
        }
      }
    
      return result ; 
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
