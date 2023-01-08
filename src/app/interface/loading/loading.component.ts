import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading =  this.servGeneral.subjectIsLoading;
  squares: any[] = [];
  mensaje: string = "La primera carga luego de 15 min. de inactividad puede tardar hasta 5 minutos";
  caracteres = this.mensaje.length;
  escribiendo = {
    '--num-steps': this.caracteres,
    '--tiempoEscrib': '12s',
    '--espera': '12s',
    '--terminaTitilar': '146s'
  }
  frase: string = "orden en el caos, la ilusión de la aleatoriedad";
  caractFrase = this.frase.length;
  escribFrase = {
    '--num-steps': this.caractFrase,
    '--tiempoEscrib': '6s',
    '--espera': '150s'
  }

  constructor(private servGeneral:GeneralService) {   }

  ngOnInit(): void {
    for (let i = 0; i < 420; i++) {
      const topFinal = `${(50 + (25 * Math.random()))}%`;
      const topLinea = `${(65 + (10 * Math.random()))}%`;
      const topInicial = `-${(20 + (320 * Math.random()))}%`;
      const rotation = `-${Math.random() * 720}deg`;
      const espesor = `${Math.random() * 2}px`;
      const horizontal = `${(Math.random() - 0.5) * 200}px`;
      const vertical = `-${Math.random() * 200}px`;
      const rotationTop = `-${Math.random() * 720}deg`;
      this.squares.push({
        width: Math.floor(Math.random() * 50 + 10),
        left: Math.floor(Math.random() * 1100 + 20),
        duration: `${Math.random() * 45 + 10}s`,
        delay: `${Math.random() * 60}s`, 
        opacity: Math.random() * 0.9 + 0.1,
        style: {
          '--rotation': rotation,
          '--topinicial': topInicial,
          '--top': topFinal,
          '--espesor': espesor,
          '--horizontal': horizontal,
          '--vertical': vertical,
          '--rotationTop': rotationTop,
          '--topLinea': topLinea
        }
      });
    }
    
  }

}
