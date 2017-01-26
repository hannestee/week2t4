import { Week2t4Page } from './app.po';

describe('week2t4 App', function() {
  let page: Week2t4Page;

  beforeEach(() => {
    page = new Week2t4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
