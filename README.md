# Módulo 3: Ejercicio de evaluación intermedia
[![Autor](https://img.shields.io/badge/autor-Paula%20Perera-red)](https://github.com/PaulaEPR)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

### Enunciado

1. Pintar una cabecera con un título que ponga Adalabers.
2. Pintar el listado de Adalabers inicial. Para ello os facilitamos los datos en la siguiente API:
[https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json](https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json)
3. A continuación, queremos añadir los datos de una compañera nueva. Para ello seguiremos los siguientes pasos:
    1. Crear un formulario con los campos:
        - Nombre de la compañera
        - Nombre de su tutora
        - Especialidad en la que destaca
        - Un botón para Añadir una nueva Adalaber.
    2. Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta aparezca en la tabla.

### BONUS

1. Para filtrar por nombre:
    1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
    2. Añade la funcionalidad para que, cuando la usuaria escriba en ese `<input>`, el listado de Adalabers se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria (aplicando también el filtrado por tutora, si ya lo tuvieras implementado).
2. Para filtrar por tutora:
    1. Añade un `<select>` a la cabecera que tenga las siguientes opciones:
        - Cualquiera (es la opción por defecto)
        - Yanelis
        - Dayana
        - Iván
    2. Añade la funcionalidad para que, cuando la usuaria cambie ese `<select>`, el listado de Adalabers se re-pinte mostrando solo las que coincidan con la opción seleccionada (aplicando también el filtrado por nombre, si procede).
3. Después de pintar el listado, podemos intentar pintar una columna más en nuestra tabla con enlaces a las redes sociales que tiene cada Adalaber. Puedes guiarte con los siguientes pasos:
    1. Añade una columna más en la cabecera de la tabla.
    2. Añade una celda más a cada fila.
    3. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber. Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
    4. Añade un enlace `<a>` al nombre de la red social que abra la URL (o dirección) de la misma.
4. Maqueta a tu gusto