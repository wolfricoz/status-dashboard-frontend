import { UrlHandlingStrategy, UrlTree } from '@angular/router';

export class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    // This tells Angular to ignore URLs starting with '/api'
    if (url.toString().startsWith('/api')) {
      return false;
    }
    // Angular will process all other URLs
    return true;
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(newUrl: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrl;
  }
}
