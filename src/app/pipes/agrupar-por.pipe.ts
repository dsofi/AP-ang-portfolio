import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agruparPor'
})
export class AgruparPorPipe implements PipeTransform {
transform(collection: Array<any>, field: string): any[] {
    if (!collection) {
        return [];
    }
    if (!field) {
        return collection.sort((a, b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    }
    return collection.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    }
}
