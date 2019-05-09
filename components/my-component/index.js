import _ from 'lodash'
import './style.css'
import testPng from './test.png'
import testXml  from './test.xml'


function commponet(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack----'], '');
    element.classList.add('hello')

    var myIcon = new Image();
    myIcon.src = testPng
    element.appendChild( myIcon )

    console.log(testXml);
    return element;
}

document.body.appendChild( commponet())