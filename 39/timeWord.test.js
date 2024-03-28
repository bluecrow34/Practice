

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');

describe('timeToWords', () => {
    it('should convert 12:00 to twelve o\'clock am', () => {
        expect(timeToWords('12:00')).to.equal('twelve o\'clock am');
    });

    it('should convert 08:15 to eight fifteen am', () => {
        expect(timeToWords('08:15')).to.equal('eight fifteen am');
    });

    it('should convert 13:45 to one forty-five pm', () => {
        expect(timeToWords('13:45')).to.equal('one forty-five pm');
    });

  
});

  });
});