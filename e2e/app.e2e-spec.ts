import { StorageAppPage } from './app.po';

describe('storage-app App', () => {
  let page: StorageAppPage;

  beforeEach(() => {
    page = new StorageAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
