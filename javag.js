// ===== DATOS DEL JUEGO (PERSONALIZABLE) =====
const datosSeñales = {
    facil: [
        {
            id: 1,
            signal: '🚨',
            nombre: 'Alarma de Emergencia',
            descripcion: 'Indica que hay peligro inmediato. Debes evacuar el área de forma ordenada.', //
            imagen: "IMG/Alarma de emergencia.png", // ruta local del proyecto
            color: '#FF6B6B'
        },
        {
            id: 2,
            signal: '🔴',
            nombre: 'Alerta Roja', //Imagen  colocada
            descripcion: 'Peligro extremo. Zona en riesgo crítico. Se requiere evacuación inmediata.',
            imagen: "IMG/Alerta Roja.png",
            color: '#FF0000'
        },
        {
            id: 3,
            signal: '🟡',
            nombre: 'Alerta Amarilla',
            descripcion: 'Precaución. Hay riesgo potencial. Debes estar preparado para actuar.',
            imagen: "IMG/Alarma Amarilla.png",
            anycolor: '#FFD700'
        },
        {
            id: 4,
            signal: '🟢',
            nombre: 'Alerta Verde', // Imagen  colocada
            descripcion: 'Zona segura. No hay peligro inmediato. Puedes permanecer en el área.',
            imagen: "IMG/Alerta Verde.png",
            color: '#00DD00'
        }
    ],
    medio: [
        {
            id: 1,
            signal: '🧯',
            nombre: 'Extintor', // Imagen  colocada
            descripcion: 'Indica que hay peligro inmediato. Debes evacuar el área de forma ordenada.',
            imagen: "IMG/Extintor.png",
            color: '#FF6B6B'
        },
        {
            id: 2,
            signal: '',
            nombre: 'Primeros Auxilios', // Imagen web colocada
            descripcion: 'Peligro extremo. Zona en riesgo crítico. Se requiere evacuación inmediata.',
            imagen: "IMG/Primeros Auxilios.png",
            color: '#FF0000'
        },
        {
            id: 3,
            signal: '',
            nombre: 'Camion De Bomberos', // Imagen web colocada
            descripcion: 'Precaucion. Hay riesgo potencial. Debes estar preparado para actuar.',
            imagen: "IMG/Camion De Bomberos.jpg",
            color: '#FFD700'
        },
        {
            id: 4,
            signal: '',
            nombre: 'Ambulancia', // Imagen web colocada
            descripcion: 'Zona segura. No hay peligro inmediato. Puedes permanecer en el área.',
            imagen: "IMG/Ambulancia.jpg",
            color: '#00DD00'
        },
        {
            id: 5,
            signal: '',
            nombre: 'Sinaproc', // Imagen web colocada
            descripcion: 'Sinaproc',
            imagen: "IMG/Sinaproc.jpg",
            color: '#0099FF'
        },
        {
            id: 6,
            signal: '',
            nombre: 'Patrulla de Policia',
            descripcion: 'Patrulla de Policia',
            imagen: "IMG/Patrulla-de-Policia.jpg",
            color: '#8B4513'
        },
        {
            id: 7,
            signal: '',
            nombre: 'Peligro de Alto Voltaje', // Imagen web colocada
            descripcion: 'Ruta de evacuación designada para abandonar el lugar de forma segura.',
            imagen: "IMG/Alto Voltaje.png",
            color: '#228B22'
        },
        {
            id: 8,
            signal: '',
            nombre: 'Ambulancia Senafront',
            descripcion: 'Indica una zona con riesgo general. Debes tomar precauciones.',
            imagen: "IMG/Senafront Ambulancia.jpg",
            color: '#FF8C00'
        }
    ],
    dificil: [
        {
            id: 1,
            signal: '911',
            nombre: 'Ambulancia', // Imagen web colocada
            descripcion: 'Indica que hay peligro inmediato. Debes evacuar el área de forma ordenada.',
            imagen: "IMG/Sume 911.png",
            color: '#FF6B6B'
        },
        {
            id: 2,
            signal: '104',
            nombre: 'Policia',
            descripcion: 'Peligro extremo. Zona en riesgo crítico. Se requiere evacuación inmediata.',
            imagen: "IMG/Policia logo.png",
            color: '#FF0000'
        },
        {
            id: 3,
            signal: '',
            nombre: '103',
            descripcion: 'Precaución. Hay riesgo potencial. Debes estar preparado para actuar.',
            imagen: "IMG/bomberos logo.png",
            color: '#FFD700'
        },
        {
            id: 4,
            signal: '106',
            nombre: 'Cruz Roja',
            descripcion: 'Zona segura. No hay peligro inmediato. Puedes permanecer en el área.',
            imagen: "IMG/Cruz Roja logo.jpg",
            color: '#00DD00'
        },
        {
            id: 5,
            signal: '*335',
            nombre: 'Alerta de Inundación',
            descripcion: 'Hay riesgo de desbordamiento de agua. Dirígete a zonas altas.',
            imagen: "IMG/Sinaproc logo.png",
            color: '#0099FF'
        },
        {
            id: 6,
            signal: '🏚️',
            nombre: 'Refugio de Emergencia',
            descripcion: 'Lugar seguro donde protegerte durante un desastre.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/3541/3541275.png',
            color: '#8B4513'
        },
        {
            id: 7,
            signal: '🚪',
            nombre: 'Salida de Emergencia',
            descripcion: 'Ruta de evacuación designada para abandonar el lugar de forma segura.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/2913/2913052.png',
            color: '#228B22'
        },
        {
            id: 8,
            signal: '⚠️',
            nombre: 'Símbolo de Peligro',
            descripcion: 'Indica una zona con riesgo general. Debes tomar precauciones.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/1252/1252800.png',
            color: '#FF8C00'
        },
        {
            id: 9,
            signal: '🌪️',
            nombre: 'Alerta de Tornado',
            descripcion: 'Se acerca un tornado. Busca un sótano o cuarto interior sin ventanas.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/4227/4227268.png',
            color: '#696969'
        },
        {
            id: 10,
            signal: '❄️',
            nombre: 'Alerta de Tormenta Invernal',
            descripcion: 'Hay riesgo por nieve y hielo. Evita viajar si es posible.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/4227/4227275.png',
            color: '#87CEEB'
        },
        {
            id: 11,
            signal: '🔥',
            nombre: 'Alerta de Incendio',
            descripcion: 'Hay fuego cercano. Prepárate para evacuar rápidamente.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/1995/1995503.png',
            color: '#FF4500'
        },
        {
            id: 12,
            signal: '⛰️',
            nombre: 'Alerta de Deslizamiento',
            descripcion: 'Riesgo de derrumbe de tierra. Aléjate de laderas inestables.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/1995/1995503.png',
            color: '#8B7355'
        },
        {
            id: 13,
            signal: '💧',
            nombre: 'Agua Potable',
            descripcion: 'Zona con agua segura para beber. Esencial en emergencias.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/924/924514.png',
            color: '#00CED1'
        },
        {
            id: 14,
            signal: '🩹',
            nombre: 'Botiquín de Primeros Auxilios',
            descripcion: 'Lugar donde obtener ayuda médica y medicamentos.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/2626/2626419.png',
            color: '#FF1493'
        },
        {
            id: 15,
            signal: '📞',
            nombre: 'Teléfono de Emergencia',
            descripcion: 'Punto de comunicación con servicios de emergencia (911, 112, etc).',
            imagen: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
            color: '#4169E1'
        },
        {
            id: 16,
            signal: '🚒',
            nombre: 'Bomberos/Servicios de Emergencia',
            descripcion: 'Servicios especializados para emergencias y rescates.',
            imagen: 'https://cdn-icons-png.flaticon.com/512/3050/3050159.png',
            color: '#DC143C'
        }
    ]
};

// ===== VARIABLES DE ESTADO =====
let estadoJuego = {
    nivel: null,
    cartas: [],
    cartasVolteadas: [],
    paresEncontrados: 0,
    paresTotal: 0,
    intentos: 0,
    tiempo: 0,
    tiempoInicio: null,
    juegoActivo: false,
    intervaloTiempo: null
};

// ===== FUNCIONES PRINCIPALES =====

/**
 * Inicia el juego con el nivel seleccionado
 */
function iniciarJuego(nivel) {
    estadoJuego.nivel = nivel;
    estadoJuego.cartas = [];
    estadoJuego.cartasVolteadas = [];
    estadoJuego.paresEncontrados = 0;
    estadoJuego.intentos = 0;
    estadoJuego.tiempo = 0;
    estadoJuego.juegoActivo = true;

    // Ocultar menú y mostrar juego
    document.getElementById('menuPrincipal').classList.add('hidden');
    document.getElementById('areaJuego').classList.remove('hidden');
    document.getElementById('pantallasVictoria').classList.add('hidden');

    // Obtener datos según nivel
    const datosNivel = datosSeñales[nivel];
    estadoJuego.paresTotal = datosNivel.length;

    // Crear pares de cartas
    crearCartas(datosNivel);

    // Actualizar UI
    actualizarEstadisticas();
    dibujarTablero();

    // Iniciar temporizador
    estadoJuego.tiempoInicio = Date.now();
    iniciarTemporizador();

    // Mostrar nivel
    const nivelTexto = nivel.charAt(0).toUpperCase() + nivel.slice(1);
    document.getElementById('nivelActual').textContent = nivelTexto;
}

/**
 * Crea el array de cartas duplicadas y las mezcla
 */
function crearCartas(datos) {
    estadoJuego.cartas = [];

    // Crear pares
    datos.forEach(señal => {
        // Primera carta: símbolo
        estadoJuego.cartas.push({
            id: `${señal.id}-signal`,
            contenido: señal.signal,
            tipo: 'signal',
            pareja: `${señal.id}-nombre`,
            señalId: señal.id,
            volteada: false,
            emparejada: false,
            datos: señal
        });

        // Segunda carta: nombre
        estadoJuego.cartas.push({
            id: `${señal.id}-nombre`,
            contenido: señal.nombre,
            tipo: 'nombre',
            pareja: `${señal.id}-signal`,
            señalId: señal.id,
            volteada: false,
            emparejada: false,
            datos: señal
        });
    });

    // Mezclar cartas
    estadoJuego.cartas = mezclarArray(estadoJuego.cartas);
}

/**
 * Mezcla un array usando algoritmo Fisher-Yates
 */
function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

/**
 * Dibuja el tablero en el HTML
 */
function dibujarTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = '';
    tablero.className = `tablero nivel-${estadoJuego.nivel}`;

    estadoJuego.cartas.forEach((carta, indice) => {
        const btnCarta = document.createElement('button');
        btnCarta.className = 'carta';
        btnCarta.dataset.indice = indice;

        if (carta.volteada) {
            btnCarta.classList.add('volteada');
            
            // Mostrar contenido según tipo de carta
            if (carta.tipo === 'signal' && carta.datos.imagen) {
                // Carta con símbolo e imagen
                btnCarta.innerHTML = `
                    <div class="contenido-carta">
                        <img src="${carta.datos.imagen}" alt="${carta.datos.nombre}" class="imagen-en-carta">
                        <div class="texto-carta">${carta.contenido}</div>
                    </div>
                `;
            } else if (carta.tipo === 'nombre') {
                // Carta con nombre
                btnCarta.innerHTML = `
                    <div class="contenido-carta">
                        <div class="texto-nombre">${carta.contenido}</div>
                    </div>
                `;
            } else {
                // Fallback
                btnCarta.textContent = carta.contenido;
            }
        } else {
            // Carta sin voltear
            btnCarta.textContent = '?';
        }

        if (carta.emparejada) {
            btnCarta.classList.add('emparejada');
            btnCarta.disabled = true;
        }

        // Evento click para voltear
        btnCarta.addEventListener('click', () => voltearCarta(indice));
        
        // Evento para mostrar información educativa (click derecho)
        btnCarta.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (carta.volteada && !carta.emparejada) {
                mostrarInfo(carta.datos);
            }
        });

        tablero.appendChild(btnCarta);
    });
}

/**
 * Voltea una carta
 */
function voltearCarta(indice) {
    const carta = estadoJuego.cartas[indice];

    // Validaciones
    if (!estadoJuego.juegoActivo) return;
    if (carta.volteada) return;
    if (carta.emparejada) return;
    if (estadoJuego.cartasVolteadas.length >= 2) return;

    // Voltear carta
    carta.volteada = true;
    estadoJuego.cartasVolteadas.push(indice);

    // Sonido de volteo (opcional)
    reproducirSonido('volteo');

    // Redibujar tablero
    dibujarTablero();

    // Verificar si hay 2 cartas volteadas
    if (estadoJuego.cartasVolteadas.length === 2) {
        estadoJuego.juegoActivo = false;
        estadoJuego.intentos++;
        actualizarEstadisticas();

        setTimeout(() => verificarPareja(), 600);
    }
}

/**
 * Verifica si las dos cartas volteadas forman una pareja
 */
function verificarPareja() {
    const [indice1, indice2] = estadoJuego.cartasVolteadas;
    const carta1 = estadoJuego.cartas[indice1];
    const carta2 = estadoJuego.cartas[indice2];

    if (carta1.pareja === carta2.id) {
        // ¡Pareja encontrada!
        carta1.emparejada = true;
        carta2.emparejada = true;
        estadoJuego.paresEncontrados++;

        reproducirSonido('acierto');
        mostrarMensajeAcierto();

        // Verificar si ganó
        if (estadoJuego.paresEncontrados === estadoJuego.paresTotal) {
            ganarJuego();
        }
    } else {
        // No es pareja
        carta1.volteada = false;
        carta2.volteada = false;
        reproducirSonido('error');
        
        // Mostrar efecto de error
        document.querySelector(`[data-indice="${indice1}"]`).classList.add('error');
        document.querySelector(`[data-indice="${indice2}"]`).classList.add('error');
    }

    estadoJuego.cartasVolteadas = [];
    actualizarEstadisticas();
    dibujarTablero();
    estadoJuego.juegoActivo = true;
}

/**
 * Muestra un mensaje cuando acierta una pareja
 */
function mostrarMensajeAcierto() {
    const mensajes = [
        '¡Excelente! ',
        '¡Lo hiciste! ',
        '¡Muy bien! ',
        '¡Correcto! '
    ];
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    console.log(mensaje);
}

/**
 * Actualiza las estadísticas en pantalla
 */
function actualizarEstadisticas() {
    document.getElementById('paresEncontrados').textContent = 
        `${estadoJuego.paresEncontrados} / ${estadoJuego.paresTotal}`;
    document.getElementById('intentos').textContent = estadoJuego.intentos;
}

/**
 * Inicia el temporizador
 */
function iniciarTemporizador() {
    estadoJuego.intervaloTiempo = setInterval(() => {
        const tiempoTranscurrido = Math.floor((Date.now() - estadoJuego.tiempoInicio) / 1000);
        document.getElementById('tiempo').textContent = `${tiempoTranscurrido}s`;
    }, 1000);
}

/**
 * Detiene el temporizador
 */
function detenerTemporizador() {
    if (estadoJuego.intervaloTiempo) {
        clearInterval(estadoJuego.intervaloTiempo);
    }
}

/**
 * Calcula la puntuación final
 */
function calcularPuntuacion() {
    const tiempoSegundos = parseInt(document.getElementById('tiempo').textContent);
    const eficiencia = Math.max(0, 100 - (estadoJuego.intentos * 5) - Math.floor(tiempoSegundos / 2));
    return Math.max(0, Math.min(100, Math.floor(eficiencia)));
}

/**
 * Llama cuando el jugador gana
 */
function ganarJuego() {
    estadoJuego.juegoActivo = false;
    detenerTemporizador();

    const puntuacion = calcularPuntuacion();
    const nivelTexto = estadoJuego.nivel.charAt(0).toUpperCase() + estadoJuego.nivel.slice(1);
    const tiempoTotal = document.getElementById('tiempo').textContent;

    // Llenar datos de victoria
    document.getElementById('nivelFinal').textContent = nivelTexto;
    document.getElementById('paresFinal').textContent = estadoJuego.paresEncontrados;
    document.getElementById('intentosFinal').textContent = estadoJuego.intentos;
    document.getElementById('tiempoFinal').textContent = tiempoTotal;
    document.getElementById('puntuacionFinal').textContent = puntuacion;

    // Mostrar pantalla de victoria
    setTimeout(() => {
        document.getElementById('pantallasVictoria').classList.remove('hidden');
        reproducirSonido('victoria');
    }, 500);
}

/**
 * Muestra información educativa de una señal
 */
function mostrarInfo(datos) {
    document.getElementById('tituloInfo').textContent = datos.nombre;
    document.getElementById('textoInfo').textContent = datos.descripcion;
    
    const imagenDiv = document.getElementById('imagenInfo');
    if (datos.imagen) {
        imagenDiv.innerHTML = `<img src="${datos.imagen}" alt="${datos.nombre}" class="imagen-educativa">`;
    } else {
        imagenDiv.innerHTML = `<span style="font-size: 5rem;">${datos.signal}</span>`;
    }
    
    document.getElementById('infoEducativa').classList.remove('hidden');
}

/**
 * Reinicia el juego actual
 */
function reiniciarJuego() {
    detenerTemporizador();
    document.getElementById('pantallasVictoria').classList.add('hidden');
    iniciarJuego(estadoJuego.nivel);
}

/**
 * Vuelve al menú principal
 */
function volverMenu() {
    detenerTemporizador();
    document.getElementById('menuPrincipal').classList.remove('hidden');
    document.getElementById('areaJuego').classList.add('hidden');
    document.getElementById('pantallasVictoria').classList.add('hidden');
    estadoJuego.juegoActivo = false;
}

/**
 * Cierra la información educativa
 */
function cerrarInfo() {
    document.getElementById('infoEducativa').classList.add('hidden');
}

/**
 * Reproduce sonidos (función básica, puede expandirse)
 */
function reproducirSonido(tipo) {
    // Aquí podrías integrar Web Audio API o archivos de sonido
    // Por ahora es un placeholder
    console.log(`Sonido: ${tipo}`);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Juego Memory de Señales de Alerta cargado');
});
