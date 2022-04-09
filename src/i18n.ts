import LanguageDetector from 'i18next-browser-languagedetector'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n
.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)
.init({
    
    fallbackLng:'en',
    debug:true,
    
})
// i18n.on('languageChanged', (lng) => {
//     document.documentElement.setAttribute('lang', lng);
//     if (i18n.language=='ar'){
//       document.documentElement.setAttribute('dir', 'rtl');
//       document.getElementById('root')?.setAttribute('dir', 'rtl');
//     }
//     else{
//       document.getElementById('root')?.setAttribute('dir', 'ltr');
//       document.documentElement.setAttribute('dir', 'ltr');
//     }
//   })
  i18n.dir();
i18n.changeLanguage('en')
export default i18n;