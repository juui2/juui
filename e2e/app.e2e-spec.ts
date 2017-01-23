import { JuuiPage } from './app.po';

describe('juui App', function() {
  let page: JuuiPage;

  beforeEach(() => {
    page = new JuuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
