import {bodyType, intensityType, periodType} from '../components/calculator/calculator-form/calculator-form.enums';

export class CONSTANTS {
  public static ROUTING_URL = {
    CALCULATOR: 'calculator',
    DIET: 'diet'
  };

  public static periodsReadable = {
    [periodType.DAY]: 'Dziennie',
    [periodType.WEEK]: 'Tygodniowo',
    [periodType.MONTH]: 'Miesięcznie'
  };

  public static bodyTypeReadable = {
    [bodyType.EKTO]: 'Ektomorfik',
    [bodyType.ENDO]: 'Endomorfik',
    [bodyType.MEZO]: 'Mezomorfik'
  };

  public static intensitTypeReadable = {
    [intensityType.LIGHT]: 'Lekkie',
    [intensityType.MEDIUM]: 'Srednie',
    [intensityType.HARD]: 'Ciężkie',
  };
}
