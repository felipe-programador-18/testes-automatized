const juros = require('./juros')
const expect = require('chai').expect


describe('test module about invoices', () =>{
   it('resolve code about', () => {
       const Test1010 = juros.Caljuros(1000,0.01,1)
       expect(Test1010).to.equal(1010)
   })
})

