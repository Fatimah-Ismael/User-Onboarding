describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  const textInput = () => cy.get('input[name=text]');
  const  emailInput =() => cy.get('input[name=email');
  const passwordInput = () => cy.get('input[name=password]');
  const submitInput = () => cy.get(`button[id="submitInput"]`);
  
  it('sanity check make sure tests work', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.equal(5);

  })
it('the proper elements are showing', () => {
  textInput().should('exist');
  emailInput().should('exist');
  passwordInput().should('exist');
  submitInput().should('exist');
})

describe(' filling out the inputs', () =>{
  it('can type in the inputs', () => {
    textInput()
      .should('have.value', '')
      .type('fatimah')
      .should('have.value', 'fatimah');
    emailInput()
      .should('have.value', '')
      .type('fatimah@aol.com')
      .should('have.value', 'fatimah@aol.com');
    passwordInput()
      .should('have.value', '')
      .type('cypress')
      .should('have.value', 'cypress');
  })
  
})
describe('can sumbit the form data', () => {
  it('submit button starts out disabled', () => {
    submitInput().should('be.disabled');
  })
  it('submit button enabled when all fields are filled', () => {
    textInput().type('fatimah');
    emailInput().type('fatimah@aol.com');
    passwordInput().type('cypress');
    submitInput().should('not.be.disabled');
  })
})
describe('form validation', () => {
  it('check if inputs are blank', () => {
    textInput().should('have.value', '');
    emailInput().should('have.value', '');
    passwordInput().should('have.value', '');
  })
})

})

