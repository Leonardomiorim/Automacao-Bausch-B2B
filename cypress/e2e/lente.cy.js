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

    // Teste principal para realizar um pedido de amostra
    it('Realizar um Pedido de amostra', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderAmostra();
        completeOrderAmostra();
    });

    // Teste principal para realizar um pedido de devolução
    it('Realizar um Pedido de devolução', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderDevolucao();
        completeOrderDevolucao();
    });

    // Teste principal para realizar um pedido de doação para funcionário
    it.only('Realizar um Pedido de Doação para Funcionário', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseDoacaoParaFuncionario();
        createNewOrderDoacaoParaFuncionario();
        completeOrderDoacaoParaFuncionario();
    });

    // Teste principal para realizar um pedido de troca
    it.only('Realizar um Pedido de Troca', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderTroca();
        completeOrderTroca();
    });
   
    // Teste principal para realizar um pedido de envio de remessa
    it.only('Realizar um Pedido de Envio de remessa', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseEnvioDeRemessa();
        createNewOrderEnvioDeRemessa();
        completeOrderEnvioDeRemessa();
    });
    
    // Teste principal para realizar um pedido de remessa da caixa de prova
    it.only('Realizar um Pedido de Remessa da caixa de prova', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderRemessaDaCaixaDeProva();
        completeOrderRemessaDaCaixaDeProva();
    });  
    
    // Teste principal para realizar um pedido de reposição da caixa de prova
    it.only('Realizar um Pedido de Reposição da caixa de prova', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchaseReposiçãoDaCaixaDeProva();
        createNewOrderReposiçãoDaCaixaDeProva();
        completeOrderReposiçãoDaCaixaDeProva();
    })
    
    // Teste principal para realizar um pedido de garantia
    it.only('Realizar um Pedido de garantia', () => {
        login('leonardo.miorim@kbase.com.br', '1bz592idyxHLw6');
        navigateToPurchase();
        createNewOrderGarantia();
        completeOrderGarantia();
    })     

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
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0008000001');
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
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0007000291');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }

    // Função para navegação até a seção de compra reposição da caixa de prova
    function navigateToPurchaseReposiçãoDaCaixaDeProva() {
        cy.get('body > div > toolbar-menu > sub-toolbar-menu > div > div > div.client-container > client-drawer > main > section > div').click();
        cy.wait(1000); // Esperar 1 segundo
        cy.get('#client-sidenav > div.filters-group-drawer.layout-row > div.input-wrapper.flex-auto').type('0010022575');
        cy.wait(2000); // Espera 2 segundos
        cy.get('#client-sidenav > md-content > paginated-list > md-list > md-list-item').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.menu-items > md-list:nth-child(3) > md-list-item > div > div.md-list-item-inner').click();
    }    

    // Função para criar um novo pedido de bonificação
    function createNewOrderBonificacao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Bonificação').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > main > div.products-footer.layout-align-center-center.layout-row > div > button').click();
        cy.wait(2000); // Esperar 2 segundos
        cy.get('#item-Ultra').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-9.00');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra futura').click();
        cy.get('body > div > md-content > ng-view > div > main > div.products-footer.layout-align-center-center.layout-row > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Soflens\\ 59').click();
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
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('PGTO 28 DD');
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Compra pontual').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Soflens\\ 59').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-9.00');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de compra pontual
    function completeOrderPontual() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > div > select').select('Boleto');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div').click();
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div > select').should('be.visible');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(8) > div > select').select('PGTO 28 DD');
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Amostra').click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('#item-Ultra').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-9.00');
        cy.wait(2000); // Esperar 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
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

    // Função para criar um novo pedido de devolução
    function createNewOrderDevolucao() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Devolução').click();
        cy.wait(3000); //Esperar 3 segundos
        cy.get('div.input-container.input-query-container.ng-scope > button > md-icon').eq(0).click();
        cy.wait(2000); //Esperar 2 segundos
        cy.get('#item-Lunare\\ Anual\\ Blister\\ Graduada').click();
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de devolução
    function completeOrderDevolucao() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > div > select').select('Outros');
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark1');
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

    // Função para criar um novo pedido de doação para funcionário
    function createNewOrderDoacaoParaFuncionario() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Doação para funcionário').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Natural\\ Look\\ Plana').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(3) > div > select').select('BLUE');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
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

    // Função para criar um novo pedido de troca
    function createNewOrderTroca() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Troca').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('div.input-container.input-query-container.ng-scope > button > md-icon').eq(0).click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-Lunare\\ Anual\\ Blister\\ Graduada').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.wait(3000); //Esperar 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div:nth-child(6) > div:nth-child(1) > div > select').select('-7.00');
        cy.wait(5000); // Esperar 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div:nth-child(6) > div:nth-child(3) > div > select').select('BLUE');
        cy.wait(5000); // Esperar 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000)
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.is-collapsed-item.layout-align-space-between-center.layout-row').click();
        cy.wait(3000); // Esperar 3 Segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
        cy.wait(3000); // Esperar 3 segundos
    }

    // Função para completar o pedido de troca
    function completeOrderTroca() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(6) > input').type('Mark 1');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(7) > input').type('Mark 2');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click()/
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
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Envio de remessa').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div.md-dialog-container.ng-scope > md-dialog > md-toolbar > div > a > md-icon').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('#item-Soflens\\ 59').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-9.00');
        cy.wait(5000); // Esperar 5 segundos
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

    // Função para criar um novo pedido de remessa da caixa de prova
    function createNewOrderRemessaDaCaixaDeProva() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Remessa da Caixa de Prova').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Soflens\\ 59').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-container.ng-scope.layout-column > md-list > md-list-item:nth-child(1) > div.item-row.layout-align-space-between-center.layout-row > div.layout-align-start-start.layout-column.flex-5 > div').click();
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-container.ng-scope.layout-column > md-list > md-list-item:nth-child(1) > div.item-row.layout-align-space-between-center.layout-row > div.column-gap.ng-scope.layout-align-start-center.layout-row.flex > div > div > a.decrease')
        .click()
        .click()
        .click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de remessa da caixa de prova
    function completeOrderRemessaDaCaixaDeProva() {
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-actions.ng-scope > div:nth-child(1) > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.wait(2000); // Espera 2 segundos
        // Verifica se o botão "X" para fechar o diálogo está presente e visível
        cy.get('div.header > button[ng-click="closeDialog()"]', { timeout: 10000 })
          .should('exist')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > md-content > ng-view > div > div.ng-scope > div.actions-group > div:nth-child(1) > button').click();
    }
    
    // Função para criar um novo pedido de reposição da caixa de prova
    function createNewOrderReposiçãoDaCaixaDeProva() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Reposição da Caixa de Prova').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Ultra').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.selection-list-container.ng-scope.layout-column.flex > selection-list > main > md-list > md-list-item:nth-child(1) > div.selection-item-row.layout-align-start-center.layout-row > div.ng-scope.flex-5.layout-align-start-start.layout-column > span > label > span > span').click();
        cy.wait(3000); // Espera 3 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click()
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de reposição da caixa de prova
    function completeOrderReposiçãoDaCaixaDeProva() {
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
    
    // Função para criar um novo pedido de garantia
    function createNewOrderGarantia() {
        cy.get('#new-order-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Lentes').click();
        cy.wait(3000); // Espera 3 segundos após o clique
        cy.get('#order-type-bt').click();
        cy.wait(5000); // Espera 5 segundos para garantir que o menu tenha tempo de carregar
        cy.get('div[id^="menu_container_"] > md-menu-content', { timeout: 10000 }).should('exist').and('be.visible');
        cy.get('div[id^="menu_container_"] > md-menu-content').contains('Garantia').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('#item-Soflens\\ 59').click();
        cy.wait(5000); // Espera 5 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-content > div.characteristics.ng-scope.layout-row.flex > div:nth-child(1) > div > select').select('-8.50');
        cy.wait(4000); // Espera 4 segundos
        cy.get('body > div > md-content > ng-view > div > section.item-section > div.card-container.layout-align-end-center.layout-row > div > div.card-actions > div > button').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > div').trigger('mouseover');
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > md-content > div > slide-down-list > div > slide-down > div > form > div.slide-down-list.layout-align-space-between-center.layout-row.is-collapsed-item > div.layout-align-start-center.layout-row.flex > md-icon').click();
        cy.wait(2000); // Espera 2 segundos
        cy.get('body > div > toolbar-menu > md-toolbar > div > div > div.layout-align-end-center.layout-row.flex > drawer-base > div > section > md-sidenav > div > footer > div > div > button').click();
    }

    // Função para completar o pedido de garantia
    function completeOrderGarantia() {
        cy.get('body > div > md-content > ng-view > main > div:nth-child(2) > div > div > div.card-content > div:nth-child(5) > input').type('Mark');
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
    
});



