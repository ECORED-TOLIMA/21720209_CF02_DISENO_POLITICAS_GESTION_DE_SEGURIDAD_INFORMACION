<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Gestión de políticas de seguridad de la información
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
    
    p.mb-0(data-aos="fade-down") Esta gestión barca el conjunto de acciones que son necesarias para que se pueda garantizar unas políticas bien diseñadas, aprobadas, comunicadas, implementadas y revisadas de forma efectiva. Gracias a este proceso, las directrices establecidas, pueden mantenerse alineadas con las necesidades de la organización y los cambios del entorno, asegurando así su vigencia y aplicabilidad en el tiempo. En esta temática, se analizará que puntos clave pueden conformar esta gestión, proporcionando pautas para una correcta aplicación en las organizaciones.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La gestión de políticas de seguridad de la información, hace referencia al proceso sistemático que se trabaja para que una organización planifique, desarrolle, implemente, supervise y actualice sus políticas, con la finalidad de proteger sus activos de información. Este proceso garantiza que las políticas a parte de cumplir con la normativa base y estándares adoptados, también respondan a las necesidades reales de organización, de tal forma que se puedan ir aplicando y adaptando a los cambios tecnológicos, operativos y de riesgos. El realizar un trabajo de forma correcta y bien aplicada, facilita que las políticas sean comprendidas, aceptadas y aplicadas por todos los miembros de la organización y el resto de las partes interesadas, fortaleciendo así la cultura de seguridad de la organización.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Diseño
    
    .tarjeta.tarjeta--BG05.px-lg-5.px-4.py-2.mb-4
      .col-12
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p(data-aos="fade-down") El diseño de una política de seguridad de la información, debe ser intencional y adaptarse al contexto de la organización. Según la norma ISO/IEC 27001, la alta dirección tiene la responsabilidad de asegurar que la política se ajuste al propósito de la organización, incluya los objetivos de seguridad, refleje el compromiso de mejora continua y, sobre todo, cumpla con los requisitos aplicables. De igual manera, la norma ISO/IEC 27002, establece que estas políticas específicas, tienen que estar bien definidas, redactadas de manera formal, contar con la aprobación de las directivas, comunicarse eficazmente con el personal responsable o al que corresponda y someterse a revisiones periódicas en periodos planificados (Morgan Hill, s.f.).
            p(data-aos="fade-down") El diseño tiene que incluir componentes claros como el propósito, el alcance, los roles y las responsabilidades; además de los fundamentos que justifican su existencia. No se puede olvidar, que tiene que equilibrarse la seguridad con la productividad, involucrando a los actores clave y estar documentada para facilitar su aplicación práctica.
            .cajon.cajon.C02.color-secundario.p-4
              p.mb-0(data-aos="fade-down") Aunque ya se ha mencionado la relevancia de las políticas de seguridad de la información, en este punto se retoma el tema desde la perspectiva de la ISO/IEC 27002. No basta con reconocer qué es una política y su función dentro del SGSI, ya que resulta imprescindible comprender los pasos formales que aseguran su adecuada definición, aprobación, comunicación y revisión, de manera que se garantice una correcta implementación alineada con las necesidades organizativas.
          .col-lg-4.order-lg-2.order-1.mb-4
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") Es por ello, que en este apartado se profundiza en la aplicación práctica y normativa que orienta el diseño de políticas, destacando no solo su formulación, sino también los mecanismos para mantenerlas actualizadas y efectivas, frente a los cambios del entorno y los riesgos emergentes, lo que refuerza su papel estratégico dentro de la gestión de seguridad de la información.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Aprobación
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.mb-5
          .col-lg-4.col-8.order-lg-1.order-2
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema3/img04.svg', alt='Imagen decorativa')
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-up") El proceso de aprobación formal de las políticas de seguridad, es indispensable para darles legalidad, coherencia estratégica y respaldo institucional; por ello, según el ítem Control 5.1 de la ISO/IEC 27001, las políticas generales deben estar definidas y aprobadas por la alta dirección o quien haga sus veces (CYBERZONI, s.f.). Esta aprobación demuestra el compromiso que tiene la empresa con la seguridad y establece una base sólida para su gestión.
            p.mb-0(data-aos="fade-up") Cuando se habla de las políticas específicas por área, como control de accesos, respaldo o uso aceptable, ISO permite que estas no tengan que ser aprobadas necesariamente por la alta dirección, sino que por el contrario, estas aprobaciones pueden darse por niveles administrativos con menor relevancia, como por citar al jefe de área o el director de algún departamento en particular, siempre que sea competente y cuente con autoridad para ello (Parker, s.f.), lo que facilita una implementación más ágil y alineada con la estructura organizacional.
        p.mb-0(data-aos="fade-down") Para entender mejor los procesos de aprobación, se relacionan algunos ejemplos: 
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img05.svg", alt="alt").img130.m-auto
          h4.text-center Política general de seguridad de la información
          p.mb-0 Aprobada por el gerente general o director ejecutivo, para asegurar respaldo institucional.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img06.svg", alt="alt").img130.m-auto
          h4.text-center Política de control de acceso físico
          p.mb-0 Aprobada por el jefe de operaciones, responsable de los accesos a las áreas administrativas.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img07.svg", alt="alt").img130.m-auto
          h4.text-center Política de uso aceptable de dispositivos
          p.mb-0 Revisada y aprobada por el jefe de tecnología o responsable de TIC.
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p(data-aos="fade-down") Este enfoque escalonado permite distribuir responsabilidades de manera lógica, agiliza la gestión de políticas y garantiza que cada una tenga el respaldo adecuado, según su impacto en la organización.
        p(data-aos="fade-down") A continuación, se relacionan unos pasos que pueden mostrar una ruta de cómo podría desarrollarse el proceso de aprobación de políticas:
    
    .row.mb-4
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img08.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 1. Redacción inicial
              p El equipo de seguridad de la información (o un comité designado) redacta el borrador de la política siguiendo las directrices de la política general.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img09.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-2.h-100
              h5 2. Revisión técnica
              p Especialistas del área revisan el contenido para asegurar que sea realista y aplicable. Por ejemplo, el jefe de TI revisa una política de control de acceso para confirmar que los métodos de autenticación sean viables.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img10.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 3. Ajustes y validación interna
              p Se incorporan observaciones de áreas como gestión de riesgos, legal o recursos humanos.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img11.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 4. Presentación a la alta dirección
              p El responsable de seguridad presenta el documento, justificando la necesidad de la política, el impacto esperado y los recursos que se requerirán para su aplicación.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img12.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 5. Aprobación formal
              p La alta dirección firma o registra en acta su aprobación. Esto puede quedar documentado en un repositorio oficial o en un sistema de gestión documental.
      .col-lg-6.col-12
        .row.justify-content-center
          .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C02.p-0.h-100
              img.w-100.h-100.my-auto(src='@/assets/curso/temas/tema3/img13.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C02.p-3.h-100
              h5 6. Registro y control de versiones
              p La política aprobada recibe un número de versión, fecha de entrada en vigor y fecha de revisión programada.    

    p.mb-5(data-aos="fade-down") Como complemento de lo explicado, se detallan en unos ejemplos hipotéticos en el sector pyme, por medio de casos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Ejemplos de procesos de aprobación de políticas de seguridad de la información</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(colspan="2") Caso 1 - Clínica Odontológica SONRISA PLUS
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  p Durante una auditoría interna, el consultorio detecta que las historias clínicas de los pacientes se almacenan en carpetas sin control de acceso, lo que expone datos sensibles protegidos por la Ley 1581 de 2012.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  p Busca minimizar los incidentes relacionados con accesos no autorizados, fugas de datos o mal uso de la información, mediante controles y medidas preventivas.
                  ol.lista-ol
                    li(data-aos="fade-right") 
                      span.text-bold 1. 
                      p.mb-0 <b>Identificación</b>: el jefe administrativo reporta a la gerencia el riesgo de incumplir la normativa de protección de datos personales.
                    li(data-aos="fade-right") 
                      span.text-bold 2. 
                      p.mb-0 <b>Redacción</b>: el encargado de TI redacta una política de protección de datos y acceso a historias clínicas, estableciendo el uso obligatorio de contraseñas seguras en el <em>software</em> odontológico y acceso restringido a personal autorizado.
                    li(data-aos="fade-right") 
                      span.text-bold 3. 
                      p.mb-0 <b>Revisión técnica y legal</b>: el área legal revisa que la política cumpla con la Ley 1581 y la Resolución 1995 de 1999 (historias clínicas).
                    li(data-aos="fade-right") 
                      span.text-bold 4. 
                      p.mb-0 <b>Presentación a la gerencia</b>: el responsable de TI expone el borrador en la reunión mensual de gerencia.
                    li(data-aos="fade-right") 
                      span.text-bold 5. 
                      p.mb-0 <b>Aprobación</b>: la gerencia aprueba la política y fija su entrada en vigor para el mes siguiente, dejando registro en acta firmada.
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(colspan="2") Caso 2 – Corporación Educativa Gabriel García Márquez
            tbody
              tr
                td(data-aos="fade-down") La institución identifica que los docentes usan cuentas de correo personales para enviar y recibir información confidencial de estudiantes, lo que pone en riesgo la integridad y confidencialidad de la información académica.
                td(data-aos="fade-down") 
                  ol.lista-ol
                    li(data-aos="fade-right") 
                      span.text-bold 1. 
                      p.mb-0 <b>Identificación</b>: el coordinador académico informa al comité de seguridad de la información sobre incidentes de filtración de datos por el uso de correos personales.
                    li(data-aos="fade-right") 
                      span.text-bold 2. 
                      p.mb-0 <b>Redacción</b>: el comité elabora una política de uso de correo institucional, que establece la obligación de usar únicamente cuentas con dominio corporativo y autenticación en dos pasos.
                    li(data-aos="fade-right") 
                      span.text-bold 3. 
                      p.mb-0 <b>Revisión técnica</b>: el área de TI valida la viabilidad de implementar autenticación reforzada.
                    li(data-aos="fade-right") 
                      span.text-bold 4. 
                      p.mb-0 <b>Revisión directiva</b>: el consejo directivo revisa la política y propone incluir sanciones disciplinarias por incumplimiento.
                    li(data-aos="fade-right") 
                      span.text-bold 5. 
                      p.mb-0 <b>Aprobación</b>: el consejo aprueba la política en sesión formal y ordena su difusión a todo el personal docente y administrativo.
            thead
              tr(style="background-color: #DBCCFC")
                th(data-aos="fade-down")(colspan="2") Caso 3 – Supermercado MerkExpress
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  p Se detecta que varias computadoras del área de cajas tienen contraseñas genéricas como 12345 y que no se han cambiado en más de un año, aumentando el riesgo de accesos no autorizados al sistema de ventas e inventario.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  ol.lista-ol
                    li(data-aos="fade-right") 
                      span.text-bold 1. 
                      p.mb-0 <b>Identificación</b>: el jefe de caja informa al administrador general sobre el riesgo de fraude interno y pérdida de información.
                    li(data-aos="fade-right") 
                      span.text-bold 2. 
                      p.mb-0 <b>Redacción</b>: el encargado de TI redacta una política de gestión de contraseñas, con reglas para longitud mínima, complejidad y cambios cada 90 días.
                    li(data-aos="fade-right") 
                      span.text-bold 3. 
                      p.mb-0 <b>Prueba piloto</b>: se implementa en dos cajas por una semana para evaluar el impacto operativo.
                    li(data-aos="fade-right") 
                      span.text-bold 4. 
                      p.mb-0 <b>Revisión gerencial</b>: el administrador revisa los resultados y confirma que no afecta la velocidad de atención al cliente.
                    li(data-aos="fade-right") 
                      span.text-bold 5. 
                      p.mb-0 <b>Aprobación</b>: el propietario del supermercado aprueba la política, firma el documento y ordena su aplicación inmediata en todos los equipos.
    
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-0.d-flex.justify-content-center.align-items-center(style="width:60px; height:60px; border-radius:50%")
            .col-lg-8
              img(src='@/assets/curso/temas/tema3/img14.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C02
            .p-4
              p.mb-0 La aprobación de políticas de seguridad de la información, representa un paso clave para que se pueda garantizar la legalidad y el cumplimiento de ellas, al interior de cualquier organización. Este proceso, que va desde la detección de la necesidad hasta la validación formal, asegura que las medidas adoptadas respondan a riesgos reales, cuenten con respaldo directivo y sean aplicables de forma efectiva en la empresa.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Comunicación
    
    .tarjeta.tarjeta--BG03.px-md-5.px-4.mb-0
      .col-12
        .row.justify-content-center.mb-5
          .row.justify-content-center
            .col-lg-7.col-12.order-lg-1.order-2
              p(data-aos="fade-down") La comunicación de las políticas de seguridad de la información, es el proceso que garantiza que todas las personas que trabajan en una empresa y las que tienen relación con ella, sepan cuáles son las reglas y procedimientos para proteger la información. No basta con que las políticas existan y que estén escritas en un documento, es necesario que estas sean explicadas de forma clara, sencilla y en el momento adecuado, con el fin de que todas las partes interesadas puedan comprenderlas y aplicarlas en su trabajo cotidiano. Esto lo reiteran la ISO/IEC 27001:2022 (cláusula 7.4) y las guías prácticas de ISO/IEC 27002:2022.
              p(data-aos="fade-down") En este caso, comunicar establece qué se va a comunicar, a quién, cuándo, cómo y quién será el responsable de hacerlo. Por ejemplo, en una pyme pueden realizarse diversas actividades para ello, tales como reuniones, capacitaciones, carteleras, correos electrónicos, videos e incluso, charlas cortas. Hay que tener en cuenta que el lenguaje que se utiliza para comunicar, tiene que ser acorde al perfil de los empleados, por lo que, para el éxito de dicha tarea, hay que evitar tecnicismos excesivos, los cuales la mayoría de las veces dificultan la comprensión de los interesados.
            .col-lg-5.col-12.order-lg-2.order-1.mb-3
              figure(data-aos="fade-up")
                img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')
        .cajon.cajon.C02.color-secundario.p-4.mb-5
          p.mb-0(data-aos="fade-down") Tampoco hay que olvidar y más bien toca recalcarlo, que para que la tarea de comunicar sea efectiva, no hay que limitarse solo a la entrega del documento, sino que hay que incluir la retroalimentación y la verificación de que los empleados hayan comprendido las políticas y les haya quedado claro qué repercusiones puede tener su incumplimiento en ellos. En la realidad, una empresa que logra comunicar bien sus políticas, reduce incidentes de seguridad por desconocimiento y aumenta la participación activa de su personal en la protección de la información.
        p.mb-5(data-aos="fade-down") A continuación, se muestran diferentes métodos para comunicar políticas de seguridad y ejemplos que los relacionan en una pyme, los cuales se pueden utilizar según el escenario: 
    
    .tarjeta.tarjeta--BG08.p-4.p-lg-5.mb-0
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        PasosB.color-acento-botones(data-aos="flip-up")
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Reuniones presenciales
              p Encuentros cara a cara para explicar las políticas y resolver dudas.
              p <b>Ejemplo</b>: la empresa convoca a todo el equipo a una reunión mensual para repasar las políticas y presentar actualizaciones.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img16.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Capacitaciones formales
              p Cursos o talleres estructurados para enseñar de forma detallada el contenido de las políticas.
              p <b>Ejemplo</b>: la empresa organiza una capacitación trimestral sobre el manejo seguro de datos de pacientes.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img17.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Correos electrónicos internos
              p Envío de mensajes claros con el contenido o resumen de las políticas.
              p <b>Ejemplo</b>: un supermercado envía un correo a sus 40 empleados con un archivo PDF que resume la política y ejemplos prácticos de aplicación.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img18.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Carteleras o señalización
              p Colocar avisos en lugares visibles para recordar las políticas.
              p <b>Ejemplo</b>: una consultora imprime afiches con recordatorios sobre el uso seguro de contraseñas y los coloca en el área de personal.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img19.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Intranet o plataforma interna
              p Publicación de las políticas en un espacio digital de acceso común.
              p <b>Ejemplo</b>: una empresa de <em>software</em> sube todas las políticas a su intranet y envía un enlace a los empleados.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img20.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Videos cortos
              p Material audiovisual que explica las políticas de forma sencilla y atractiva.
              p <b>Ejemplo</b>: una distribuidora de ropa crea un video animado de 3 minutos que explica cómo prevenir el robo de información de clientes.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.jpg', alt='Imagen decorativa')
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Charlas rápidas
              p Breves espacios de 5 a 10 minutos para recordar puntos clave.
              p <b>Ejemplo</b>: en una distribuidora de medicamentos, antes de abrir, el encargado dedica 5 minutos a recordar la política de seguridad en el uso de datos de proveedores y clientes.
            .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img22.jpg', alt='Imagen decorativa')
        
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Proceso de implementación
    
    p(data-aos="fade-down") La implementación no se limita a la distribución de un documento; por el contrario, conlleva una serie de acciones planificadas que aseguren que lo dispuesto en el documento se aplique y se cumpla de manera efectiva en la organización. Según la norma ISO/IEC 27001:2022, después de la aprobación, se tienen que establecer mecanismos que garanticen su comunicación, capacitación, aplicación, seguimiento y mejora continua.
    p.mb-5(data-aos="fade-down") A continuación, se detalla este proceso:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-01.ps-5.pe-4.py-4
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 El proceso inicia con la planificación, allí se definen los recursos, responsables y el cronograma de ejecución.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-02.ps-5.pe-4.py-4
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Luego sigue la comunicación y la socialización, lo cual puede incluir según las directrices de la empresa, capacitaciones, guías, reuniones, afiches o señalizaciones, entre otros.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-03.ps-5.pe-4.py-4
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.text-center.mb-0 Acto seguido, se pone en marcha la puesta en práctica, asegurando que los controles y demás medidas que están en la política sean integradas a los procesos diarios. Es importante definir y mantener un sistema de seguimiento y medición, con indicadores claros que permitan evaluar el nivel de cumplimiento e identificar brechas o incumplimientos. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-04.ps-5.pe-4.py-4
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Por último, los resultados de este monitoreo alimentan el proceso de revisión y mejora, donde se revisa si se tienen que hacer ajustes a la política o a los procedimientos que cambian según el contexto, como nuevas amenazas o incidentes que han ocurrido después de implementada la política.

    p.mb-5(data-aos="fade-down") Basado en lo anterior, a continuación, se detallan ejemplos que muestran hipotéticamente como se pueden dar dos implementaciones:

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ejemplo 1. Empresa agropecuaria El Buen Potrero
    
    .tarjeta.tarjeta--C06.p-4.p-md-5.mb-5
      SlyderB.mb-5.text-white(:datos="datosSlyder")

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Ejemplo 2: Empresa de desarrollo de <em>software</em> PANAMSOFT
    
    .row.justify-content-center.mb-0
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Planificación")
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 El director de proyectos y el oficial de seguridad de la información (CISO), elaboran un plan para implementar la política en los equipos de desarrollo y soporte.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Se definen recursos: herramientas de gestión de control de versiones seguras, capacitación en OWASP, y VPN para acceso remoto seguro.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img28.jpg', alt='Imagen decorativa')
          .row(numero="2" titulo="Comunicación y socialización")
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Taller inicial para todo el personal explicando riesgos como fuga de código fuente, robo de credenciales o <em>malware</em>. 
                  li
                    i.lista-ul__vineta
                    p.mb-0 Publicación de un manual interno en la intranet sobre buenas prácticas de seguridad.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img29.jpg', alt='Imagen decorativa')
          .row(numero="3" titulo="Puesta en práctica")
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Implementación de autenticación multifactor para el acceso a repositorios.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Configuración de entornos de desarrollo segregados para pruebas y producción.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Copias de seguridad automáticas del código y bases de datos.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img30.jpg', alt='Imagen decorativa')
          .row(numero="4" titulo="Seguimiento y medición")
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Auditorías quincenales de <em>commits</em> en repositorios para detectar cambios no autorizados.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Evaluaciones trimestrales de cumplimiento de las prácticas seguras por parte de los desarrolladores.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img31.jpg', alt='Imagen decorativa')
          .row.mb-0(numero="5" titulo="Revisión y mejora")
            .col-12.mb-4
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Actualización de la política tras detectar un intento de <em>phishing</em> dirigido al equipo de soporte.
                  li
                    i.lista-ul__vineta
                    p.mb-0 Inclusión de simulacros de respuesta ante incidentes como parte del entrenamiento anual.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema3/img32.jpg', alt='Imagen decorativa')

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Revisión

    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-9.col-12.order-lg-2.order-2
            p(data-aos="fade-down") La revisión es un proceso planificado que garantiza que las políticas de seguridad sigan siendo pertinentes, eficaces y alienadas con los objetivos de la organización. Estas políticas tienen que evaluarse constantemente o cuando ocurran cambios que se consideran significativos, ya sea al interior o exterior de la empresa. Estos cambios se pueden dar por riesgos, amenazas, modificaciones legales o transformaciones de la organización.
            p.mb-0(data-aos="fade-down") Aquí se analiza si las medidas y controles establecidos se están cumpliendo, si siguen respondiendo a los riesgos actuales o si es necesario reajustar en pro de la protección de los activos de información. La revisión tiene que ser documentada, contar con evidencias de seguimiento y si se consiguen errores, incumplimientos o desviaciones, definir planes de acción correctivos. En el caso de una pyme, según la consideración de su tamaño, pueden definir si la revisión la hace anual o semestral, involucrando a la dirección, a los responsables de áreas y al personal clave. Por ejemplo, la empresa agropecuaria El Buen Potrero, podría modificar su política después de incorporar un nuevo <em>software</em> de monitoreo remoto para el ganado, mientras que la empresa PANAMSOFT, podría hacer la revisión, luego de implementar una nueva herramienta de desarrollo en la nube.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-down")
              .col
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/temas/tema3/img33.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0.px-4(data-aos="fade-down") En cualquier caso, la revisión busca asegurar que las políticas evolucionen al mismo ritmo que los riesgos, la tecnología y las regulaciones, garantizando la mejora continua del sistema de gestión de seguridad de la información.
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Planificación',
        texto: `
          <ul> 
            <li> El gerente y el encargado de TI definen un plan para implementar la política de seguridad de la información, asignando un presupuesto básico para capacitación y controles físicos.</li>
            <p></p>
            <li> Se identifican los recursos: cerraduras para áreas críticas, software de gestión de datos de animales y protocolos de copia de seguridad semanal.</li>
          </ul> 
          `,
        imagen: require('@/assets/curso/temas/tema3/img23.jpg'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Comunicación y socialización',
        texto: `
          <ul> 
            <li>Reuniones cortas con todo el personal (vaqueros, veterinarios, administrativos), para explicar la importancia de proteger datos como registros de producción, inventarios y clientes.</li>
            <p></p>
            <li>Carteles en las oficinas con recordatorios sobre contraseñas seguras y manejo de información sensible.</li>
          </ul> 
          `,
        imagen: require('@/assets/curso/temas/tema3/img24.jpg'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Puesta en práctica',
        texto: `
          <ul> 
            <li>Instalación de controles de acceso físico a oficinas y bodega de medicamentos.</li>
            <p></p>
            <li>Configuración de permisos en el <em>software</em> para que solo el personal autorizado pueda modificar datos críticos.</li>
          </ul> 
          `,
        imagen: require('@/assets/curso/temas/tema3/img25.jpg'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Seguimiento y medición',
        texto: `
          <ul> 
            <li>Cada mes, el encargado revisa el historial de accesos físicos y digitales para detectar anomalías.</li>
            <p></p>
            <li>Reporte trimestral al gerente sobre incidentes o mejoras necesarias.</li>
          </ul> 
          `,
        imagen: require('@/assets/curso/temas/tema3/img26.jpg'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Revisión y mejora',
        texto: `
          <ul> 
            <li>Ajustes a los protocolos luego de detectar que los <em>backups</em> no estaban siendo verificados.</li>
            <p></p>
            <li>Inclusión de capacitación anual obligatoria sobre manejo seguro de información.</li>
          </ul> 
          `,
        imagen: require('@/assets/curso/temas/tema3/img27.jpg'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
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
