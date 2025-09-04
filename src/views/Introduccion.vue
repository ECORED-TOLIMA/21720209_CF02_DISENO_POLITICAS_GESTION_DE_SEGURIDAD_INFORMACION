<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-1.order-2
            p(data-aos="fade-down") En el contexto actual, donde las organizaciones trabajan en entornos mediados por las tecnologías, la formulación de políticas de seguridad de la información, ha sido uno de los pilares para garantizar la protección y correcta gestión de los datos. Estas políticas no solo buscan establecer directrices para la conservación de la confidencialidad, la integridad y la disponibilidad de la información, sino que también buscan alinear las acciones de la organización con estándares normativos y mejores prácticas internacionales.
            .cajon.cajon.C03.px-4.py-4
              p.mb-0(data-aos="fade-down") Por consiguiente, la finalidad de este componente formativo es proporcionar las bases conceptuales y procedimentales para diseñar y gestionar políticas de seguridad de la información, acordes a las características, cultura y necesidades de la organización. A través del análisis de su estructura, técnica de redacción, criterios de alineación y objetivos estratégicos, se busca desarrollar competencias para la creación de documentos claros, coherentes y efectivos que sirvan como marco de actuación frente a amenazas y riesgos.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')
    
    p(data-aos="fade-down") De igual manera, se abordarán las etapas clave de la gestión de políticas, desde su diseño y aprobación, hasta la comunicación, implementación y revisión, fomentando con ello una visión integral que permita su aplicación práctica en escenarios reales. Con esto se pretende fortalecer la capacidad de respuesta de las organizaciones ante incidentes y retos de seguridad, mejorando la confianza depositada por sus clientes, empleados, aliados y demás interesados.
    p.mb-5(data-aos="fade-down") Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VNB9aFWXVXg?si=J2oVXdERAtu4MM96" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
