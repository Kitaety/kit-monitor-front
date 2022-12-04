import LocalizedStrings from 'react-localization';
import { IStrings } from './type';
import ru from './variants/ru';
import en from './variants/en';

const strings: IStrings = new LocalizedStrings({
    ru,
    en
});

export default strings;
