<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      titulo: 'Cuestionario',
      introduccion: '<b>Objetivo:</b> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>