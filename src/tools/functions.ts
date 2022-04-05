
import {getI18n} from 'react-i18next'

 const Functions ={

    changeLanguge:()=>{
         console.log ("the language",getI18n().language)
        if (getI18n().language === "en") {
            getI18n().changeLanguage('ar')
          }
        else {
            getI18n().changeLanguage('en')
          }
          window.location.reload()
    }
}
export const  {changeLanguge} =Functions