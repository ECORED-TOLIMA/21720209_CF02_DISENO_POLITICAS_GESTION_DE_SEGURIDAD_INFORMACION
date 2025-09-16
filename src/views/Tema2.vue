<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Objetivos de seguridad de la información
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Son la guía estratégica para proteger los activos más valiosos de una organización, frente a amenazas y riesgos. En este tema, se abordará su concepto, importancia, requisitos esenciales y la metodología para diseñarlos de manera efectiva. El propósito es comprender cómo estos objetivos fortalecen la confianza en las organizaciones.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
    
    p.mb-5(data-aos="fade-down") A continuación, se presentan dos conceptos sobre los objetivos de seguridad de la información, con el fin de que comprendan su significado desde la parte técnica y general; con ello, se puede tener una mejor idea al respecto: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema2/img02.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición técnica
            p.mb-0.text-white(data-aos="fade-down") Los objetivos de seguridad de la información son las metas que una empresa define para proteger sus activos de información, frente a los riesgos identificados. Los objetivos definidos tienen que ser coherentes con la política de seguridad, medibles, estar alineados con el tratamiento de los riesgos, comunicados y actualizables en la medida que se vayan dando cambios en el entorno; además, la empresa tiene que documentarlos y planificar quién los alcanzará, con qué tipo de recursos, en qué plazo y cómo se evaluará su cumplimiento (EEE, 2022). 

          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema2/img03.svg', alt='Imagen decorativa')(style="width: 85%")
              
            h4.text-center.text-white(data-aos="fade-down") Definición general
            p.mb-0.text-white(data-aos="fade-down") Un objetivo de seguridad de la información es una meta que busca garantizar en una organización la protección de sus activos de información más valiosos y de sus sistemas, frente a las amenazas y riesgos. Estos direccionan las acciones y los controles que se necesitan para conservar la confidencialidad, integridad y disponibilidad de la información. También sirven como referencia para evaluar el desempeño de las medidas que se implementan y promueven con el fin de mantener una mejora continua. Para tener éxitos con ellos en las empresas, los objetivos tienen que ser claros, medibles y realistas, de tal forma que puedan irse adaptando a los diversos cambios tecnológicos, logísticos, empresariales y de la dinámica del entorno, que se van dando en el tiempo. 

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para que se tengan unos modelos que sirvan de guía, a continuación, se comparte una lista de ejemplos de objetivos, con una breve explicación de cada uno, de acuerdo a lo expresado por la Escuela Europea de Excelencia (EEE) (2022):
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Ejemplos de objetivos de seguridad de la información</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 50%") Objetivos
                th(data-aos="fade-down")(style= "width: 50%") Descripción breve
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reducir en un 50 % las incidencias de seguridad de la información en un plazo definido.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Busca minimizar los incidentes relacionados con accesos no autorizados, fugas de datos o mal uso de la información, mediante controles y medidas preventivas.
              tr
                td(data-aos="fade-down") Cumplir al 100 % con los requisitos establecidos en la norma ISO 27001.
                td(data-aos="fade-down") Garantiza que la organización implemente y mantenga todas las prácticas y controles exigidos por este estándar internacional.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Atender plenamente las necesidades y expectativas del área de gestión de riesgos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alinea las acciones de seguridad con las políticas y criterios establecidos por el equipo responsable de identificar y gestionar riesgos.
              tr
                td(data-aos="fade-down") Lograr un nivel específico de madurez en seguridad de la información.
                td(data-aos="fade-down") Implica alcanzar un grado de protección definido, medido por estándares internos o externos, que permita operar de forma segura.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Obtener una certificación o acreditación oficial en seguridad de la información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Busca que la organización sea reconocida formalmente por cumplir con altos estándares en la protección de datos y sistemas.
    
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema2/img04.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02
            .p-4
              p.mb-0 Conocer diferentes enfoques, facilita el conectarse con una visión más completa, lo que ayuda a interpretar y aplicar los objetivos de una mejor manera; esto, con el fin de lograr lo que se busca con ellos, que es proteger la información y fortalecer la confianza organizacional. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Importancia
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center.mb-5
          .col-lg-5.col-12.order-lg-1.order-2
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img05.svg', alt='Imagen decorativa')
          .col-lg-7.col-12.order-lg-1.order-2
            .bloque-texto-b.color-primario.p-4
              .bloque-texto-b__texto                
                p(data-aos="fade-up") La importancia de los objetivos de seguridad de la información, radica principalmente en que se convierten en la guía o la hoja de ruta que marca el rumbo para la protección de los activos de información más valiosos para una organización o empresa. Su correcta formulación, permite alinear la seguridad con las estrategias del negocio, con lo que garantizan la confidencialidad, integridad y disponibilidad de los datos.
        p(data-aos="fade-down") La aplicación adecuada de estos objetivos, ayuda a aplicar los siguientes procesos: 
    
    .row.mb-5
      .col-lg-4.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Mitigación
              p.mb-0.text-center Unos objetivos bien formulados, permiten priorizar recursos, definir controles adecuados, cumplir con normativa ajustada vigente y reducir la probabilidad e impacto de los incidentes.

      .col-lg-4.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Confianza
              p.mb-0.text-center En todos los interesados, tales como los clientes, los aliados estratégicos, los empleados y el resto de todas las partes interesadas, demostrando con ello el compromiso que tiene la empresa con la gestión responsable de la información. 

      .col-lg-4.col-lg(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C05(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h4.text-center Prevención
              p.mb-0.text-center Otro de los puntos más considerables por lo que unos buenos objetivos adquieren alta relevancia, es porque ayudan en la prevención de pérdidas económicas, daños a la reputación y sobre todo problemas legales, lo que facilita la continuidad del negocio y fortalece su competitividad en un entorno donde la tecnología y la globalización toma cada día mayor protagonismo.
    
    .p.mb-5(data-aos="fade-down") Para seguir entendiendo la importancia que revisten los objetivos y por qué se tienen que redactar muy bien, al centrar en ellos la seguridad de la información de la empresa, a continuación, se comparten unos puntos considerables con ejemplos que se toman desde la realidad de las pymes colombianas:

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row.mb-0(numero="1" titulo="Prevención de incidentes")
            .col-12
              p Definir objetivos claros reduce la probabilidad de ataques cibernéticos, fugas de información o errores humanos.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                p.mb-0 <b>Ejemplo</b>: implementar un objetivo para que el 100 % de los empleados cambien sus contraseñas cada 90 días puede disminuir accesos indebidos.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img09.jpg', alt='Imagen decorativa')

          .row.mb-0(numero="2" titulo="Cumplimiento normativo")
            .col-12
              p Facilitan la adaptación a leyes como la Ley 1581 de 2012 (protección de datos personales) o estándares como ISO/IEC 27001.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                p.mb-0 <b>Ejemplo</b>: tener un objetivo de cumplir al 100 % con la Ley 1581 evita sanciones de la Superintendencia de Industria y Comercio.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img10.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="3" titulo="Alineación con la gestión de riesgos")
            .col-12
              p Permiten que la seguridad de la información esté integrada con el plan de gestión de riesgos de la empresa.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                p.mb-0 <b>Ejemplo</b>: si el área de riesgos detecta que el acceso físico a los servidores no está controlado, un objetivo puede ser instalar cerraduras electrónicas en 30 días.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img11.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="4" titulo="Mejora continua")
            .col-12
              p Los objetivos sirven como indicadores que permiten medir y mejorar continuamente los procesos de seguridad.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                p.mb-0 <b>Ejemplo</b>: reducir las incidencias de <em>malware</em> en un 60 % mediante campañas internas de concientización.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img12.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="5" titulo="Reputación y confianza")
            .col-12
              p Cumplir objetivos de seguridad refuerza la imagen de la empresa y la confianza de clientes y socios.
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                p.mb-0 <b>Ejemplo</b>: garantizar la protección de datos en operaciones en línea, ayuda a ganar la confianza de nuevos clientes.
            .col-12.mb-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/temas/tema2/img13.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Los objetivos de seguridad de la información, se pueden considerar piezas fundamentales para la orientación de acciones de protección de la información y sistemas de una organización, para garantizar que se mantengan alineados con la estrategia y necesidades del negocio.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Requisitos
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") Para formular unos adecuados objetivos, es imprescindible tener en cuenta unos requisitos, tal como lo establece la norma ISO/IEC 27001. En ella se explican en qué consisten, cómo pueden aplicarse en la práctica y se apoyan con unos ejemplos, pensando en el escenario de una pyme.
    p.mb-5(data-aos="fade-down") Por lo anterior, la siguiente información basada en lo expuesto por ESGinnova (s.f.), permitirá comprender no solo qué exige la norma, sino cómo puede llevarse a cabo en la realidad de forma efectiva y medible:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Lista de requisitos </em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 20%") Requisito
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo práctico en una pyme
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Coherencia con la política de seguridad de la información
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Los objetivos tienen que alinearse con lo que se establezca en la política general de seguridad de la organización, con el fin de garantizar el respaldo institucional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Si la política indica (proteger la información confidencial de los clientes), un objetivo podría ser (implementar cifrado en el 100 % de las bases de datos antes de fin de año).
              tr
                td.text-bold(data-aos="fade-down") Medible en lo posible
                td(data-aos="fade-down") Siempre que se tenga la posibilidad, los objetivos tienen que incluir indicadores que permitan evaluar su cumplimiento, ya sea de forma cuantitativa o cualitativa.
                td(data-aos="fade-down") Reducir en un 30 % el número de incidentes de <em>phishing</em> reportados en seis meses.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Consideración de requisitos y resultados de la gestión de riesgos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hay que tener en cuenta las leyes, las regulaciones, los requisitos contractuales y los hallazgos que se hayan encontrado en la evaluación de los riesgos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establecer controles de acceso basados en roles, debido a que el análisis de riesgos detectó accesos no autorizados como amenaza prioritaria.
              tr
                td.text-bold(data-aos="fade-down") Monitoreo
                td(data-aos="fade-down") Los objetivos tienen que estarse revisando periódicamente, con el fin de que se puedan verificar sus avances, posibles estancamientos o si se han dado desviaciones que no han permitido cumplir o entenderlos. Esto juega mucho con la mejora continua y también sirve para saber si tienen que ser reajustados o reformulados.
                td(data-aos="fade-down") Revisar trimestralmente el porcentaje de cumplimiento de copias de seguridad realizadas, según el plan establecido.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Comunicación
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Los objetivos y su estado de avance tienen que ser comunicados a las partes interesadas, con el fin de asegurar su comprensión y compromiso para cumplirse.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Presentar en la reunión mensual de gerencia el avance de los objetivos de seguridad y las acciones pendientes.
              tr
                td.text-bold(data-aos="fade-down") Actualización
                td(data-aos="fade-down") Los objetivos tienen que revisarse y reajustarse cuando se den cambios en los riesgos, en el entorno o en las prioridades de la empresa. 
                td(data-aos="fade-down") Actualizar el objetivo de seguridad para incluir la protección de información en los teléfonos celulares, para quienes se han ido a trabajar de forma remota en campo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Disponibilidad como información documentada
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Los objetivos tienen que registrarse formalmente y estar disponibles como parte de la documentación de un SGSI.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guardar en el repositorio de la empresa un documento actualizado con todos los objetivos de seguridad, fechas y los responsables.
              tr
                td.text-bold(data-aos="fade-down") Planificación detallada para lograrlos
                td(data-aos="fade-down") Se debe definir qué se hará, qué recursos se usarán, quién será responsable, los plazos y los criterios de evaluación.
                td(data-aos="fade-down") Plan para implantar autenticación multifactor en todos los sistemas: asignar responsable del área de TI, presupuesto para licencias, fecha de ejecución y auditoría final para validar cumplimiento.
    
    .tarjeta.tarjeta--BG03.px-4.px-lg-5.mb-4
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .row.justify-content-center
              .col-lg-6.col-12.order-lg-1.order-2
                p.mb-0(data-aos="fade-down") Ceñirse a estos requisitos, garantiza que los objetivos formulados en su mayoría sean claros, medibles, alcanzables y que estén alineados con la cultura organizacional de la empresa. Tenerlos en cuenta y trabajar con ellos, no solo demuestra conformidad con estándares internacionales como la ISO/IEC 27001, sino que da facilidades para su seguimiento y para mantener una mejora continua, demostrando que los objetivos terminan convertidos en herramientas confiables y efectivas para proteger los activos de información de la empresa y responder oportunamente ante los riesgos que puedan encontrarse en el camino. 
              .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-3
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa')
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Metodología de diseño
    
    p.mb-5(data-aos="fade-down") El diseño de objetivos, requiere un enfoque sistemático que asegure su alineación con la cultura organizacional y con la normativa vigente; por lo tanto, una metodología bien estructurada ayuda en la construcción de objetivos claros, medibles y sobre todo realistas, garantizando su evaluación y mejora continua. Se recomienda tener en cuenta las siguientes directrices para trabajar en la construcción de los objetivos: 

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Análisis del contexto organizacional
              p Aquí se recomienda identificar el tipo de información que se maneja, los riesgos y las amenazas, los requisitos legales y la normativa aplicable. 
              p.mb-0 <b>Ejemplo</b>: la empresa maneja datos sobre producción, ventas y salud del ganado y debe cumplir con la Ley 1581 de 2012 sobre protección de datos.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img16.jpg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img17.jpg', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Alineación con la política de seguridad de la información
              p Se asegura que los objetivos respalden los principios y directrices establecidos en la política general de la organización.
              p.mb-0 <b>Ejemplo</b>: si la política establece (proteger la información crítica de la empresa), un objetivo podría ser: implementar un sistema de copias de seguridad semanal.
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Definición de objetivos SMART
              p Los objetivos deben ser específicos, medibles, alcanzables, relevantes y con un tiempo definido. Más adelante se profundizará en esta técnica, la cual es recomendable para la construcción de los objetivos.
              p.mb-0 <b>Ejemplo</b>: reducir en un 30 % los incidentes de pérdida de datos en 12 meses.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img18.jpg', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img19.jpg', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Asignación de responsables y recursos
              p Se determina quién liderará cada objetivo y qué recursos (humanos, tecnológicos, financieros) serán los necesarios para ello.
              p.mb-0 <b>Ejemplo</b>: el jefe de TI será responsable de la implementación del control de accesos.
          .row.justify-content-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-down")
              h4 Plan de seguimiento y evaluación
              p En esta parte se establecen indicadores y métodos para medir el avance y cumplimiento de los objetivos. 
              p.mb-0 <b>Ejemplo</b>: indicador: número de incidentes de acceso no autorizado detectados mensualmente.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img20.jpg', alt="Imagen decorativa") 
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img21.jpg', alt="Imagen decorativa")          
            .col-lg-8(data-aos="fade-down")
              h4 Revisión y mejora continua
              p En esta etapa final, es donde se ajustan los objetivos en función de cambios en el contexto, resultados de evaluaciones y auditorías internas.
              p.mb-0 <b>Ejemplo</b>: revisar los objetivos cada seis meses para adaptarlos a nuevas amenazas tecnológicas.
    
        p(data-aos="fade-down") Una de las metodologías más usadas en la construcción de objetivos es la SMART, cuyo nombre parte de un acrónimo por sus siglas en inglés, para alinearse con todas las especificaciones y necesidades de los objetivos de seguridad de información en una organización.
        p.mb-4(data-aos="fade-down") Dicha metodología, se explica a continuación:

    .row.justify-content-center
      .col-12.mb-4.movil
        figure
          img(src='@/assets/curso/temas/tema2/img22.svg', alt='Imagen decorativa')
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/img23.svg', alt="Imagen decorativa")
          .tarjeta.color-acento-botones.p-3(x="8.5%" y="90%" numero="+")
            p <b>S</b> – El objetivo debe estar claramente definido, sin ambigüedades, indicando qué se quiere lograr, quién será responsable y sobre qué información o proceso se trabajará.
            p <b>Ejemplo</b>: implementar un sistema de respaldo semanal de la base de datos de inventario del ganado.
          .tarjeta.color-acento-botones.p-3(x="22%" y="90%" numero="+")
            p <b>M</b> – Incluye indicadores cuantitativos o cualitativos que permitan evaluar el progreso y el grado de cumplimiento.
            p <b>Ejemplo</b>: reducir en un 30 % los incidentes de pérdida de datos en 6 meses, medido por el registro de incidentes mensuales.
          .tarjeta.color-acento-botones.p-3(x="37%" y="90%" numero="+")
            p <b>A</b> – El objetivo debe ser realista, considerando los recursos humanos, técnicos y financieros de la organización.
            p <b>Ejemplo</b>: capacitar al 100 % del personal administrativo en manejo seguro de contraseñas en un plazo de 3 meses, utilizando el presupuesto actual de capacitación.
          .tarjeta.color-acento-botones.p-3(x="49%" y="90%" numero="+")
            p <b>R</b> – Tiene que alinearse con las prioridades estratégicas de la organización y aportar valor real a la seguridad de la información.
            p <b>Ejemplo</b>: proteger la información de trazabilidad del ganado para cumplir con requisitos legales y de exportación.
          .tarjeta.color-acento-botones.p-3(x="61%" y="90%" numero="+")
            p <b>T</b> – Definir un plazo para su cumplimiento, lo que ayuda a priorizar y planificar las acciones.
            p <b>Ejemplo</b>: implementar un sistema de control de accesos físicos en la oficina administrativa antes del 30 de junio de este año.
        p.mb-5(data-aos="fade-down") Para mayor comprensión, a continuación, se comparten nuevos ejemplos de objetivos de seguridad de la información, utilizando la técnica SMART, aplicada a diferentes sectores pyme: 
    
    .row.cajon.BG04.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.py-lg-0.py-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none.order-lg-2.order-2(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img24.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF.order-lg-1.order-2(columnas="col-lg-6 col-xl-6")
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img25.svg' alt='AvatarTop')
                h5 1. Empresa de consultoría contable
                p.mb-0 Reducir en un 30 % los incidentes de <em>phishing</em> detectados en la empresa, mediante capacitaciones mensuales al personal durante los próximos 6 meses.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img26.svg' alt='AvatarTop')
                h5 2. Agencia de <em>marketing</em> digital
                p.mb-0 Implementar un sistema de copias de seguridad automáticas en la nube para todos los equipos de la empresa, antes del 15 de diciembre, con verificación semanal de su correcto funcionamiento.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img27.svg' alt='AvatarTop')
                h5 3. Empresa de desarrollo de <em>software</em>
                p.mb-0 Disminuir en un 25 % los tiempos de respuesta ante incidentes de seguridad, mediante la creación y aplicación de un protocolo de actuación antes de 4 meses.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img28.svg' alt='AvatarTop')
                h5 4. Firma de abogados
                p.mb-0 Lograr que el 100 % de los empleados firmen y comprendan la política de seguridad de la información, antes del 31 de marzo, con sesiones explicativas de 1 hora para cada área.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img29.svg' alt='AvatarTop')
                h5 5. Empresa de comercio electrónico
                p.mb-0 Reducir en un 40 % el número de contraseñas débiles detectadas, mediante la implementación de autenticación multifactor en todos los accesos críticos en un plazo de 3 meses.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img30.svg' alt='AvatarTop')
                h5 6. Empresa de logística
                p.mb-0 Aumentar en un 50 % la detección temprana de amenazas internas, mediante la instalación de un <em>software</em> de monitoreo de actividad antes del final del trimestre.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img31.svg' alt='AvatarTop')
                h5 7. Clínica odontológica
                p.mb-0 Capacitar al 90 % del personal en manejo seguro de datos personales en un programa de formación de 2 horas, antes del 30 de junio.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img32.svg' alt='AvatarTop')
                h5 8. Empresa de impresión y diseño gráfico
                p.mb-0 Reducir las vulnerabilidades críticas identificadas en auditorías internas en un 70 % en los próximos 5 meses, mediante la aplicación de parches y actualizaciones.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img33.svg' alt='AvatarTop')
                h5 9. Empresa de consultoría tecnológica
                p.mb-0 Conseguir la certificación ISO 27001 en un periodo de 12 meses, para reforzar la confianza de los clientes y socios estratégicos.
              .tarjeta.tarjeta--blanca.p-3
                .row.justify-content-center.mb-2
                  .col-lg-6.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema2/img34.svg' alt='AvatarTop')
                h5 10. Empresa de arquitectura e ingeniería
                p.mb-0 Disminuir en un 35 % el acceso no autorizado a archivos sensibles, mediante la implementación de permisos basados en roles en un plazo de 4 meses.

    p.mb-5(data-aos="fade-down") La formulación de objetivos de seguridad de la información bajo la metodología SMART, permite a las pymes establecer metas claras, medibles y alcanzables, alineadas con su realidad operativa y recursos disponibles. Este enfoque no solo facilita el seguimiento y la evaluación de avances, sino que también garantiza que las acciones estén orientadas a resultados concretos y relevantes para la protección de los activos de información. 

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Además, al definir plazos precisos, se fomenta la disciplina y el compromiso organizacional para cumplir con las metas propuestas, fortaleciendo así la cultura de seguridad en la empresa.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
