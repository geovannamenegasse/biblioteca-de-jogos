describe('Teste End-to-End', () => {

    // beforeEach(() => {
    
    // })


    it('Publicar um jogo', () => {
        cy.login('geovannamenegasse', '12345')
        cy.visit('http://localhost:4200/game/create')

        cy.get('[id="name"]')
        .type('Jogo de teste')
        .should('have.value', 'Jogo de teste')

        cy.get('[id="genre"]')
        .type('rpg')
        .should('have.value', 'rpg')

        cy.get('[id="description"]')
        .type('jogo muito top')
        .should('have.value', 'jogo muito top')

        cy.get('[id="formFile"]')
            .selectFile('cypress/fixtures/skyrim.png')
        
        cy.contains('Salvar').click()
        cy.wait(2000)
        cy.visit('http://localhost:4200/game/store')
        cy.wait(10000)
    });

    it('Cadastrar usuário', () => {
        
      cy.visit('http://localhost:4200/client/create')
      
      cy.get('[id="name"]')
      .type('Cliente teste')
      .should('have.value', 'Cliente teste')

      cy.get('[id="login"]')
      .type('teste@gmail.com')
      .should('have.value', 'teste@gmail.com')

      cy.get('[id="password"]')
      .type('senhateste')
      .should('have.value', 'senhateste')
      
      cy.contains('Salvar').click()
      cy.wait(5000)
      cy.visit('http://localhost:4200/login')
    });

    it('Comprar jogo', () => {
        
      cy.visit('http://localhost:4200/game/store')
      
      cy.get('[id="Skyrim"]').select('Jogo de teste',{force: true}).click()
      cy.contains('Sim').click()   

      cy.visit('http://localhost:4200/game/biblioteca')
      cy.contains('Jogo de teste').should('exist')

    });

})
