'use strict'
// to return file csv to an object of array
var fs = require('fs');
class Parser {
  constructor(file){
    this.file = file;
    this.result = []
  }

  get attribute(){
    let file = fs.readFileSync(this.file, 'utf-8').split('\n');
    let dataAttributes = file[0].split(',');
    return dataAttributes;
  }

  get data(){
    let file = fs.readFileSync(this.file, 'utf-8').split('\n');
    let data = [];
    let attrLength = [];
    let attr = file[0].split(',');
    for (let i=0; i<file.length; i++){
      data[i]=file[i].split(',')
    }
    for (let i=1; i<file.length; i++){
      let obj = {}
      for(let j=0; j<attr.length; j++){
        obj[attr[j]] = data[i][j]
      }
      this.result.push(obj);
    }
    this.result.pop();
    return this.result;
  }

  get size(){
    return this.result.length-1;
  }
}

// var parser = new Parser('dummy.csv');
//
// console.log(parser.data);

module.exports = Parser;
