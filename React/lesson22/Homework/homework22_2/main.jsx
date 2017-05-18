/*
 ### Задача 2
 Создайте класс User, который наследует от класса Person (из предыдущей задачи),
 со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
 Создайте несколько экземпляров класса и запишите их в массив users. /
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';



let Person=require ('.././homework22_1/main.jsx');

class User extends Person{
        constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male", signUpDate = 0){
            super(firstName, lastName, age, gender)

            this.signUpDate=signUpDate;
            this.id=++User.id;
        }
}

User.defaultProps={signUpDate:0, id:0}
User.id=0;

var users=[];


users.push(new User());
users.push(new User("Petr","Petrov"));



