import { API_ROUTES } from '../../constants/routes';

class UrlUtils {
  static generateSearchAPIUrlBySection(sectionKey) {
    let paramsObj = { section: sectionKey, 'api-key': 'test' };
    let searchParams = new URLSearchParams(paramsObj);
    return `${API_ROUTES.search}?${searchParams.toString()}`;
  }
}

export { UrlUtils };
