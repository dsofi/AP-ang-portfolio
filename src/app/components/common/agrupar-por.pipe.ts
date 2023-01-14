import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agruparPor'
})
export class AgruparPorPipe implements PipeTransform {
  transform(collection: Array<any>, property: string): Array<any> {
        if (!collection) {
            return [];
        }

        const groupedCollection = collection.reduce((previous, current) => {
            let key;
            if (current[property] === null) {
                key = 'sin tiposkill';
            } else {
                key = current[property].nombre;
            }
            if (!previous[key]) {
                previous[key] = [current];
            } else {
                previous[key].push(current);
            }
            return previous;
        }, {});

        return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
    }
}
