<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La formulación de políticas de seguridad de la información, sustentada en una estructura clara, técnicas de redacción adecuadas y criterios de alineación con las características de la organización, constituye la base para establecer directrices efectivas de protección. A su vez, la definición de objetivos de seguridad —claros, medibles y coherentes con las necesidades organizacionales— permite orientar las acciones hacia la preservación de la confidencialidad, integridad y disponibilidad de la información. La gestión de estas políticas, a través de etapas como su diseño, aprobación, comunicación, implementación y revisión, asegura su vigencia y efectividad, favoreciendo una cultura de cumplimiento normativo y de mejora continua dentro del Sistema de Gestión de Seguridad de la Información (SGSI).
    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Formulación de políticas de seguridad de la información, se presentan los elementos fundamentales para establecer directrices que garanticen la protección de los recursos informativos en las organizaciones. Se inicia con la explicación del concepto, la estructura y las técnicas de redacción de las políticas, junto con los criterios de alineación que aseguran su coherencia con las características institucionales. Posteriormente, se abordan los objetivos de seguridad de la información, su importancia, los requisitos que deben cumplir y la metodología recomendada para su diseño. Finalmente, se expone la gestión de las políticas, comprendida en fases como el diseño, aprobación, comunicación, implementación y revisión, con el fin de asegurar su vigencia y efectividad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
