const files = require('./files')
//when i build one const expect i have get require. expect of chai too.
const expect = require('chai').expect
const fs = require('fs')
const sinon = require('sinon')


describe('test directory ', () => {
    it('reads a directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, cb) =>{
         cb(null, ['file1.txt'])
        })
      
        return files.readdir('./').then( list => {
          expect(list.length).to.equal(1)
      })
    })
} )