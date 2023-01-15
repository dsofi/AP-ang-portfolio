import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agruparPorOrden'
})
export class AgruparPorOrdenPipe implements PipeTransform {
  transform(collection: Array<any>, tipo: string): Array<any> {
    if (!collection) {return []}
    collection.sort((a, b) => (a.tiposkill.orden > b.tiposkill.orden) ? 1 : ((b.tiposkill.orden > a.tiposkill.orden) ? -1 : 0));
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
