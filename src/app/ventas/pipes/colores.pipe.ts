import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'colores'
})
export class ColoresPipe implements PipeTransform{

    transform(valor: number) {
        let result: string = '';

        switch (valor) {
            case 0 :
                result = 'Rojo';
                break;
            case 1 :
                result = 'Negro';
                break;
            case 2 :
                result = 'Azul';
                break;
            case 3 :
                result = 'Verde';
                break;
        }
        return result;
    }

}