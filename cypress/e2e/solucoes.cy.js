// <reference types="Cypress"/>
describe.only('Pedido de Soluções', () => {
    // Realiza o setup antes de cada teste
    beforeEach(() => {
        // Visita a página de login
        cy.visit('https://b2bdev.bausch.com.br/b2b/login');
    });

    // Teste principal para realizar um pedido de bonificação
    it('Realizar um novo pedido de bonificação', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderBonificacao();
        completeBonificacaoOrder();
    });

    // Teste principal para realizar uma compra futura
    it('Realizar uma compra futura', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderFutura();
        completeOrderFutura();
    });

    // Teste principal para realizar uma compra pontual
    it('Realizar uma compra pontual', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderPontual();
        completeOrderPontual();
    });

    // Teste principal para realizar um pedido de amostra
    it('Realizar um Pedido de amostra', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderAmostra();
        completeOrderAmostra();
    });

    // Teste principal para realizar um pedido de doação para funcionário
    it('Realizar um Pedido de Doação para Funcionário', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseDoacaoParaFuncionario();
        createNewOrderDoacaoParaFuncionario();
        completeOrderDoacaoParaFuncionario();
    });
 
    // Teste principal para realizar um pedido de envio de remessa
    it('Realizar um Pedido de Envio de Remessa', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseEnvioDeRemessa();
        createNewOrderEnvioDeRemessa();
        completeOrderEnvioDeRemessa();
    });     

    // Função de login
    function login(username, password) {
        cy.get(':nth-child(1) > .input-default').type(username);
        cy.wait(2000); // Espera 2 segundos
        cy.get(':nth-child(2) > .input-default').type(password);
        cy.wait(2000); // Espera 2 segundos
        cy.get('#button-login').click();
    }

    // Função para navegação até a seção de compra doação para funcionário
    function navigateToPurchaseDoacaoParaFuncionario() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0008000456');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para navegação até a seção de compra
    function navigateToPurchase() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('antonio');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item:nth-child(2) > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para navegação até a seção de compra envio de remessa
    function navigateToPurchaseEnvioDeRemessa() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('antonio');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item:nth-child(2) > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para criar um novo pedido de bonificação
    function createNewOrderBonificacao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Bonificação').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-PACKON\\ RENU\\ FRESH\\ 355ML\\+120ML').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(2000); // Esperar 2 segundos

    }

    // Função para completar o pedido de bonificação
    function completeBonificacaoOrder() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > div > select').select('Campanha Promocional');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > input').type('mark');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#confirm-button').click();
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }

    // Função para criar um novo pedido de compra futura
    function createNewOrderFutura() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra futura').click();
        cy.get('#orders-available > md-toolbar > div > a > md-icon').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('#item-PACKON\\ RENU\\ FRESH\\ 355ML\\+120ML').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de compra futura
    function completeOrderFutura() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('Boleto');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div').click();
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').should('be.visible');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('PGTO 20 DD');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
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
        cy.wait(2000); // Esperar 2 segundos
        cy.get('#orders-available > md-toolbar > div > a > md-icon').click();
        cy.get('#item-PACKON\\ RENU\\ FRESH\\ 355ML\\+120ML').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de compra pontual
    function completeOrderPontual() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('Boleto');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div').click();
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div > select').should('be.visible');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div > select').select('PGTO 20 DD');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Amostra').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('#item-RENU\\ ADVANCED\\ 60ML\\ -\\ AMOSTRA').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de amostra
    function completeOrderAmostra() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }

    // Função para criar um novo pedido de doação para funcionário
    function createNewOrderDoacaoParaFuncionario() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Doação para funcionário').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-PACKON\\ RENU\\ FRESH\\ 355ML\\+120ML').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(2000); // Esperar 2 segundos

    }

    // Função para completar o pedido de doação para funcionário
    function completeOrderDoacaoParaFuncionario() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > div > select').select('Uso próprio');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > input').type('Mark 2');
        // Completa o pedido
        cy.wait(5000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click()
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        // Finaliza a ação
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }
    
    // Função para criar um novo pedido de envio de remessa
    function createNewOrderEnvioDeRemessa() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Soluções').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Envio de remessa').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#orders-available > md-toolbar > div > a').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-PACKON\\ RENU\\ FRESH\\ 355ML\\+120ML').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(5000); // Esperar 5 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de envio de remessa
    function completeOrderEnvioDeRemessa() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click()
        // Completa o pedido
        cy.wait(5000); // Espera 2 segundos
        //Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
        .should('exist')
        .should('be.visible')
        .click();
        cy.wait(2000); // Espera 2 segundos
        // Finaliza a ação
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }
    
});

