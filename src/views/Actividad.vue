<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad        
      ActividadController(:cuestionario="cuestionario")
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
      tema: 'Creación de la automatización del proceso con UiPath',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la automatización de procesos, el uso de UiPath, la construcción de <i>workflows</i>, las variables, el control de flujo y la administración de robots de <i>software</i>.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿En qué consiste la automatización dentro del ámbito informático?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar tareas mediante tecnología con mínima intervención humana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Realizar tareas mediante personas con intervención tecnológica constante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Supervisar procesos mediante informes con intervención humana permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentar procesos mediante archivos con revisión manual frecuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a un proceso dentro de una automatización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representa una acción específica ejecutada de manera independiente siempre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integra varias tareas relacionadas siguiendo una secuencia para resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Describe una variable utilizada para almacenar información durante ejecuciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Define una aplicación empleada para administrar proyectos ya terminados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué significa RPA en el contexto de la automatización?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registro Programado de Procesos Automatizados mediante herramientas informáticas especializadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Robot Programable para Procesos Administrativos mediante aplicaciones informáticas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Automatización Robótica de Procesos mediante robots de software configurados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Administración Remota de Procesos Automatizados mediante plataformas tecnológicas integradas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica favorable de un proceso candidato a automatización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar numerosas excepciones que requieren decisiones humanas durante ejecuciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizar información principalmente física que requiere transcripción manual durante procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar constantemente las aplicaciones utilizadas para ejecutar las actividades programadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Poseer reglas de negocio claras y previamente definidas para ejecutarse.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función principal de UiPath Studio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar y construir automatizaciones mediante actividades y flujos de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Supervisar y programar automatizaciones mediante procesos publicados y ejecutados remotamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Iniciar y gestionar automatizaciones disponibles directamente desde el equipo local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar exclusivamente instrucciones configuradas previamente dentro de los procesos automatizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué componente de UiPath ejecuta las instrucciones definidas en la automatización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'UiPath Studio diseña las actividades configuradas dentro del flujo automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Robot desarrolla las actividades configuradas siguiendo la secuencia previamente establecida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Assistant publica los proyectos configurados para administrarlos mediante servicios remotos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Orchestrator construye directamente las actividades utilizadas durante el diseño del <i>workflow.</i>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite realizar UiPath Orchestrator dentro de la plataforma?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Construir <i>workflows</i> mediante actividades incorporadas directamente desde el entorno gráfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenar exclusivamente variables utilizadas durante la ejecución del flujo de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Publicar, programar, ejecutar y supervisar las automatizaciones desarrolladas en UiPath.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Diseñar interfaces gráficas para reemplazar las aplicaciones utilizadas durante procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál corresponde a una etapa del ciclo de vida de una automatización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la documentación antes de comenzar la construcción del robot automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificar continuamente las aplicaciones mientras se ejecutan los procesos ya automatizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Construir primero el robot y posteriormente identificar el proceso que será automatizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar y documentar el proceso antes de diseñar la solución automatizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Desde dónde se obtiene el instalador de UiPath Studio según el documento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desde Automation Cloud utilizando las opciones disponibles en Resource Center.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Desde UiPath Assistant utilizando directamente las opciones internas del robot instalado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desde Main Sequence utilizando las herramientas disponibles para descargar nuevos proyectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Desde Data Manager utilizando las opciones destinadas a administrar paquetes instalados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué modalidad de licencia se utiliza para el proceso de aprendizaje y práctica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enterprise License destinada principalmente al desarrollo corporativo de procesos automatizados complejos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Community License destinada al proceso de aprendizaje y práctica con UiPath.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Professional License orientada principalmente al desarrollo individual de aplicaciones automatizadas empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Academic License utilizada exclusivamente para administrar procesos educativos mediante Automation Cloud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué archivo corresponde al <i>workflow </i>principal de un proyecto en UiPath Studio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'project.json contiene exclusivamente el <i>workflow </i>principal utilizado durante toda la automatización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dependencias contiene directamente las actividades principales ejecutadas durante todo el proceso automatizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Main.xaml corresponde al <i>workflow </i>principal utilizado dentro del proyecto de automatización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Plantillas contiene exclusivamente la secuencia principal donde se incorporan todas las actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función del panel Data Manager en UiPath Studio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar directamente las automatizaciones desarrolladas dentro del proyecto antes de publicarlas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mostrar exclusivamente los errores encontrados durante la validación completa del proyecto desarrollado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Administrar únicamente las propiedades visuales correspondientes a las actividades del flujo automatizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Administrar variables, argumentos, espacios de nombres y conexiones utilizadas en proyectos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite almacenar una variable durante una automatización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información que puede cambiar durante la ejecución del flujo de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Actividades que deben ejecutarse permanentemente dentro del flujo de trabajo creado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicaciones que deben instalarse antes de comenzar la automatización del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proyectos que deben publicarse después de completar las pruebas del robot.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de dato utiliza la variable “resultado” en el caso de estudio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Int32 porque almacena cantidades enteras obtenidas durante cada conversión realizada automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'String porque almacena como texto el contenido recuperado desde la aplicación web.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Boolean porque almacena únicamente el estado verdadero o falso del resultado obtenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'DateTime porque registra la fecha exacta correspondiente a cada resultado de conversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función de la estructura If dentro de UiPath?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recorrer cada elemento almacenado dentro de una colección de valores previamente definida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Repetir indefinidamente actividades sin evaluar condiciones durante la ejecución del flujo automatizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar una condición y ejecutar una de dos ramas según el resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Seleccionar automáticamente múltiples proyectos para ejecutarlos simultáneamente desde UiPath Studio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumple la estructura For Each en una automatización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar únicamente una actividad cuando una condición específica resulta completamente verdadera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar una rama entre varias dependiendo del valor obtenido durante una expresión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Repetir actividades mientras una condición permanezca verdadera antes de cada nueva iteración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recorrer cada elemento de una colección y ejecutar actividades para cada elemento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué tipo de proyecto se utiliza para desarrollar el caso práctico presentado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proceso, porque permite estructurar y ejecutar actividades del flujo de automatización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Biblioteca, porque permite almacenar componentes reutilizables para ejecutar directamente la automatización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Plantilla, porque permite configurar estructuras reutilizables como proyecto principal de automatización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Prueba, porque permite validar aplicaciones mediante flujos destinados únicamente a comprobaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué función cumple el panel Output o Salida en UiPath Studio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar las variables y argumentos empleados durante la construcción del flujo automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Consultar información generada durante la ejecución y facilitar el seguimiento del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Modificar propiedades correspondientes a las actividades seleccionadas dentro del diseñador del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Buscar rápidamente comandos disponibles para incorporarlos directamente dentro del flujo de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Para qué se utilizan los argumentos dentro de una automatización en UiPath?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener valores completamente fijos durante toda la ejecución de un proceso automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar exclusivamente errores generados durante la ejecución de diferentes actividades del <i>workflow.</i>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Intercambiar información entre diferentes <i>workflows</i> mediante entradas, salidas o ambas direcciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Almacenar colecciones completas destinadas exclusivamente a estructuras repetitivas del tipo For Each.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué finalidad tienen las constantes dentro de una automatización desarrollada en UiPath?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Intercambiar información variable entre diferentes <i>workflows</i> durante la ejecución del proceso automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recorrer colecciones de datos mediante ciclos configurados dentro del flujo de trabajo principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Almacenar resultados obtenidos desde aplicaciones <i>web</i> que cambian durante cada nueva ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Representar valores que deben permanecer sin modificaciones durante la ejecución del proceso.',
              esCorrecta: true,
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
