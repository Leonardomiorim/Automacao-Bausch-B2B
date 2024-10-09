describe.only('Pedido de Lentes', () => {
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

    // Teste principal para realizar um pedido de devolução
    it('Realizar um Pedido de devolução', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseDevolucao();
        createNewOrderDevolucao();
        completeOrderDevolucao();
    });

    // Teste principal para realizar um pedido de troca
    it('Realizar um Pedido de Troca', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseTroca();
        createNewOrderTroca();
        completeOrderTroca();
    });
   
    // Teste principal para realizar um pedido de envio de remessa
    it('Realizar um Pedido de Envio de remessa', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseEnvioDeRemessa();
        createNewOrderEnvioDeRemessa();
        completeOrderEnvioDeRemessa();
    });
    
    // Teste principal para realizar um pedido de remessa da consignação
    it('Realizar um Pedido de Remessa da Consignação', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseRemessaDaConsignacao();
        createNewOrderRemessaDaConsignacao();
        completeOrderRemessaDaConsignacao();
    });    

    // Teste principal para realizar um pedido de retorno simbólico da consignação
    it('Realizar um Pedido de Retorno simbolico da consignação', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseRetornoSimbolicoDaConsignacao();
        createNewOrderRetornoSimbolicoDaConsignacao();
        completeOrderRetornoSimbolicoDaConsignacao();
    }); 
    
    // Função de login
    function login(username, password) {
        cy.get(':nth-child(1) > .input-default').type(username);
        cy.wait(2000); // Espera 2 segundos
        cy.get(':nth-child(2) > .input-default').type(password);
        cy.wait(2000); // Espera 2 segundos
        cy.get('#button-login').click();
    }

    // Função para navegação até a seção de compra principal (antonio)
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
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010026794');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para navegação até a seção de devolução
    function navigateToPurchaseDevolucao() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010022270');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para navegação até a seção de troca
    function navigateToPurchaseTroca() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010022270');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }
    
    // Função para navegação até a seção de remessa da consignação
    function navigateToPurchaseRemessaDaConsignacao() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010022270');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }
    
    // Função para navegação até a seção de retorno simbólico da consignação
    function navigateToPurchaseRetornoSimbolicoDaConsignacao() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010021608');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }    

    // Função para criar um novo pedido de bonificação
    function createNewOrderBonificacao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Bonificação').click();
        cy.wait(2000); // Espera 2 segundos
        // Usando o ID com os escapes
        cy.get('#item-Lente\\ Intra-Ocular\\ LOOP\\ ASFERICA').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div > div > select').select('+5.00');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div.main-container.visible > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra futura').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-AQ500G-D').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra pontual').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Lente\\ Intra-Ocular\\ LOOP\\ ASFERICA').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div > div > select').select('+5.00');
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

    // Função para criar um novo pedido de devolução
    function createNewOrderDevolucao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Devolução').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('#item-AKREOS\\ ADAPT\\ AO').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de devolução
    function completeOrderDevolucao() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > div > select').select('Acidente de veículo');
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('#confirm-button').click();
        cy.wait(2000); //Esperar 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }

    // Função para criar um novo pedido de troca
    function createNewOrderTroca() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Troca').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-AKREOS\\ ADAPT\\ AO').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div:nth-child(6) > div.input-container.ng-scope > div > select').select('0.00');
        cy.wait(3000); //Esperar 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(5000); // Esperar 5 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de troca
    function completeOrderTroca() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > div > select').select('Troca dioptria');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
        cy.wait(2000);
        cy.get('#confirm-button').click();
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
    
    // Função para criar um novo pedido de envio de remessa
    function createNewOrderEnvioDeRemessa() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Envio de remessa').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div.md-dialog-container.ng-scope > md-dialog > md-toolbar > div > a > md-icon').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-Lente\\ Intra-Ocular\\ Envista\\ Torica').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('+6.00');
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(2) > div > select').select('+1.25')
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de envio de remessa
    function completeOrderEnvioDeRemessa() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark 1');
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

    // Função para criar um novo pedido de remessa da consignação
    function createNewOrderRemessaDaConsignacao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Remessa da Consignação').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('#item-Lente\\ Intra-Ocular\\ LOOP\\ ASFERICA').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div > div > select').select('+5.00');
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de remessa da consignação
    function completeOrderRemessaDaConsignacao() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click()
        cy.wait(2000);
        cy.get('#confirm-button').click();
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
    
    // Função para criar um novo pedido de retorno simbólico da consignação
    function createNewOrderRetornoSimbolicoDaConsignacao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Cirúrgico').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Retorno Simbólico da Consignação').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div.md-dialog-container.ng-scope > md-dialog > md-toolbar > div > a > md-icon').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-SOF\\ POR\\ AO\\+').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de retorno simbólico da consignação
    function completeOrderRetornoSimbolicoDaConsignacao() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > div > select').select('Boleto');
        cy.wait(1000); // Esperar 1 segundo
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('PGTO 20 DD');
        cy.wait(1000); // Esperar 1 Segundo
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > input').type('Mark 1');
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