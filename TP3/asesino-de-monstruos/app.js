new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {

        getSalud(salud) {
            return `${salud}%`
        },

        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true;
        },

        atacar: function () {
            const damage =  this.calcularHeridas(this.rangoAtaque);
            this.saludMonstruo -= damage;
            this.registrarEvento({
                isPlayer: false,
                text: `El jugador golpea al mounstro por ${damage}`,
            });
            this.ataqueDelMonstruo();
        },

        ataqueEspecial: function () {
            const damage =  this.calcularHeridas(this.rangoAtaqueEspecial);
            this.saludMonstruo -= damage;
            this.registrarEvento({
                isPlayer: false,
                text: `El jugador golpea de forma especial al mounstro por ${damage}`,
            });
            this.ataqueDelMonstruo();
        },

        curar: function () {
            this.saludJugador = (this.saludJugador+10) < 100? this.saludJugador+10 : 100;
            this.registrarEvento({
                isPlayer: false,
                text: `El jugador se ha curado 10}`,
            });
            this.ataqueDelMonstruo();
        },

        registrarEvento(evento) {
            this.turnos.unshift(evento);
        },

        terminarPartida: function () {
            this.verificarGanador();
            this.hayUnaPartidaEnJuego = false;
            this.saludJugador =100; this.saludMonstruo = 100;
            this.turnos = [];
        },

        ataqueDelMonstruo: function () {
            const damage = this.calcularHeridas(this.rangoAtaqueDelMonstruo);
            this.saludJugador -= damage;
            this.registrarEvento({
                isPlayer: false,
                text: `El mounstro golpea al jugador por ${damage}`,
            });
            this.terminoPartida();
        },

        calcularHeridas: function (rango) {
            const min = rango[0] , max = rango[1];
            return Math.floor(Math.random() * (max - min)) + min;
        },

        verificarGanador: function () {
            if( this.saludMonstruo <= 0){
                alert('HAS GANADO LA PARTIDA!');
            }else if ( this.saludJugador <= 0 ) {
                alert('HAS PERDIDO :(\nSUERTE LA PROXIMA PARTIDA!')
            }else{
                alert('TE HAS RENDIDO!');
            }
        },

        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, ero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        },
        terminoPartida() {
            if( this.saludJugador <= 0 || this.saludMonstruo <= 0) {
                this.terminarPartida();
            }
        }
    },
});