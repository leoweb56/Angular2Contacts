import { Angular2ContactsPage } from './app.po';

describe('angular2-contacts App', () => {
  let page: Angular2ContactsPage;

  beforeEach(() => {
    page = new Angular2ContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
