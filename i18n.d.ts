import "i18next"
import TranslationsTypes from "./src/i18n/translations/TranslationsTypes"

declare module "i18next"{
    interface CustomTypeOptions{
        resources :TranslationsTypes;
    }
}