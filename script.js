function calcularCotizacion() {
    // Obtener valores del formulario
    const largoLamina = parseFloat(document.getElementById('largoLamina').value);
    const anchoLamina = parseFloat(document.getElementById('anchoLamina').value);
    const precioLamina = parseFloat(document.getElementById('precioLamina').value);
    const largoNecesario = parseFloat(document.getElementById('largoNecesario').value);
    const anchoNecesario = parseFloat(document.getElementById('anchoNecesario').value);

    const metrosLED = parseFloat(document.getElementById('metrosLED').value);
    const precioMetroLED = parseFloat(document.getElementById('precioMetroLED').value);

    const cantidadConectores = parseInt(document.getElementById('cantidadConectores').value);
    const precioConector = parseFloat(document.getElementById('precioConector').value);

    const cantidadAdaptadores = parseInt(document.getElementById('cantidadAdaptadores').value);
    const precioAdaptador = parseFloat(document.getElementById('precioAdaptador').value);

    const cantidadDuplex = parseInt(document.getElementById('cantidadDuplex').value);
    const precioDuplex = parseFloat(document.getElementById('precioDuplex').value);

    const horasTrabajo = parseFloat(document.getElementById('horasTrabajo').value);
    const precioHora = parseFloat(document.getElementById('precioHora').value);

    const margenGanancia = parseFloat(document.getElementById('margenGanancia').value);

    // Validaciones básicas
    if (largoNecesario <= 0 || anchoNecesario <= 0) {
        alert("Por favor, ingrese las dimensiones necesarias de acrílico.");
        return;
    }

    // Calcular costos
    const areaLamina = (largoLamina * anchoLamina) / 10000; // Convertir a m²
    const areaNecesaria = (largoNecesario * anchoNecesario) / 10000; // Convertir a m²
    const precioM2 = precioLamina / areaLamina;
    const costoAcrilico = precioM2 * areaNecesaria;

    const costoLED = metrosLED * precioMetroLED;
    const costoConectores = cantidadConectores * precioConector;
    const costoAdaptadores = cantidadAdaptadores * precioAdaptador;
    const costoDuplex = cantidadDuplex * precioDuplex;
    const costoManoObra = horasTrabajo * precioHora;

    const costoTotalMateriales = costoAcrilico + costoLED + costoConectores + costoAdaptadores;
    const costoTotal = costoTotalMateriales + costoManoObra;

    const ganancia = costoTotal * (margenGanancia / 100);
    const precioVenta = costoTotal + ganancia;

    // Mostrar resultados
    const detallesCotizacion = document.getElementById('detallesCotizacion');
    detallesCotizacion.innerHTML = `
                <div class="costo-item">
                    <span>Acrílico (${areaNecesaria.toFixed(2)} m²):</span>
                    <span>$${Math.round(costoAcrilico).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>LED Neon (${metrosLED} m):</span>
                    <span>$${Math.round(costoLED).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Conectores (${cantidadConectores} und):</span>
                    <span>$${Math.round(costoConectores).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Adaptadores (${cantidadAdaptadores} und):</span>
                    <span>$${Math.round(costoAdaptadores).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Duplex (${cantidadDuplex} m):</span>
                    <span>$${Math.round(costoDuplex).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Controlador De Luz (${horasTrabajo} und):</span>
                    <span>$${Math.round(costoManoObra).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Costo total:</span>
                    <span>$${Math.round(costoTotal).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="costo-item">
                    <span>Margen de ganancia (${margenGanancia}%):</span>
                    <span>$${Math.round(ganancia).toLocaleString('es-CO')} COP</span>
                </div>
                <div class="total">
                    <span>PRECIO DE VENTA:</span>
                    <span>$${Math.round(precioVenta).toLocaleString('es-CO')} COP</span>
                </div>
            `;

    document.getElementById('resultado').style.display = 'block';
}