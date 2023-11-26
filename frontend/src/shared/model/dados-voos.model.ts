export interface IVoo {
    idVoo?: number;
    volumeinicialAgua?: number;
    pressaoInicial?: number;
    pesoFoguete?: number;
    pressaoBomba?: number;
    anguloLancamento?: number;
    duracaoSegundos?: number;
}

export interface IInstante {
    idInstante?: number;
    tempo?: number;
    latitude?: string;
    longitude?: string;
    altitude?: string;
    idVoo?: number;

}

export interface IEixo {
    idEixo?: number;
    angulo?: number;
    velocidade?: number;
    aceleracao?: number;
    tipoEixo?: string;
    idInstante?: number;
 
}

export class Voo implements IVoo {
    constructor(
        public idVoo?: number,
        public volumeinicialAgua?: number,
        public pressaoInicial?: number,
        public pesoFoguete?: number,
        public pressaoBomba?: number,
        public anguloLancamento?: number,
        public duracaoSegundos?: number,
    ) {

    }
}

export class Instante implements IInstante {
    constructor(
        public idInstante?: number,
        public tempo?: number,
        public latitude?: string,
        public longitude?: string,
        public altitude?: string,
        public idVoo?: number,
    ) {

    }
}

export class Eixo implements IEixo {
    constructor(
        public idEixo?: number,
        public angulo?: number,
        public velocidade?: number,
        public aceleracao?: number,
        public tipoEixo?: string,
        public idInstante?: number,
    ) {

    }
}