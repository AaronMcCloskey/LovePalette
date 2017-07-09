import { LovePalettePage } from './app.po';

describe('love-palette App', function() {
  let page: LovePalettePage;

  beforeEach(() => {
    page = new LovePalettePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
