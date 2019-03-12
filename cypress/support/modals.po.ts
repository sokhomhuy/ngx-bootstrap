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
  modalFooter = '.modal-footer';
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

  isElementVisible(baseSelector: string, additionalSelector: string, elementIndex = 0) {
    cy.get(`${baseSelector} ${additionalSelector}`).eq(elementIndex).should('be.visible');
  }

  isItemTextContains(baseSelector: string, itemSelector: string, expectedText: string, elementIndex = 0) {
    cy.get(baseSelector).find(itemSelector).eq(elementIndex).invoke('text')
      .should('to.contain', expectedText);
  }

  isModalVisible(modalSelector: string, visible: boolean, elementIndex = 0) {
    cy.get(`${'body'} ${modalSelector}`).find('.modal-content').eq(elementIndex)
      .should(visible ? 'to.be.visible' : 'not.to.be.visible');
  }

  isDirectModalVisible(baseSelector: string, visible: boolean, elementIndex = 0) {
    cy.get(baseSelector).find('.modal-content').eq(elementIndex)
      .should(visible ? 'to.be.visible' : 'not.to.be.visible');
  }

  isModalEnabled(modalSelector: string, enabled: boolean) {
    cy.get(`${'body'} ${modalSelector}`).find('.modal-content')
      .should(enabled ? 'to.be.enabled' : 'not.to.be.enabled');
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

  clickOnDirectModalBtn(baseSelector: string, modalSelector: string, btnTitle: string, elementNumber = 0) {
    cy.get(`${baseSelector} ${modalSelector}`).eq(elementNumber).contains(btnTitle).click();
  }

  checkElementsQuantity(elementsSelector: string, expectedQuantity: number) {
    cy.get(elementsSelector).should('have.length', expectedQuantity);
  }

  isModalTitleIs(modalTitle: string) {
    cy.get(`${this.modalHeader} h4`).should('to.contain', modalTitle);
  }

  isModalTooltipVisible() {
    cy.get(this.modalContainer)
      .should('to.have.descendants', this.modalTooltip)
      .find('bs-tooltip-container')
      .should('to.have.class', 'show');
  }

  isModalWindowWidthEqual(modalSelector: string, expectedWidth: string, elementNumber = 0) {
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

  pressEscOnModal(baseSelector: string) {
    cy.get(`${baseSelector} ${'.show'}`).type('{esc}');
  }
}
