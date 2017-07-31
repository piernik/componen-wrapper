import { ComponentWrapperPage } from './app.po';

describe('component-wrapper App', () => {
  let page: ComponentWrapperPage;

  beforeEach(() => {
    page = new ComponentWrapperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
