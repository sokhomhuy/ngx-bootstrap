import { ModalsPo } from '../support/modals.po';

describe('Modals demo page test suite', () => {
  const modals = new ModalsPo();

  beforeEach(() => modals.navigateTo());

  describe('Template modal', () => {

    const templateDemo = modals.exampleDemosArr.serviceTemplate;
    const btnText = 'Create template modal';
    const btnX = '×';

    it('example contains the button "Create template modal"', () => {
      modals.scrollToMenu(' Template ');
      modals.isButtonExist(templateDemo, btnText);
    });

    it(`when user clicks on the button "Create modal with component" then modal is opened and
      backdrop is enabled`, () => {
      modals.clickByText(templateDemo, btnText);
      modals.isModalVisible(modals.modalContainer, true);
      modals.isBackdropEnabled();
    });

    it('when user clicks on the cross button then the modal is closed', () => {
      modals.clickByText(templateDemo, btnText);
      modals.clickOnModalBtn(btnX);
      modals.isModalVisible(modals.modalContainer, true);
    });

    it('when user clicks on backdrop then the modal is closed', () => {
      modals.clickByText(templateDemo, btnText);
      modals.clickOnBackdrop();
      modals.isModalVisible(modals.modalContainer, true);
    });

    it('when user press on ESC btn then the modal is closed', () => {
      modals.clickByText(templateDemo, btnText);
      modals.pressEsc();
      modals.isModalVisible(modals.modalContainer, true);
    });
  });
});
