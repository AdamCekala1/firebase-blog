import { FirebaseBlogPage } from './app.po';

describe('firebase-blog App', () => {
  let page: FirebaseBlogPage;

  beforeEach(() => {
    page = new FirebaseBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
