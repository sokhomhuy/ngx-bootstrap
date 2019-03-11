import { BaseComponent } from './base.component';

export class ModalsPo extends BaseComponent {
  pageUrl = '/modals';
  pageTitle = 'Modals';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/modal';

  modalContainer = 'modal-container';
  modalContent = '.modal-content';
  modalDialog = '.modal-dialog';
  modalBody = '.modal-body';
  modalHeader = '.modal-header';
  modalTitle = '.modal-title';
  serviceModalBtn = 'modal-container button';
  modalBackdrop = '.modal-backdrop';
  modalParagraph = `${this.modalContainer} ${'p'}`;
  demoCardBlock = '.card';
  modalPopup = '.popover-content';
  modalTooltip = 'bs-tooltip-container';
  crossSelector = '.close';
  openedNestedModals = `${'demo-modal-nested'} ${'.show'}`;

  exampleDemosArr = {
    serviceTemplate: 'demo-modal-service-static',
    serviceComponent: 'demo-modal-service-component',
    serviceNested: 'demo-modal-service-nested',
    serviceScroll: 'demo-modal-scrolling-long-content',
    serviceEvents: 'demo-modal-service-events',
    serviceConfirm: 'demo-modal-service-confirm-window',
    serviceCustomCSS: 'demo-modal-service-custom-css-class',
    serviceAnimation: 'demo-modal-service-disable-animation',
    serviceESC: 'demo-modal-service-disable-esc-closing',
    serviceToolPopup: 'demo-modal-with-popups',
    serviceBackdrop: 'demo-modal-service-disable-backdrop',
    serviceClassChange: 'demo-modal-change-class',
    serviceOptions: 'demo-modal-service-options',
    directiveStatic: 'demo-modal-static',
    directiveSizes: 'demo-modal-sizes',
    directiveChild: 'demo-modal-child',
    directiveNested: 'demo-modal-nested',
    directiveEvents: 'demo-modal-events',
    directiveAutoShow: 'demo-modal-auto-shown'
  };

  isElementVisible(baseSelector: string, elementToFind: string, elemNumber = 0) {
    cy.get(`${baseSelector} ${elementToFind}`).eq(elemNumber).should('be.visible');
  }

  isElemTextCorrect(baseSelector: string, itemSel: string, expectedText: string, rowNum = 0) {
    cy.get(baseSelector).find(itemSel).eq(rowNum).invoke('text')
      .should('contain', expectedText);
  }

  isModalVisible(modalSelector: string, visible: boolean, elementNumber = 0) {
    cy.get(`${'body'} ${modalSelector}`).find('.modal-content').eq(elementNumber)
      .should(visible ? 'to.be.visible' : 'not.to.be.visible');
  }

  isDirectModalVisible(baseSelector: string, visible: boolean, elementNumber = 0) {
    cy.get(baseSelector).find('.modal-content').eq(elementNumber)
      .should(visible ? 'to.be.visible' : 'not.to.be.visible');
  }

  isModalNotEnabled(modalSelector: string, disabled: boolean) {
    cy.get(`${'body'} ${modalSelector}`).find('.modal-content')
      .should(disabled ? 'not.to.be.enabled' : 'to.be.enabled');
  }

  isBackdropEnabled() {
    cy.get('bs-modal-backdrop').should('to.have.class', 'show');
  }

  isBackdropDisabled() {
    cy.get('bs-modal-backdrop').should('not.be.enabled');
  }

  clickOnBackdrop() {
    cy.get(`${'body'} ${this.modalBackdrop}`).click({ force: true });
  }

  isModalBtnExist(btnTitle: string, elemNumber = 0) {
    cy.get(this.modalContainer).find('button').eq(elemNumber).invoke('text')
      .should('contain', btnTitle);
  }

  isDirectModalBtnExist(modalSelector: string, btnTitle: string, elemNumber = 0) {
    cy.get(modalSelector).find('button').eq(elemNumber).invoke('text')
      .should('contain', btnTitle);
  }

  clickOnModalBtn(btnTitle: string) {
    cy.get(this.serviceModalBtn).contains(btnTitle).click();
  }

  clickOnDirectModalBtn(baseSelector: string, modalSelector: string, btnTitle: string, elementNumber = 0) {
    cy.get(`${baseSelector} ${modalSelector}`).eq(elementNumber).contains(btnTitle).click();
  }

  checkElementsQuantity(elemToCount: string, expectedQuantity: number) {
    cy.get(elemToCount).should('have.length', expectedQuantity);
  }

  isModalDemoContainsText(baseSelector: string, expectedText: string, demoNumber = 0) {
    cy.get(`${baseSelector} ${this.demoCardBlock}`).eq(demoNumber).invoke('text')
      .should('contain', expectedText);
  }

  isModalTitleIs(modalTitle: string) {
    cy.get('h4').should('contain', modalTitle);
  }

  isModalTooltipVisible() {
    cy.get(this.modalContainer)
      .should('to.have.descendants', this.modalTooltip)
      .find('bs-tooltip-container')
      .should('to.have.class', 'show');
  }

  isModalWindowWidth(modalSelector: string, expectedWidth: string, elementNumber = 0) {
    cy.get(`${modalSelector} ${'.modal-content'}`).eq(elementNumber)
      .should('have.css', 'width', expectedWidth);
  }

  isModalHasClass(expectedClass: string) {
    cy.get(this.modalContainer).should('to.have.descendants', expectedClass);
  }

  isChildElemExist(baseSelector: string, childName: string) {
    cy.get(`${baseSelector} ${this.modalDialog}`)
      .should('have.descendants', childName);
  }

  pressEscOnModal() {
    cy.get(`body .modal.fade.show`).type('{esc}', {force: true});
  }
}
