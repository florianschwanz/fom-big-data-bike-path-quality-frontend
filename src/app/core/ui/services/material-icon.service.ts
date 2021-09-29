import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * Handles Material icons
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialIconService {

  /**
   * Initializes icons
   *
   * @param iconRegistry icon registry
   * @param sanitizer sanitizer
   */
  public initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('pedal_bike', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pedal_bike_black_24dp.svg'));
    iconRegistry.addSvgIcon('science', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/science_black_24dp.svg'));
  }
}
