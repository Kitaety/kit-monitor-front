import LocalizedStrings from 'react-localization';
import { ILocalizationStrings } from './type';
import ru from './languages/ru.json';
import en from './languages/en.json';

const localization: ILocalizationStrings = new LocalizedStrings({
    ru,
    en
});

export default localization;
