import { useI18n } from 'vue-i18n';
import { computed } from 'vue'; // Use the native Composition API functions

export function useLocalization() {
  const { t, locale } = useI18n();

  const FirstPluginPage = computed(() => t('FirstPluginPage'))
    , VueUseImplmentation = computed(() => t('VueUseImplmentation'))
    , IntersectionObserver = computed(() => t('IntersectionObserver'))
    , AutoAnimateLibrary = computed(() => t('AutoAnimateLibrary'))
    , KA = computed(() => t('Keep Alive'))
    , WatchEffect = computed(() => t('WatchEffect'))
    , tdiw = computed(() => t(`Test doesn't it work ? `))
    , close = computed(() => t('Close'))
    , InfinityScroll = computed(() => t('InfinityScroll'))
    , changeLocale = (newLocale) => {
      console.log("Working");
      locale.value = newLocale;
    };

  return {
    locale,
    FirstPluginPage,
    VueUseImplmentation,
    IntersectionObserver,
    AutoAnimateLibrary,
    InfinityScroll,
    KA,
    WatchEffect,
    tdiw,
    close,
    changeLocale
  };
}