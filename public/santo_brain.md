# 🐷 SANTO CERDO — Biblia Operativa & Ecosistema (Santo Brain)

**Fecha:** 25 Noviembre 2025
**Versión:** v7.0 — Definitive Edition

---

## Introducción rápida
**Concepto:** Sistema Operativo Gastronómico Unipersonal (SaaS) — Modelo Pure Take-Away.

**Arquitectura:** SPA + Infraestructura Física Fail-Safe.

**Misión:** Un organismo vivo que protege al piloto del colapso, maximiza el flujo de caja y aprende de cada servicio.

**Filosofía:** "High Tech, High Touch, Zero Friction".

Este documento es doble: sirve como Biblia Operativa (procedimientos, UX, hardware, playbook) y como Plan de Funcionalidades (backlog técnico, plantillas, roadmap). Mantén ambas partes sincronizadas: cada cambio operativo relevante debe generar o actualizar una historia de usuario.

---

## 🎨 PARTE 1: IDENTIDAD Y ALMA (Branding & UX)
Diseñado para la noche, la velocidad y la seducción. Sin esto, solo somos una cocina fantasma más.

### 1.1 Identidad Visual (Look & Feel)
- 🌑 Fondo: `#121212` (Negro Carbón). Modo oscuro absoluto. Nada de blanco clínico.
- 🐷 Acento Acción: `#FF0099` (Neon Pig). Botones de compra, alertas críticas y el "Botón Rojo".
- 🍞 Acento Dinero: `#FFD700` (Dorado Brioche). Precios, upselling y recompensas.

### 1.2 Tipografía de Combate
- **ANTON:** Gritos/Titulares. Grande, mayúsculas. Para nombres de burgers y alertas.
- **Roboto Mono:** Datos/Tiempos. Técnica, fría. Para tiempos de espera, precios y tickets.

### 1.3 Tono de Voz (Copywriting)
Personalidad: Canalla, directo, irreverente.

Regla de Oro: Jamás pedimos "por favor" ni decimos "lo sentimos". Retamos al ego del cliente.

- Mal: "Disculpe las molestias, no nos quedan patatas." 
- Bien: "🥔 MUNICIÓN AGOTADA. Las chips han volado. O traes las tuyas o comes a palo seco."

---

## 🏗️ PARTE 2: LA FORTALEZA (Infraestructura Crítica)
Hardware y flujo físico. Sin esto, el software no respira. Prioridad Absoluta.

### 2.1 El Cortafuegos (Red Fail-Safe)
- **Hardware:** Router Industrial 4G/5G con SIM propia (independiente de la fibra del local).
- **Protocolo:** Si la fibra cae, el 4G entra en 0.2 segundos. Stripe y Supabase nunca pierden conexión.
- **Objetivo:** El negocio no puede morir porque Telefónica tenga un mal día.

### 2.2 Gestión del Flujo Físico (Crowd Control)
La tecnología no sirve si la gente estorba en el pasillo.

- **El Carril Rápido (Muro QR):** Vinilo gigante antes del mostrador. Función: "Salta la cola". Copy: "¿Tienes prisa? Escanea, pide y adelanta a los indecisos." 
- **Señalética de Suelo (Floor Marking):**
  - Línea A (Izquierda): "👇 PIDE AQUÍ" (Kiosco/Tablet fija).
  - Línea B (Derecha): "🥡 ESPERA TU DROGA AQUÍ" (Zona de Recogida).

---

## 📱 PARTE 3: LA INTERFAZ CLIENTE (El Cebo)
Entrada de pedidos y psicología de precios.

### 3.1 Barrera de Entrada & Pricing
- **Precio Digital (11€):** Ahorra 1€ al pedir y pagar por QR o Kiosco — recompensa por autoservicio.

### 3.2 Features de Compra (Upselling Agresivo)
- 🍔 **La Ruleta del Hambre:** Selección aleatoria para indecisos.
- 🍟 **Upselling "Reto al Ego":** Trigger al pagar solo burger. Copy: "¿Vas a dejar que esa burger se vaya sola a casa?" (Sí / No).
- 📦 **Selector de Logística:**
  - Opción A: 🥡 Bolsa (Precintada).
  - Opción B: 🏃 Comer Andando (En mano, sin bolsa. Ahorra 20s de packing y 0,50€).

---

## 🧠 PARTE 4: EL CEREBRO (Lógica Algorítmica)
El sistema no cuenta tickets, cuenta **ESTRÉS ACUMULADO**.

### 4.1 Fórmula de Fricción Dinámica
$$
	ext{Fricción Total} = (\text{Puntos Base}) \times (\text{Factor Piloto}) \times (\text{Factor Lote})
$$

**A. Puntos Base (Esfuerzo físico por item):**
- 🥔 Chips: `0.15 pts` (coger y servir).
- 🍺 Bebida: `0.20 pts` (coger y entregar).
- 🍔 Burger Base: `1.00 pts` (tostar, plancha, montaje estándar).
- 🍔✨ Burger Custom: `1.20 pts` (montaje complejo + lectura de ticket).

**B. Factor Piloto (Login / Perfil):**
- **Novato:** `x1.2` (el sistema protege antes).
- **Veterano:** `x0.9` (el sistema permite correr).

**C. Factor Lote (Curva de Agobio):**
- Zona Flujo (1-4 items): `x0.9`.
- Zona Colapso (>10 items): `x1.5` (el estrés crece exponencialmente).

### 4.2 Módulo Defensa ("El Portero de Discoteca")
- **Trigger:** SI (Puntos Activos > Umbral de Colapso).
- **Acción:** Kiosco/QR muestran: "Cocina a tope. Tu pedido entrará en cola en X min". Desactiva "Recogida Inmediata".

---

## 🕹️ PARTE 5: HARDWARE TÁCTICO (El Cockpit)
Las herramientas físicas del piloto.

### 5.1 Módulo KDS (Pantalla de Cocina)
- Tarjeta de Comanda: Muestra el *Friction Score* (peso del ticket) en lugar del precio.
- Cronómetro gamificado: 🟢 Verde (&lt;3m) / 🟠 Naranja / 🔴 Rojo (&gt;5m).

### 5.2 Módulo IoT ("La Botonera Arcade")
Hardware físico oculto bajo barra.

- 🟢 **Botón Verde (BIO-BREAK):** Pausa técnica inmediata.
- 🟡 **Botón Amarillo (STOCK):** Cierra ventas 10 min para reposición.
- 🔴 **Botón Rojo (FLAG DE ESTRÉS):** No cierra ventas, pero marca el momento para Machine Learning.

---

## 📖 PARTE 6: PLAYBOOK & ESCENARIOS (Manual de Uso)

### ESCENARIO 1: "Modo Dios" (Override)
- **Contexto:** El algoritmo frena por seguridad, pero entra un VIP o el piloto decide acelerar.
- **Acción:** Pulsas el icono ⚡ en el KDS.
- **Efecto:** Ignora el "Portero" y el límite de seguridad durante 15 minutos. Mensaje KDS: "⚠️ SEGURIDAD DESACTIVADA. VUELAS SOLO."

### ESCENARIO 2: El Bio-Break (Urgencia Fisiológica)
- **Contexto:** Viernes noche. Estás solo. Necesitas ir al baño.
- **Acción:** Pisas el Botón Verde físico.
- **Efecto:** Pantallas externas muestran cronómetro gigante (05:00). Copy: "PAUSA TÉCNICA DEL PILOTO. Reabasteciendo fluidos. Volvemos en 4:59."

### ESCENARIO 3: Entrenamiento de la Bestia (Machine Learning)
- **Contexto:** Una combinación compleja te rompe el ritmo.
- **Acción:** Golpeas el Botón Rojo.
- **Efecto:** Envía `stress_event = TRUE`. El sistema aprende y la próxima vez ajusta puntos de fricción preventivamente.

### ESCENARIO 4: La Guillotina (Scarcity Marketing)
- **Contexto:** Quedan las últimas 8 raciones de carne.
- **Acción:** Mantener pulsado ingrediente (2s) en KDS.
- **Efecto:** Eliminado del menú global. IA lanza aviso a pantallas: "💀 ALERTA ZOMBIE: Quedan las últimas 8 burgers. Corred."

### ESCENARIO 5: IA Táctica (Copy por fallo)
- **Contexto:** Se rompe el equipo principal. Vas lento.
- **Acción:** Chat IA → "Tostadora rota".
- **Reacción:** Genera copy empático/gracioso para pantallas de espera.

### ESCENARIO 6: El Apagón (Fallo Total)
- **Contexto:** Cae la fibra Y el 4G.
- **Acción:** Datáfono de Respaldo (GPRS). Procedimiento manual de emergencia para cobro y registro (rotulador en la bolsa), con flujo claro para recuperar pedidos posteriores.
- **Resultado:** Lento y feo, pero el dinero sigue entrando.

---

## 📊 PARTE 7: POST-GAME (Analítica)
Al cerrar, recibes el "Damage Report":

- **Coste de Oportunidad:** Dinero perdido por uso de "La Guillotina" (Stock vs Demanda).
- **Mapa de Calor de Estrés:** Hora exacta de pulsaciones del Botón Rojo.
- **Takt Time Real:** Velocidad media de despacho vs. Teórica.

---

## Integración con Backlog Técnico
Mantén esta sección operativa como referencia de producto; cada ajuste de UX, copy o hardware debe traducirse en una historia de usuario en el backlog técnico. Ejemplos inmediatos:

- [MUST] Implementar Friction Score en KDS y su cálculo por receta.
- [MUST] Añadir trigger "Portero" y UI de bloqueo en kiosco/QR.
- [SHOULD] Integrar botones IoT físicos con webhooks al backend.

---

## Plan de Funcionalidades (Backlog técnico)
Mantén esta sección como la fuente de verdad para desarrollo — cada entrada debe ser una historia de usuario con criterios claros.

### Resumen ejecutivo
Santo Brain busca reducir fricción operativa y aumentar rentabilidad mediante:
- Centralizar canales de pedido (kiosco, delivery, web).
- Automatizar trazabilidad y stock por receta (escandallo vivo).
- Soportar decisiones mediante analítica simple (ventas, rotación, margen).
- Apoyar operaciones con micro-automatizaciones (etiquetado, alertas, reaprovisionamiento).

### Objetivos (SMART)
- Entregar un MVP en 3 meses que cubra pedidos, escandallo y gestión de cocina.
- Reducir errores de transcripción de pedidos en cocina un 90% en 1 mes post-lanzamiento.
- Aumentar ticket medio en un 12% mediante recomendaciones en checkout.

### Alcance del MVP
- Autenticación básica (empleado/admin).
- Kiosco web (QR) + Web checkout móvil.
- Integración básica con marketplaces (recepción unificada manual o vía API si existe).
- Escandallo vivo y gestión de stock por receta.
- Impresión/etiquetado térmico para producción.
- Dashboard mínimo: ventas, stock crítico, top productos.

### Módulos principales
1. Autenticación y roles
2. Pedidos (Kiosco / Web / Delivery middleware)
3. Producción y etiquetas
4. Stock y escandallos
5. Analítica y reportes
6. Backoffice: productos, precios, promociones
7. Integraciones (impresoras, pasarelas pago, marketplaces)
8. Notificaciones y alertas
9. Configuración y seguridad

### Plantilla: Ficha de Funcionalidad
Usa esta plantilla para describir cada feature antes de desarrollarla.

- Nombre: 
- Resumen: 
- Usuario objetivo: (ej. Cliente, Cocinero, Gestor, Admin)
- Historia de usuario: "Como <rol> quiero <acción> para <beneficio>"
- Criterios de aceptación: (lista de ítems verificables)
- Prioridad: (MUST / SHOULD / COULD / WON'T)
- Estimación: (puntos o días)
- Dependencias: (módulos, hardware, APIs)
- Notas técnicas: (si aplica)

---

## Fichas de funcionalidad sugeridas (ejemplos extraídas de la Biblia Operativa)

### F1 — Friction Score en KDS
- Nombre: Friction Score (KDS)
- Resumen: Calcular y mostrar el Friction Score por ticket en el KDS y usarlo para activar el Portero.
- Usuario objetivo: Cocinero / Operador
- Historia de usuario: "Como cocinero quiero ver el Friction Score para priorizar y saber si el ticket dispara medidas de protección." 
- Criterios de aceptación:
  - Cálculo = suma(Puntos Base por item) * Factor Piloto * Factor Lote.
  - Mostrar valor numérico y color (verde/naranja/rojo) en la tarjeta de comanda.
  - Emitir evento `friction_threshold_exceeded` si > umbral.
- Prioridad: MUST
- Estimación: 5 días
- Dependencias: DB recetas, perfil piloto, KDS.

### F2 — Trigger "Portero" (Protección)
- Nombre: Portero / Módulo Defensa
- Resumen: Bloquear recogida inmediata y mostrar mensaje en kiosco cuando el Friction Score supera el umbral.
- Usuario objetivo: Cliente (kiosco) y Cocina
- Historia de usuario: "Como gestor quiero que el kiosco muestre cola y desactive recogida inmediata cuando el sistema está bajo estrés." 
- Criterios de aceptación:
  - Detectar evento `friction_threshold_exceeded` y actualizar estado global a `degraded`.
  - Kiosco muestra mensaje: "Cocina a tope... X min" y desactiva opción de recogida inmediata.
  - Admin puede forzar override (Modo Dios) durante 15 minutos.
- Prioridad: MUST
- Estimación: 4 días
- Dependencias: F1, Kiosco UI, roles admin.

### F3 — Kiosco QR / Checkout móvil
- Nombre: Kiosco QR
- Resumen: Interfaz móvil responsive para autopedido y pago con upsells.
- Usuario objetivo: Cliente en local
- Historia de usuario: "Como cliente quiero pedir y pagar desde mi móvil para evitar cola y obtener incentivos digitales." 
- Criterios de aceptación:
  - Menú responsive, selector de variantes y upsells.
  - Pago integrado (Stripe/TPV) y fallback pago en local.
  - Generar ticket que entra al KDS y desencadena impresión de etiqueta.
- Prioridad: MUST
- Estimación: 7-10 días
- Dependencias: Pasarela pago, impresión térmica, backoffice productos.

### F4 — Botonera IoT (Botones físicos)
- Nombre: Botonera Arcade
- Resumen: Integrar botones físicos bajo barra con webhooks para BIO-BREAK, STOCK y FLAG.
- Usuario objetivo: Operador / Cocina
- Historia de usuario: "Como operario quiero pulsar un botón físico para marcar pausa o stress_event y que el sistema registre el evento." 
- Criterios de aceptación:
  - Botones envían webhook autenticado al backend.
  - Backend registra evento y actualiza estado operativo (pause, close_sales, stress_event).
  - Eventos visibles en KDS y reportados en el Damage Report.
- Prioridad: SHOULD
- Estimación: 5 días (hardware + software)
- Dependencias: Hardware IoT, webhooks, autenticación.

### F5 — Etiquetado Térmico y Trazabilidad
- Nombre: Etiquetado Térmico Automático
- Resumen: Imprimir etiquetas por lotes con fecha, caducidad y lote al pulsar producción.
- Usuario objetivo: Cocina / Almacén
- Historia de usuario: "Como operario quiero imprimir etiquetas que cumplan trazabilidad automáticamente para evitar errores manuales." 
- Criterios de aceptación:
  - Integración con impresora local y plantilla configurable.
  - Al confirmar producción se imprime etiqueta con YYYY-MM-DD HH:MM, lote, caducidad.
  - Registro en sistema de trazabilidad por lote.
- Prioridad: SHOULD
- Estimación: 3-5 días
- Dependencias: Driver impresora, API de impresión.

### F6 — La Guillotina (Escasez dinámica)
- Nombre: Guillotina — Scarcity Flow
- Resumen: Permitir eliminar items con long-press y disparar notificaciones de escasez.
- Usuario objetivo: Admin / Operador
- Historia de usuario: "Como operador quiero retirar producto del menú y lanzar mensajes de escasez para gestionar percepción y demanda." 
- Criterios de aceptación:
  - Long-press de 2s en KDS marca item como 'sold_out'.
  - Sistema emite notificación a pantallas e inyecta copy 'Últimas N unidades'.
  - Actualiza inventario y evita nuevas ventas del ítem.
- Prioridad: COULD
- Estimación: 2-3 días
- Dependencias: KDS, pantallas marketing, inventario.

### F7 — Propina en Checkout (Tip + Canalla LED)
- Nombre: Propina (Tip) en Checkout
- Resumen: Añadir opción de propina en el checkout (kiosco/web). Al aceptar la propina el sistema reproduce un pequeño efecto sonoro y muestra un mensaje irreverente/canalla en el "prompt LED" (o en pantallas del local) para reforzar la recompensa social.
- Usuario objetivo: Cliente, Operador
- Historia de usuario: "Como cliente quiero poder dejar una propina sencilla al pagar para apoyar al piloto; como operador quiero el feedback sonoro/visual que confirma la acción." 
- Criterios de aceptación:
  - Mostrar opciones de propina en el checkout (0, 1€, 2€, 5€ o custom).
  - Al confirmar propina, reproducir una notificación sonora (beep corto o pequeña melodía) y disparar un mensaje en el prompt LED con copy canalla/reconocedor.
  - Registrar la propina en la orden y en la contabilidad/export CSV.
  - Permitir deshabilitar el sonido desde configuración (privacidad/zonas silenciosas).
- Prioridad: SHOULD
- Estimación: 2 días
- Dependencias: UI Checkout, KDS (para mostrar confirmación en cocina si aplica), ajustes en export contable.


---

## Roadmap sugerido (temporal)
1. Mes 0-1: Autenticación, Backoffice productos, Escandallo, F1 (Friction Score).
2. Mes 1-2: Kiosco QR (F3), Portero (F2), Etiquetado (F5).
3. Mes 2-3: Botonera IoT (F4), Dashboard KPI, Guillotina (F6).
4. Post-MVP: Integraciones con marketplaces y automatizaciones IA (facturas, sugerencias upsell).

---

## KPIs y métricas (operativo + técnico)
- Tiempo medio desde pedido hasta impresion de etiqueta (objetivo < 30s).
- Error en pedidos recibidos por cocina (% de tickets reingresados). Objetivo < 5%.
- Ticket medio y % incremento por recomendaciones.
- Detecciones de `stress_event` por turno y mapa de calor.
- Tasa de uso de Modo Dios y su impacto en SLA.

---

## Export / Operaciones finales
Si quieres que genere artefactos automáticos: puedo

- Generar un CSV/JSON con las fichas (F1..F6) listo para importar en GitHub Issues/Trello.
- Crear una versión PDF imprimible y guardarla en `public/assets/santo_brain_v7.pdf`.

---

### ¿Qué hago ahora?
- Puedo generar el CSV/JSON con las fichas de ejemplo (F1..F6) ahora. 
- O crear el PDF imprimible.
- O comprobar en el viewer (`plan_viewer_santo_brain.html`) que se ve correcto (necesita servidor local).

