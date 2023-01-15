import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agruparPor'
})
export class AgruparPorPipe implements PipeTransform {
  transform(collection: Array<any>, tipo: string): Array<any> {
        if (!collection) {return []}
        const agrupado = collection.reduce((anterior, actual) => {
            let key;
            if (actual[tipo] === null) {
                key = 'sin tiposkill';
            } else {
                key = actual[tipo].nombre;
            }
            if (!anterior[key]) {
                anterior[key] = [actual];
            } else {
                anterior[key].push(actual);
            }
            return anterior;
        }, {});
        return Object.keys(agrupado).map(key => ({ key, value: agrupado[key] }));
    }
}
