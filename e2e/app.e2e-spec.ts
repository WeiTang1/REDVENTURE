import { RedVenturePage } from './app.po';

describe('red-venture App', () => {
  let page: RedVenturePage;

  beforeEach(() => {
    page = new RedVenturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
