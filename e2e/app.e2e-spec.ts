import { GestionStockClientPage } from './app.po';

describe('gestion-stock-client App', function() {
  let page: GestionStockClientPage;

  beforeEach(() => {
    page = new GestionStockClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
