/**
 * Created by Dima on 26.05.2017.
 */
/*###Задача 2
Создайте пустой(неинициализированный) буфер длиной 100 байт, заполните его байтами со значениями от 0 до 99 и выведите в консоль
его содержимое.*/

const buf = Buffer.alloc(100);

var data=[];

for (var i=0;i<=99;i++){
    data.push(i);
}

const buf1 = Buffer.from(data); // создает новый буфер, содержащий ASCII байты, в которых закодировано слово buffer



console.log('buffer converted to string: ' + buf1.toString())