/* eslint-disable no-undef */
describe('pages can be opened', () => {
    beforeEach(function () {
        cy.visit('http://localhost:3000');
    });
    it('a home page (component) that displays the country data', () => {
        // eslint-disable-next-line no-undef
        cy.contains('country');
        cy.contains('Name');
        cy.contains('Afghanistan');
        cy.contains('Region');
        cy.contains('Asia');
        cy.contains('Population');
        cy.contains('Language');
        cy.contains('Dari');
        cy.contains('Pashto');
        cy.contains('Turkmen');
        cy.contains('Flag');
    });
    it('When you click on the button, it should navigate to another page showing detailed information about that country ', () => {
        cy.get('tr td:nth-child(6):first').click();
        cy.contains('Afghanistan');
        cy.contains('Kabul');
        cy.contains(
            'The country belongs to Asia and Southern Asia sub-region. Located at the 33 °N and 65 °W, this country has population of 40218234 and it has gained the independent, according to the CIA World Factbook'
        );
    });
    it.only('it allows you to search by country name', () => {
        cy.get('#input-adornment').click().type('Finland');
        cy.contains('Finnish');
        cy.contains('Swedish');
        cy.contains('Europe');
        cy.get('tr td:nth-child(6):first').click();
        cy.contains('Helsinki');
        cy.contains(
            'The country belongs to Europe and Northern Europe sub-region. Located at the 64 °N and 26 °W, this country has population of 5530719 and it has gained the independent, according to the CIA World Factbook.'
        );
    });
    it('when displaying country data, the country is order by name and pagination only shows 5 countries per page', () => {
        cy.get('tr:nth-child(1) td:nth-child(2):first').contains('Afghanistan');
        cy.get('tr:nth-child(5) td:nth-child(2):first').contains(
            'American Samoa'
        );
        cy.get('tr:nth-child(6) td:nth-child(2):first').should('not.exist');
    });
});
