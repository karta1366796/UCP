import enUS from '@/locales/en-US.json';
import zhCN from '@/locales/zh-CN.json';
import zhTW from '@/locales/zh-TW.json';
import { createI18n } from 'vue-i18n';

if (localStorage.getItem('language') === null) {
  localStorage.setItem('language', 'en-US');
}

const language: string = (localStorage.getItem('language') || '').toString();

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-TW' | 'zh-CN'>({
  legacy: false,
  locale: language,
  fallbackLocale: 'zh-TW',
  messages: {
    'en-US': enUS,
    'zh-TW': zhTW,
    'zh-CN': zhCN
  }
});

export default i18n;
