import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardDisplayNumberFormat'
})
export class CardDisplayNumberFormat implements PipeTransform {

    transform(value): string {
        // let idCard = value.replace(/(^\d{6}|\d{3})(\d{10})(\d{1})(\d{1}|X$)/, "$1**********$3$4");
        let idCard = value.replace(value.substring(3,12),"●●●●");
        return idCard;
  }
}