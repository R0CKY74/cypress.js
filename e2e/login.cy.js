describe('Тестирование staya', function () {
    
    it('Ввести правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввёл логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл пароль
        cy.get('#loginButton').click(); // кликнул на кнопку войти 

        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('be.visible'); // текст виден пользоватилю
        cy.get('#forgotEmailButton').click(); // кликнул на кнопку забыли пароль 

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввёл логин
        cy.get('#restoreEmailButton').click(); // кликнул на кнопку оправить код
        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    it('Ввести правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввёл логин
        cy.get('#pass').type('iLoveqastudio2'); // ввёл неверны пароль
        cy.get('#loginButton').click(); // кликнул на кнопку войти 

        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    it('Ввести не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germa@dolnikov.ru'); // ввёл неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл верны пароль
        cy.get('#loginButton').click(); // кликнул на кнопку войти 

        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    it('Ввести не правильный логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germaтdolnikov.ru'); // ввёл неверный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввёл верны пароль
        cy.get('#loginButton').click(); // кликнул на кнопку войти 

        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    it('Ввести строчным буквам в логине и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввёл неверный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввёл верны пароль
        cy.get('#loginButton').click(); // кликнул на кнопку войти 

        cy.get('#messageHeader').should('be.visible'); // текст виден пользоватилю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
         })

    describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('R0CKY74@yandex.ru');
        cy.get('#password').type('123456789Qaz');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('06/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
        
})
})