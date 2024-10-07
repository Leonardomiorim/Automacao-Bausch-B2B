// <reference types="Cypress"/>
describe.only('Pedido de Lentes', () => {
    // Realiza o setup antes de cada teste
    beforeEach(() => {
        // Visita a página de login
        cy.visit('https://b2bdev.bausch.com.mx/b2b/login');
    });

    // Teste principal para realizar uma compra marketplace
    it.only('Realizar uma nova compra marketplace', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseMarketplace();
        createNewOrderMarketplace();
        completeOrderMarketplace();
    });

    // Teste principal para realizar uma compra pontual
    it.only('Realizar uma compra pontual', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderPontual();
        completeOrderPontual();
    });

    // Teste principal para realizar um pedido de amostra
    it.only('Realizar uma amostra', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseAmostra();
        createNewOrderAmostra();
        completeOrderAmostra();
    });
        
    // Função de login
    function login(username, password) {
        cy.get(':nth-child(1) > .input-default').type(username);
        cy.wait(2000); // Espera 2 segundos
        cy.get(':nth-child(2) > .input-default').type(password);
        cy.wait(2000); // Espera 2 segundos
        cy.get('#button-login').click();
    }

    // Função para navegação até a seção de uma compra marketplace
    function navigateToPurchaseMarketplace() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0070000140');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(1) > md-list-item > div').click();
    }

    // Função para navegação até a seção de compra pontual
    function navigateToPurchase() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010001154');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item:nth-child(2) > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(1) > md-list-item > div').click();
    }
    
    // Função para navegação até a seção de amostra
    function navigateToPurchaseAmostra() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010001154');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item:nth-child(2) > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(1) > md-list-item > div').click();
    }    

    // Função para criar uma compra marketplace
    function createNewOrderMarketplace() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra Marketplace').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Soflens\\ 59').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-9.00');
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-distributor.ng-scope > div:nth-child(1) > div > div:nth-child(1) > div > select').select('BERDICO');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-distributor.ng-scope > div.distributor-controls-container.layout-row.flex > button').click();
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de uma compra marketplace
    function completeOrderMarketplace() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(3) > input').type('Campanha Promocional');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(4) > input').type('mark');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }

    // Função para criar um novo pedido de compra pontual
    function createNewOrderPontual() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra pontual').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-KIT\\ INICIO\\ ADV\\ MPS\\ SPANISH\\ VTA').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item').click();
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click(); 
    }

    // Função para completar o pedido de compra pontual
    function completeOrderPontual() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(3) > div > select').select('0010001154 - ALMACEN DE DROGAS')
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(4) > div > select').select('Boleto');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > div').click();
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > div > select').should('be.visible');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > div > select').select('45 dias BR');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }

    // Função para criar um novo pedido de amostra
    function createNewOrderAmostra() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Amostras').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Biotrue\\ One\\ Day').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div > div > select').select('-9.00');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item').click();
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click(); 
    }

    // Função para completar o pedido de amostra
    function completeOrderAmostra() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div.input-container.ng-scope.layout-align-start-stretch.layout-column.flex > div > select').select('0010001154 - ALMACEN DE DROGAS')
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(3) > input').type('Mark')
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(4) > input').type('Obi-wan')
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }    

});

