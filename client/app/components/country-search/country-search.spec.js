import CountrySearchModule from './country-search'
import CountrySearchController from './country-search.controller';
import CountrySearchComponent from './country-search.component';
import CountrySearchTemplate from './country-search.html';

describe('CountrySearch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CountrySearchModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CountrySearchController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      console.log(controller);
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has countryResults in template', () => {
      expect(CountrySearchTemplate).to.match(/{{\s?$ctrl\.countryResults\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CountrySearchComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CountrySearchTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CountrySearchController);
      });
  });
});
