/*global Physician:true*/

describe('Physician', () => {
  let physician;
  beforeEach(() => {
    physician = new Physician('Asclepius');
  });

  it('has a name', () => {
    expect(physician.name).toBe('Asclepius');
  });
});
