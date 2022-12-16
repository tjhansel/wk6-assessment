const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
   test('return array', () =>{
    expect(shuffleArray).toReturn()
     
   })

    const expected = ['Mechi', 'Beta'];
    it('matches even if received contains additional elements', () => {
      expect(['Mechi', 'Beta', 'Crowbar']).toEqual(expect.arrayContaining(expected));
    });
    // it('does not match if received does not contain expected elements', () => {
    //   expect(['Beta', 'Crowbar']).not.toEqual(expect.arrayContaining(expected));
    // });
  });
