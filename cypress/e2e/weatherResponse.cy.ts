describe('Automatically detect location and fetch weekWeather', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should automatically detect location and fetch weekWeather', () => {
    cy.clearLocalStorage(/persist*/).then((ls) => {
      expect(ls.getItem('persist:visualCrossing')).to.be.null;
      expect(ls.getItem('persist:accuweather')).to.be.null;
      expect(ls.getItem('persist:openCage')).to.be.null;
      expect(ls.getItem('persist:openWeatherMap')).to.be.null;
    });
    expect(localStorage.getItem('persist:openCage')).to.be;
    expect(localStorage.getItem('persist:accuweather')).to.be;
    expect(localStorage.getItem('persist:openCage')).to.be;
    expect(localStorage.getItem('persist:openWeatherMap')).to.be;
  });

  it('Should show forecast weekWeather', () => {
    cy.get('[data-cy=week-weather]').get('[data-cy=day-weather]').should('have.length', 7);
  });

  it('Should show hourly weekWeather', () => {
    cy.get('[data-cy=hourly-weather-slider]')
      .get('[data-cy=hourly-weather]')
      .should('have.length', 24);
  });

  it('Should chose visualCrossingData service and change backround image', () => {
    cy.get('[data-cy=options]').click();
    cy.get('[data-cy=VisualCrossing]').click();
    cy.wait(3000);
    cy.get('[data-cy=OpenWeatherMap]').click();
  });

  it('Should get new weather data', () => {
    cy.get('[data-cy=searchBar]').clear().type('Dubai');
    cy.wait(3000);
    cy.get('[data-cy=Dubai]').click();
  });
});
