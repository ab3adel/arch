
import {getI18n} from 'react-i18next'

 const Functions ={

    changeLanguge:()=>{
     
        if (getI18n().language === "en") {
            getI18n().changeLanguage('gr')

          }
        else {
            getI18n().changeLanguage('en')
          }
        
    }
}
export const  {changeLanguge} =Functions