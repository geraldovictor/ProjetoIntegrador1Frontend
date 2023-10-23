export interface IDadosVoo {
    id?: number;
    latitude?: string;
    longitude?: string;
    altitude?: string;
    duracao_segundos?: number;
    volume_agua?: string;
    peso_foguete?: string;
    pressao_bomba?: string;
    angulo_lancamento?: string;
}

export class DadosVoo implements IDadosVoo {
    constructor(
        public id?: number,
        public latitude?: string,
        public longitude?: string,
        public altitude?: string,
        public duracao_segundos?: number,
        public volume_agua?: string,
        public peso_foguete?: string,
        public pressao_bomba?: string,
        public angulo_lancamento?: string
    ) {

    }
}