describe('Forms App', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  })
const textInput = () => cy.get('input[name=text]');
const  emailInput =() => cy.get('input[name=email');
const passwordInput = () => cy.get('input[name=password]');

it('sanity check make sure tests work', () => {
  expect(1 + 2).to.equal(3);
  expect(2 + 2).not.equal(5);
})















})