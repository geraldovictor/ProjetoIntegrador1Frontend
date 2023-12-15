export interface IVoo {
    idVoo?: number;
    volumeinicialAgua?: number;
    pressaoInicial?: number;
    pesoFoguete?: number;
    pressaoBomba?: number;
    anguloLancamento?: number;
}
export interface IInstante {
    idInstante?: number;
    tempo?: number;
    latitude?: string;
    longitude?: string;
    altitude?: string;
    idVoo?: number;

}

export class Voo implements IVoo {
    constructor(
        public idVoo?: number,
        public volumeinicialAgua?: number,
        public pressaoInicial?: number,
        public pesoFoguete?: number,
        public pressaoBomba?: number,
        public anguloLancamento?: number,
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



