// // let str_input = prompt('enter the String:');
// // for(let i = str_input.length - 1 ; i >=0 ; i-- ) {
// //     let newString = '';
// //     newString += str_input[i];
// //     console.log(...newString);
// // }


// /**bai 2 */
// // let input = prompt('enter the string:');
// // var splitStr = input.toLowerCase().split(" ");

// // console.log(splitStr);
// // for (let i = 0; i < splitStr.length; i++) {
// //     if (true) {
// //         console.log(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));;
// //         ;
// //     }
// // }

// /**bai 3 */

// // let arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// // let newArr = [];
// // for (let i = 0; i < arr.length; i++) {
// //     if (newArr.indexOf(arr[i]) === -1) {
// //         newArr.push(arr[i])
// //     }
// // }
// // console.log(newArr);

// /**bai 4 */
// let minX = [
//     {
//         name: 'nguyen van a',
//         age: 28,
//         luong: 10000,
//         chucvu: 'giam doc'

//     },
//     {
//         name: 'nguyen van B',
//         age: 24,
//         luong: 5000,
//         chucvu: 'thu ki'

//     },
//     {
//         name: 'nguyen van C',
//         age: 20,
//         luong: 2000,
//         chucvu: 'nhan vien'

//     },
// ];

// let isLoop = true;
// while (isLoop) {
//     let input = prompt('enter the R/C/U/D :');
//     if (input === 'C') {
//         let newName = prompt('enter the new name :');
//         let newAge = Number(prompt('enter the new age:'));
//         let newLuong = Number(prompt('enter new Luong:'));
//         let newChucVu = prompt('enter new chuc vu:')
//         let newObj = {
//             name: newAge,
//             age: newAge,
//             luong: newLuong,
//             chucvu: newChucVu
//         }
//         minX.push(newObj);
//         for (let i = 0; i < minX.length; i++) {
//             console.log(`Name : ${minX[i].name}`);
//             console.log(`age : ${minX[i].age}`);
//             console.log(`luong : ${minX[i].luong}`);
//             console.log(`chuc vu : ${minX[i].chucvu}`);
//             console.log('--------------------------------');
//         }
//         ;
//     } else if (input === 'R') {
//         for (let i = 0; i < minX.length; i++) {
//             console.log('------------------------------');
//             for (let key in minX[i]) {
//                 console.log(`${key}: ${minX[i][key]}`);
//             }
//         }
//     } else if (input === 'U') {
//         let inputIndexOf = Number(prompt('enter the index:'));
//         let indexOf = inputIndexOf - 1;
//         for (let i = 0; i < minX.length; i++) {
//             if (indexOf === minX.indexOf(minX[i])) {
//                 let updateName = prompt('enter name :')
//                 let updateAge = prompt('enter age :')
//                 let updateLuong = prompt('enter luong :')
//                 let updateChucVu = prompt('enter chucvu :')
//                 let newName = minX[i].name = updateName;
//                 let newAge = minX[i].age = updateAge;
//                 let newLuong = minX[i].luong = updateLuong;
//                 let newChucVu = minX[i].chucvu = updateChucVu;
//                 console.log(`Name : ${newName}`);
//                 console.log(`age : ${newAge}`);
//                 console.log(`luong : ${newLuong}`);
//                 console.log(`chuc vu : ${newChucVu}`);
//                 console.log('--------------------------------');


//             }
//         }
//     } else if (input === 'D') {
//         let inputIndexOf = Number(prompt('enter the index:'));
//         let indexOf = inputIndexOf - 1;
//         for (let i = 0; i < minX.length; i++) {
//             if (indexOf === minX.indexOf(minX[i])) {
//                 minX.splice(indexOf, 1);
//                 console.log('------------------------------');
//                 console.log();
//             }
//         }
//     } else if (input === 'E') {
//         alert('thoat ');
//         break;
//     }

// }