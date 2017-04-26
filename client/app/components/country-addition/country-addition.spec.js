import CountryAdditionModule from './country-addition'
import CountryAdditionController from './country-addition.controller';
import CountryAdditionComponent from './country-addition.component';
import CountryAdditionTemplate from './country-addition.html';

describe('CountryAddition', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CountryAdditionModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CountryAdditionController();
    };
  }));

  describe('Module', () => {});

  describe('Controller', () => {
    // controller specs
    it('has a renderController property', () => {
      let controller = makeController();
      expect(controller).to.be.defined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(CountryAdditionTemplate).to.match(/{{\s?country\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CountryAdditionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CountryAdditionTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CountryAdditionController);
      });
  });
});
