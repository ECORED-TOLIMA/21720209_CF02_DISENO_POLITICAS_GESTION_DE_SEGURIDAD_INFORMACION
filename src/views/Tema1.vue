<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Políticas de seguridad de la información
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") Representan el pilar sobre el cual se va a definir, organizar y regular la protección de los activos de información en una organización. Las políticas no se limitan solo a ser unos documentos formales, por el contrario, representan compromisos estratégicos que guían la ruta que tiene que seguir el personal, frente a las amenazas y los riesgos. A través de ellas, se establecen los principios, los lineamientos y las responsabilidades que orientan la gestión de la seguridad, buscando que las decisiones y acciones que se tomen, estén alineadas con los objetivos organizacionales. Entender su importancia y su correcta formulación, es fundamental para fortalecer la entereza de la empresa y garantizar la continuidad del negocio en un entorno cada vez más digitalizado y expuesto a incidentes.
        .cajon.cajon.C01.px-4.py-4
          .row.justify-content-center
            .col-lg-auto.col-4.mb-lg-0.mb-4
              figure(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema1/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") En este tema, se abordará el concepto, la estructura, las técnicas de redacción y los criterios para alinear las políticas de seguridad de la información con las características propias de cada organización. Además, se destacará su papel estratégico en la protección de los activos, la mitigación de los riesgos y el cumplimiento de la normativa. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto
    
    p.mb-5(data-aos="fade-down") En este apartado se explorará el concepto de una política de seguridad de la información, con el fin de que puedan entender mucho mejor su propósito, alcance e importancia dentro de una organización; por ello, a continuación, se presentan diferentes definiciones formales (autores) y una más informal (propia) para facilitar su comprensión:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Orsys (s.f.)")
            .col-12.mb-0.mb-md-0
              p Una política de seguridad de la información, es un documento estratégico y operativo que indica el conjunto de directrices, normas y procedimientos en los que se ampara una organización (asociación, empresa o entidad pública), con el propósito de proteger sus activos de información (datos, sistemas, infraestructura) frente a las amenazas internas y externas que se puedan tener, motivando una cultura de seguridad organizacional.
          .row(titulo="Función pública (2020)")
            .col-12.mb-0.mb-md-0
              p Es una declaración general institucional definida para la protección de los activos de información, aplicando lineamientos a los procesos internos y compatibles con el modelo de gestión existente, que guía y sensibiliza sobre el uso responsable de los datos que son clasificados como críticos.
          .row(titulo="Fortinet (s.f.)")
            .col-12.mb-0.mb-md-0
              p Son un conjunto de procedimientos y normas, que se han generado para dar garantías sobre el uso y el acceso seguro a los recursos y los activos de información, al personal y demás interesados. Las políticas son más que estrategias, al representar un reflejo de la cultura de la organización, donde el éxito de su implementación depende del compromiso que tengan todos los miembros de la organización. 
          .row(titulo="Propia")
            .col-12.mb-0.mb-md-0
              p Una política de seguridad de la información es un conjunto de reglas y acuerdos, con los cuales una empresa o una organización cualquiera, establece para cuidar la información que considere importante. Aquí se indica qué se puede hacer y qué no, sobre quién recae la responsabilidad de proteger los activos de información y cómo se tienen que manejar para evitar su perdida, daño o acceso no autorizado; en otras palabras, es un manual que da las directrices para mantener protegida la información frente a amenazas y riesgos. 
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Hay que tener en cuenta que con las políticas se establecen los principios y objetivos generales de la seguridad de la información y que estas tienen que ser aprobadas por las directivas de la empresa.
    
    p.mb-0(data-aos="fade-down") Por lo que se puede entender, las políticas de seguridad de la información, son guías revestidas de mucha importancia para la protección de los recursos físicos y tecnológicos que contienen la información más relevante y cuya efectividad depende de que los miembros de la empresa las comprendan, acepten, respeten y apliquen, fortaleciendo así la cultura de seguridad y minimizando los riesgos internos y externos.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Estructura

    p.mb-5(data-aos="fade-down") La estructura de una política de seguridad de la información, está compuesta por una serie de lineamientos y elementos que permiten establecer un marco sólido para una efectiva protección de los activos de la información. En la siguiente tabla, se detallan los principales elementos, los cuales pueden variar según las necesidades y recursos de la organización, con una explicación, un ejemplo para una mayor comprensión y sugerencias de normativas aplicables:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Lineamientos de la estructura de una política de seguridad de la información</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 20%") Lineamiento
                th(data-aos="fade-down")(style= "width: 30%") Explicación
                th(data-aos="fade-down")(style= "width: 30%") Ejemplo para pyme
                th(data-aos="fade-down")(style= "width: 20%") Normativa / Estándar
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito, objetivo y alcance
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Documenta el compromiso de la alta dirección y define para qué, a quién, dónde y cuándo aplica la política.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una tienda de repuestos de automóviles define que su política aplica a todos los empleados, a la base de datos de clientes y proveedores y a los equipos de cómputo utilizados en la oficina y el almacén.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ISO/IEC 27001, cláusula 5.2.
              tr
                td.text-bold(data-aos="fade-down") Alcance, propietario y accesibilidad
                td(data-aos="fade-down") Define responsables, mecanismos de mantenimiento y de fácil acceso para todos. 
                td(data-aos="fade-down") El coordinador de TI es el responsable de mantener la política actualizada y accesible en intranet y restringe el uso de computadoras para fines laborales, prohibiendo instalar <em>software</em> sin autorización.
                td(data-aos="fade-down") ISO/IEC 27001, cláusula 5.3.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Compatibilidad con políticas dependientes
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establece como guía para políticas específicas vinculadas al SGSI. 
                td(data-aos="fade-down")(style="background-color: #F6F6F6") La política general obliga a tener políticas complementarias sobre contraseñas y respaldo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ISO/IEC 27001, Anexo A (A.5–A.18).
              tr
                td.text-bold(data-aos="fade-down") Roles y responsabilidades
                td(data-aos="fade-down") Se asignan los roles y las responsabilidades clave (administrador, coordinador, gerente, comité SGSG, entre otros), de forma clara y específica, para aplicar, supervisar y revisar la política, asegurando así su implementación efectiva y cumplimiento.
                td(data-aos="fade-down") El gerente aprueba cambios en la política, el encargado de sistemas implementa las medidas de seguridad y todos los empleados protegen sus credenciales de acceso.
                td(data-aos="fade-down") ISO/IEC 27001, cláusula 5.3 (Roles, responsabilidades y autoridades).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Excepciones y sanciones
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite excepciones justificadas y detalla consecuencias por incumplimientos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") En casos excepcionales, se puede autorizar el acceso remoto tras aprobación, pero el uso no autorizado puede derivar en sanciones disciplinarias.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ISO/IEC 27001, A.18 (cumplimiento). Código Sustantivo del Trabajo de Colombia.
              tr
                td.text-bold(data-aos="fade-down") Glosario de términos
                td(data-aos="fade-down") Se incluye un glosario de términos para ayudar al personal a entender el contenido del documento. 
                td(data-aos="fade-down") Se definen términos como activo, riesgo, incidente, disponibilidad, entre otros.
                td(data-aos="fade-down") ISO/IEC 27001, A.7.2.2 (capacitación).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Clasificación y control de datos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") La información es clasificada en categorías, tales como: interna, confidencial, pública. Con base en esa clasificación, se controla quiénes tienen o no acceso a ella.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") La empresa clasifica la información en tres niveles: pública (catálogo de productos), interna (manuales de procedimientos) y confidencial (datos de clientes y facturación), aplicando medidas de protección según el nivel.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ley 1581 de 2012 (Protección de datos personales) y ISO/IEC 27001, A.8.
              tr
                td.text-bold(data-aos="fade-down") Controles de seguridad
                td(data-aos="fade-down") Enumera medidas como contraseñas, autenticación multifactor, cifrado, redes seguras y medidas físicas para proteger la información.
                td(data-aos="fade-down") Una empresa requiere cambiar contraseñas cada tres meses, activar el doble factor de autenticación en correos corporativos y mantener actualizados los antivirus en todos los equipos.
                td(data-aos="fade-down") ISO/IEC 27001, A.9 (Control de acceso) y A.12 (Seguridad en las operaciones).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Manejo de incidentes
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Establece los pasos a seguir en caso de un incidente de seguridad: detección, reporte, respuesta y recuperación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Si un empleado detecta un correo sospechoso, debe reportarlo de inmediato al encargado de TI, quien bloqueará el acceso y revisará el sistema para prevenir daños.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") ISO/IEC 27001, A.16 (Gestión de incidentes de seguridad de la información).
              tr
                td.text-bold(data-aos="fade-down") Revisión y actualización
                td(data-aos="fade-down") Define cuándo y cómo se revisará la política para mantenerla vigente frente a cambios organizacionales o tecnológicos.
                td(data-aos="fade-down") La política se revisa cada año o cuando se adquiere nueva tecnología, para adaptarse a los cambios y mejorar las medidas de seguridad.
                td(data-aos="fade-down") ISO/IEC 27001, cláusula 10.2 (Mejora continua).

    p.mb-5(data-aos="fade-down") Cabe aclarar que las políticas de seguridad de la información, son un documento marco que reúne y establece la dirección general para proteger los activos informativos de la organización y que dicho marco, está compuesto por políticas específicas de seguridad, que se formulan, implementan y mantienen en la empresa, para usos concretos, tales como: el control de accesos, uso aceptable de recursos, la gestión de contraseñas o el respaldo de los datos, entre otros.
    
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema1/img04.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02
            .py-4
              p.mb-0 Lograr estructurar las políticas de seguridad de la información, teniendo en cuenta los principales lineamientos, permiten su comprensión por parte de todos los interesados, facilitan su implementación, aseguran su alineación con la normativa vigente y la cultura organizacional.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Técnica de redacción

    p(data-aos="fade-down") Para redactar políticas de seguridad de la información, se debe garantizar un lenguaje claro, preciso, coherente y accesible a todos los miembros de la organización, independientemente de su nivel técnico. Un texto mal redactado puede generar ambigüedad, confusión o interpretaciones erróneas, lo cual afectará su correcta aplicación.
    p.mb-5(data-aos="fade-down") Para una buena redacción de políticas se dan las siguientes recomendaciones:  

    .tarjeta.tarjeta--BG01.p-4.p-lg-5.mb-5
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        PasosB.color-acento-botones(data-aos="flip-up")
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Lenguaje claro y directo
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Evitar tecnicismos innecesarios y en caso de tener que hacerlo por el tema de la tecnología, apoyarlo con un glosario de términos. 
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Utilizar frases cortas y simples, en vez de indicaciones largas o ambiguas.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: en lugar de “mantener una conducta adecuada con la información”, escribir “cifrar todos los archivos clasificados como confidenciales antes de enviarlos por correo electrónico”.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img05.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Estructura lógica
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Organizar la política en secciones bien definidas, que sigan un orden jerárquico o temático (objetivo, alcance, responsables, procedimientos, excepciones). Esto es para el marco general.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Facilita la lectura y comprensión, asegurando que no se omitan aspectos clave.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: un índice con apartados numerados (1. Objetivo, 2. Alcance, 3. Responsables) y así sucesivamente.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img06.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Precisión en los términos
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Saber utilizar las expresiones, evitando que estas puedan dar lugar a múltiples interpretaciones.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Evitar palabras vagas como “adecuado” o “correcto” sin definir su significado en el contexto.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: en vez de “proteger los datos importantes”, decir “respaldar diariamente todos los archivos clasificados como críticos en el servidor seguro de la empresa”.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img07.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Consistencia
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Aplicar y mantener un estilo único y una terminología uniforme en las políticas y documentos relacionados. Esto evita confusiones y transmite profesionalismo.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: usar siempre “activo de información”, en lugar de alternar entre “activo informático” o “activo digital”, sin justificación.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img08.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Enfoque en la acción
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Redactar en un estilo normativo, indicando en lo posible lo que se debe y no se debe hacer, así como las responsabilidades y las consecuencias.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: el área de TI debe revisar el registro de accesos cada 24 horas y reportar cualquier intento no autorizado.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Adaptación al contexto
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Considerar el tamaño de la empresa, el sector y la cultura organizacional para que las políticas sean realistas y aplicables.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: una política de copias de seguridad para una microempresa, podría establecer respaldos semanales, mientras que para una gran empresa podrían ser cada 6 horas.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Especificar responsables y destinatarios
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  p.mb-0 Indicar qué cargos o áreas son responsables de cumplir cada disposición.
                li
                  i.fas.fa-chevron-right
                  p.mb-0 <b>Ejemplo</b>: el responsable de TI deberá ejecutar copias de seguridad diarias y verificar su integridad semanalmente.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Igualmente, y no menos importante, se relaciona otra serie de recomendaciones: 

    .row
      .col-lg-10.col-12
        LineaTiempoE.color-primario.mb-5
          .row.justify-content-center(titulo="01" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Establecer criterios medibles y verificables
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Definir parámetros cuantitativos o plazos claros que permitan evaluar el cumplimiento.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: actualizar los parches de seguridad en un plazo máximo de 48 horas desde su publicación oficial.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="02" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Mantener coherencia con la normativa vigente
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Alinear con la normatividad nacional o internacional que se exija para la empresa, según su naturaleza o actividad.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Evitar contradicciones con reglamentos internos o leyes nacionales.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: incluir en la política de protección de datos personales los lineamientos de la Ley 1581 de 2012.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="03" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Redactar en voz activa
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Usar estructuras que asignen responsabilidad directa.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: “el jefe de seguridad debe aprobar las solicitudes de acceso”, en vez de “las solicitudes de acceso deberán ser aprobadas”.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="04" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Incluir ejemplos prácticos cuando sea posible
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Facilitar la comprensión, sobre todo en personal sin experiencia técnica, que, por lo general, terminan siendo los eslabones más débiles de la cadena y por donde más fácil se dan las filtraciones o fallos de seguridad.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: en una política de uso de contraseñas, incluir una contraseña robusta y una lista de prácticas prohibidas.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="05" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Evitar cláusulas demasiado generales
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 No redactar políticas tan amplias que no se puedan supervisar o medir.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Si un tema es complejo, dividirlo en subpolíticas específicas.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: separar la “política de control de acceso” de la “política de gestión de contraseñas”, en lugar de fusionarlas de forma vaga.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
          .row.justify-content-center(titulo="06" subtitulo="")
            .col-lg-10.mb-4.mb-lg-0.order-lg-2.order-2(data-aos="fade-down")
              h4 Revisar y validar antes de publicar
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 Probar las políticas con un grupo reducido de empleados en la empresa, para verificar que se entiendan y que sean aplicables.
                li.mb-0
                  i.fas.fa-asterisk
                  p.mb-0 <b>Ejemplo</b>: aplicar la política de control de accesos durante una semana en el área de contabilidad, recopilar sus observaciones y ajustar el documento antes de su aprobación oficial.
            .col-lg-2.col-6.order-lg-1.order-1.mb-3(data-aos="fade-down")
              figure
                img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Conociendo las recomendaciones previamente dadas, a continuación, se presenta una tabla comparativa que ilustra ejemplos de políticas redactadas de forma incorrecta y correcta. De esta forma, se podrán identificar errores comunes y reconocer las prácticas adecuadas en su formulación. Su análisis servirá para facilitar la creación de políticas claras, precisas y efectivas para la organización: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Políticas redactadas de forma correcta e incorrecta</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(style= "width: 4%") 
                th(data-aos="fade-down")(style= "width: 48%") Política mal redactada
                th(data-aos="fade-down")(style= "width: 48%") Política bien redactada
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 1
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Todos los empleados deben cuidar la información.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Todos los empleados deben proteger la información de la empresa, evitando compartir datos sensibles sin autorización previa del área de seguridad de la información.
              tr
                td.text-bold(data-aos="fade-down") 2
                td(data-aos="fade-down") No se deben usar contraseñas fáciles.
                td(data-aos="fade-down") Las contraseñas deberán contener al menos 12 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos, además de renovarse cada 90 días.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El personal debe hacer copias de seguridad cuando sea necesario.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El personal del área de sistemas, deberá realizar copias de seguridad de todos los servidores críticos cada 24 horas, verificando su integridad semanalmente.
              tr
                td.text-bold(data-aos="fade-down") 4
                td(data-aos="fade-down") No se puede acceder a la información de forma indebida.
                td(data-aos="fade-down") El acceso a la información clasificada, estará limitado únicamente a los usuarios autorizados, mediante credenciales asignadas por el administrador del sistema.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hay que mantener segura la red.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") La red corporativa, deberá estar protegida mediante firewall, segmentación de redes y monitoreo continuo, con revisión mensual de configuraciones por el área de TI.
              tr
                td.text-bold(data-aos="fade-down") 6
                td(data-aos="fade-down") No se deben compartir archivos sin permiso.
                td(data-aos="fade-down") Está prohibido compartir archivos que contengan datos personales o confidenciales, fuera de la organización, sin la aprobación escrita del responsable de seguridad de la información.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 7
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Los usuarios deben evitar riesgos en internet.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Los usuarios deberán abstenerse de acceder a sitios <em>web</em> no autorizados y reportar cualquier intento de <em>phishing</em> al equipo de soporte técnico en un plazo máximo de 2 horas.
              tr
                td.text-bold(data-aos="fade-down") 8
                td(data-aos="fade-down") No está permitido usar dispositivos ajenos.
                td(data-aos="fade-down") Está prohibido conectar dispositivos externos no autorizados a los sistemas corporativos, cualquier excepción deberá estar documentada y aprobada por el jefe de TI.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 9
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Todos deben cuidar los equipos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Todo usuario es responsable del uso y resguardo físico de su equipo asignado, debiendo reportar cualquier daño o pérdida de inmediato al área de soporte técnico.
              tr
                td.text-bold(data-aos="fade-down") 10
                td(data-aos="fade-down") No se puede instalar <em>software</em> sin permiso.
                td(data-aos="fade-down") La instalación de <em>software</em> en equipos corporativos está restringida al personal autorizado de TI y debe cumplir con la licencia correspondiente y evaluación de seguridad previa.
    
    .row.justify-content-center.mb-0
      .col-lg-11.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Una buena redacción facilita la comprensión y el cumplimiento de las políticas, asegurando que la política de seguridad de la información, no solo sea vista como un documento formal más, sino como una herramienta práctica para la protección de la información. 

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Criterios de alineación con características de la organización
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La formulación de una política de seguridad de la información, obligatoriamente tiene que estar alineada con las particularidades, objetivos y cultura de la organización, para asegurar su eficacia y aceptación. Esto implica que el marco general no debe ser un documento genérico, mucho menos que las políticas de una empresa pueden ajustarse como un molde en otra empresa; por lo tanto, hay que considerar diferentes aspectos como el sector productivo, el tamaño de la empresa, su estructura organizativa, el nivel de actualización tecnológica y la normativa aplicable en su contexto.
    
    p.mb-5(data-aos="fade-down") Dentro de los criterios que se pueden tener en cuenta para lograr una buena alineación, se indican los siguientes: 

    .tarjeta.tarjeta--BG02.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="Coherencia")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h5 Coherencia con la misión, visión y valores corporativos
            p La política debe reflejar y apoyar la razón de ser de la organización, promoviendo procedimientos y comportamientos que respalden su filosofía empresarial.
            p <b>Ejemplo</b>: una empresa agropecuaria, con enfoque en sostenibilidad, debe integrar en su política, prácticas de protección de datos que minimicen el uso de papel y prioricen medios digitales seguros.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img20.jpg', alt='Imagen decorativa')
        .row(titulo="Adaptación")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h5 Adaptación a la estructura y roles internos
            p Las disposiciones tienen que considerar lo que son la jerarquía, las responsabilidades y funciones, en las diferentes áreas, con el fin de facilitar su implementación y control.
            p <b>Ejemplo</b>: si el área de ventas trabaja de forma remota, la política debe incluir medidas específicas de acceso seguro a la información desde dispositivos móviles.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img21.jpg', alt='Imagen decorativa')
        .row(titulo="Adecuación")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h5 Adecuación a recursos y capacidades disponibles
            p Se tiene que contemplar una infraestructura tecnológica, un presupuesto, un nivel de capacitación del personal que labora en la empresa y unas herramientas existentes, pero hay que tener en cuenta que no se pueden hacer exigencias que se consideren inalcanzables.
            p <b>Ejemplo</b>: en una pyme sin equipo de TI dedicado, se pueden establecer revisiones de seguridad trimestrales en lugar de mensuales, siempre que no se comprometa la protección de la información.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img22.jpg', alt='Imagen decorativa')
        .row(titulo="Cumplimiento")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h5 Cumplimiento normativo y sectorial
            p Las políticas tienen que ajustarse a la legislación nacional y a la internacional, siempre y cuando apliquen al sector de desempeño de la empresa; así como a las certificaciones y estándares que la empresa esté adoptando o piense adoptar. 
            p <b>Ejemplo</b>: una organización que procese datos personales de clientes, debe garantizar el cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios en Colombia.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img23.jpg', alt='Imagen decorativa')
        .row(titulo="Compatibilidad")
          .col-lg-7.mb-4.mb-md-0.order-lg-2.order-2
            h5 Compatibilidad con la cultura organizacional
            p Tanto la política de seguridad de la información con marco normativo, como las políticas específicas que la conforman, tienen que ser entendibles y aceptadas por todo el personal; por lo tanto, se tiene que evitar un lenguaje excesivamente técnico, para que fomente la participación y el compromiso dentro de la organización. 
            p <b>Ejemplo</b>: incluir talleres prácticos y simulaciones para que todos los empleados comprendan y adopten los lineamientos establecidos.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img24.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La formulación de políticas de seguridad de la información, constituye una columna vertebral para garantizar la protección de los activos de información y el cumplimiento de los objetivos estratégicos de la organización. Una <b>política de seguridad de la información en singular</b>, es el documento o marco rector que define la visión, el alcance y los lineamientos generales que guían la gestión de la seguridad en toda la empresa; mientras que las <b>políticas de seguridad de la información en plural</b>, son los documentos específicos que desarrollan y aplican los lineamientos a diferentes áreas o procesos, como el control de accesos, la gestión de contraseñas o el uso aceptable de dispositivos, entre otras; que a su vez están conformadas por un listado de <b>políticas</b> o <b>subpolíticas</b>. Aunque al inicio pueda existir confusión, con la práctica esta se disipa por completo.
            .cajon.cajon.C01.px-4.py-4
              p.mb-0(data-aos="fade-down") Comprender estas distinciones, es imperativo para evitar confusiones y lograr que la estrategia de seguridad sea coherente y efectiva. Solo con una política general sólida, respaldada por políticas específicas bien diseñadas y alineadas con la organización, será posible fomentar una cultura de seguridad, minimizar los riesgos, proteger los activos de información y responder de forma proactiva a las amenazas que se enfrentan en el entorno empresarial.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-down")
              .col
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/temas/tema1/img19.jpg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema1',
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
