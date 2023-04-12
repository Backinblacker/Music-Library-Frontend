describe('Testing Music Project', () => {
  describe('visit site', () =>{
    it('passes', () => {
      cy.visit('http://localhost:3000')
      //Testing Add Song
      // cy.get('[data-test=NewSong]').contains('Add New Song').click()
      // cy.get('[name="title"]')
      //   .type('The Nights')
      //   .should('have.value', 'The Nights')
      // cy.get('[name="album"]')
      //   .type('Avicii')
      //   .should('have.value', 'Avicii')
      // cy.get('[name="artist"]')
      //   .type('Avicii')
      //   .should('have.value', 'Avicii')
      // cy.get('[name="genre"]')
      //   .type('House')
      //   .should('have.value', 'House')
      // cy.get('[name="release_date"]')
      //   .type('2015-01-11')
      //   .should('have.value', '2015-01-11')
      // cy.get('[name="running_time"]')
      //   .type('179')
      //   .should('have.value', '179')
      // cy.get('button').click()

      //Testing Filter Songs
      // cy.get('[data-test=SearchSongs]').contains('Search').click()
      // cy.get('input')
      //   .type("Ain't That Some")
      //   .should('have.value', "Ain't That Some")
      //   cy.get('[type="submit"]').click()
    });
  });
});





//Testing Delete Song