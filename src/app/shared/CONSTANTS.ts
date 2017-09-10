import {bodyType, intensityType, periodType} from '../components/calculator/calculator-form/calculator-form.enums';

export class CONSTANTS {
  public static ROUTING_URL = {
    CALCULATOR: 'calculator',
    DIET: 'diet'
  };

  public static periodsReadable = {
    [periodType.DAY]: 'Dzien',
    [periodType.WEEK]: 'Tydzien',
    [periodType.MONTH]: 'Miesiąc'
  };

  public static bodyTypeReadable = {
    [bodyType.EKTO]: 'Ektomorfik',
    [bodyType.ENDO]: 'Endomorfik',
    [bodyType.MEZO]: 'Mezomorfik'
  };

  public static intensitTypeReadable = {
    [intensityType.LIGHT]: 'Lekka',
    [intensityType.MEDIUM]: 'Srednia',
    [intensityType.HARD]: 'Wysoka',
  };
}
