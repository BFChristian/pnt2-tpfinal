<template>
  <div class="container">
    <div class="row overflow-auto">
      <div class="col-md-4 mb-4" v-for="libro in libros" :key="libro.id">
        <div v-for="autor in autores" :key="autor.id">
          <div v-for="genero in generos" :key="generos.id">
            <div
              v-if="libro.autorId == autor.id && libro.generoId == genero.id"
            >
              <Card
                :libroData="libro"
                :autorData="autor"
                :generoData="genero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLibros } from "@/services/libros";
import Card from "./Card.vue";

export default {
  name: "catalogo",
  components: {
    Card,
  },
  props: [],
  data() {
    return {
      libros: [
        {
          id: 1,
          generoId: 5,
          titulo: "El misterio de la colina",
          autorId: 1,
          descripcion:
            "En una pequeña aldea rodeada de montañas, un antiguo secreto ha estado oculto durante siglos. El misterio de la colina desvela una historia de enigmas y peligros inesperados que cambiarán la vida de sus habitantes.",
          portada: "",
        },
        {
          id: 2,
          generoId: 3,
          titulo: "Sombras en el lago",
          autorId: 2,
          descripcion:
            "En un lago apartado, se ocultan sombras que no pertenecen a este mundo. Cuando un grupo de amigos decide investigar, se enfrentan a fenómenos que desafían la razón y los llevan al borde de la locura.",
          portada: "",
        },
        {
          id: 3,
          generoId: 7,
          titulo: "El susurro del viento",
          autorId: 3,
          descripcion:
            "Un viento misterioso trae consigo mensajes de otro mundo. Cuando una joven escucha el susurro, se embarca en un viaje hacia un destino desconocido, donde la naturaleza misma parece tener una voluntad propia.",
          portada: "",
        },
        {
          id: 4,
          generoId: 2,
          titulo: "Crónicas del tiempo",
          autorId: 4,
          descripcion:
            "Un relato épico de viajes a través del tiempo, donde los protagonistas deben enfrentarse a las consecuencias de alterar la historia. ¿Serán capaces de regresar a su tiempo original sin cambiar el destino del mundo?",
          portada: "",
        },
        {
          id: 5,
          generoId: 3,
          titulo: "La rosa de invierno",
          autorId: 5,
          descripcion:
            "En una fría y desolada ciudad, una flor tiene el poder de cambiar el destino de todos los que la tocan. Pero la flor está protegida por una criatura mítica, y solo un corazón puro podrá acercarse a ella.",
          portada: "",
        },
        {
          id: 6,
          generoId: 2,
          titulo: "Viaje a la luna de cobre",
          autorId: 6,
          descripcion:
            "Un grupo de científicos viaja a un satélite recién descubierto en busca de respuestas sobre el origen del universo. Lo que encuentran allí cambiará para siempre su comprensión de la realidad.",
          portada: "",
        },
        {
          id: 7,
          generoId: 4,
          titulo: "El guardián del umbral",
          autorId: 7,
          descripcion:
            "Un antiguo castillo guarda la entrada a un mundo paralelo. Solo el Guardián del Umbral tiene el poder de decidir quién puede cruzar y quién queda atrapado en el limbo entre dimensiones.",
          portada: "",
        },
        {
          id: 8,
          generoId: 1,
          titulo: "Las puertas del silencio",
          autorId: 8,
          descripcion:
            "En un futuro cercano, las personas pueden elegir no hablar. Un joven, obsesionado con descubrir el origen de este silencio, atraviesa un portal que lo lleva a un mundo sin voces.",
          portada: "",
        },
        {
          id: 9,
          generoId: 11,
          titulo: "Fuego eterno",
          autorId: 9,
          descripcion:
            "En un mundo devastado por un eterno invierno, un grupo de guerreros busca la llama sagrada que puede traer el calor de vuelta. Pero esta llama es custodiada por fuerzas oscuras y poderosas.",
          portada: "",
        },
        {
          id: 10,
          generoId: 10,
          titulo: "El códice prohibido",
          autorId: 10,
          descripcion:
            "Un antiguo códice oculto durante siglos contiene secretos prohibidos. Un arqueólogo decidido a desvelarlos desencadena una serie de eventos que pondrán en peligro el destino del mundo.",
          portada: "",
        },
        {
          id: 11,
          generoId: 6,
          titulo: "Suspiros del pasado",
          autorId: 11,
          descripcion:
            "Una joven recibe cartas misteriosas de un ser de otro tiempo. Cada carta es una pieza de un rompecabezas que la llevará a descubrir secretos enterrados en su propia familia.",
          portada: "",
        },
        {
          id: 12,
          generoId: 12,
          titulo: "El espejo del alma",
          autorId: 12,
          descripcion:
            "Un espejo mágico tiene el poder de mostrar el alma de quien lo mire. Pero este poder también revela los miedos más profundos y oscuros, desafiando la cordura de quienes se atreven a usarlo.",
          portada: "",
        },
        {
          id: 13,
          generoId: 13,
          titulo: "Ríos de tinta",
          autorId: 13,
          descripcion:
            "Un escritor lucha por terminar su novela mientras los personajes que ha creado comienzan a cobrar vida y a interferir en su mundo. ¿Hasta dónde llegará su locura antes de que la historia lo consuma?",
          portada: "",
        },
        {
          id: 14,
          generoId: 8,
          titulo: "Noches en vela",
          autorId: 14,
          descripcion:
            "En una ciudad sumida en la oscuridad, las personas comienzan a perder la noción del tiempo. Cada noche, nuevos horrores surgen, y un grupo de amigos deberá descubrir la verdad detrás de los fenómenos paranormales.",
          portada: "",
        },
        {
          id: 15,
          generoId: 6,
          titulo: "La biblioteca sumergida",
          autorId: 15,
          descripcion:
            "Una biblioteca oculta bajo las aguas contiene todos los secretos del universo. Aquellos que se atreven a sumergirse en ella descubren más de lo que esperaban, pero nunca pueden regresar igual.",
          portada: "",
        },
        {
          id: 16,
          generoId: 9,
          titulo: "El circo de los olvidados",
          autorId: 16,
          descripcion:
            "Un circo viajero lleva consigo un espectáculo sobrenatural. Cada acto es un recordatorio de los secretos olvidados de sus miembros, quienes no recuerdan su pasado, pero están ligados por un destino común.",
          portada: "",
        },
        {
          id: 17,
          generoId: 8,
          titulo: "Memorias de otro mundo",
          autorId: 17,
          descripcion:
            "Un hombre sufre un accidente y comienza a tener recuerdos de un mundo paralelo. A medida que los recuerdos se intensifican, su vida se desintegra, y se enfrenta a una elección imposible entre dos realidades.",
          portada: "",
        },
        {
          id: 18,
          generoId: 7,
          titulo: "El alquimista del sur",
          autorId: 18,
          descripcion:
            "En el desierto, un alquimista busca la piedra filosofal, pero descubre que el verdadero poder no está en el oro, sino en la transformación de su alma.",
          portada: "",
        },
        {
          id: 19,
          generoId: 4,
          titulo: "El canto de los cuervos",
          autorId: 19,
          descripcion:
            "En una tierra devastada por la guerra, un líder guerrero escucha el canto de los cuervos, presagio de un destino oscuro. Deberá enfrentarse a su pasado y a las fuerzas sobrenaturales que buscan su caída.",
          portada: "",
        },
        {
          id: 20,
          generoId: 11,
          titulo: "Sombras del paraíso",
          autorId: 20,
          descripcion:
            "En un paraíso olvidado, las sombras se alzan y desafían a los dioses. Un joven elegido por el destino debe enfrentarse a las criaturas de la oscuridad para restaurar el orden en su mundo.",
          portada: "",
        },
        {
          id: 21,
          generoId: 5,
          titulo: "La espiral de los sueños",
          autorId: 21,
          descripcion:
            "A través de una espiral infinita de sueños, un hombre busca la verdad detrás de su existencia. Pero cada sueño lo acerca más a la locura, y su propia mente se convierte en un laberinto.",
          portada: "",
        },
        {
          id: 22,
          generoId: 4,
          titulo: "El legado del trueno",
          autorId: 22,
          descripcion:
            "Un joven heredero a un antiguo reino debe enfrentarse a las fuerzas que buscan destruir su linaje. El trueno será su guía, y el legado de su familia su mayor fuerza.",
          portada: "",
        },
        {
          id: 23,
          generoId: 13,
          titulo: "Luces de neón",
          autorId: 23,
          descripcion:
            "En un mundo futurista, las luces de neón iluminan las calles de una ciudad en decadencia. Un detective privado investiga una serie de crímenes que podrían ser la clave para desvelar el futuro de la humanidad.",
          portada: "",
        },
        {
          id: 24,
          generoId: 10,
          titulo: "La sombra del emperador",
          autorId: 24,
          descripcion:
            "Un emperador obsesionado con la inmortalidad crea una sombra viva que busca apoderarse de su poder. Solo un guerrero desterrado puede enfrentarse a la sombra y destruirla.",
          portada: "",
        },
        {
          id: 25,
          generoId: 1,
          titulo: "Entre mundos",
          autorId: 25,
          descripcion:
            "Un joven descubrió la capacidad de viajar entre mundos, pero cada vez que lo hace, pierde una parte de su alma. Ahora, debe decidir si el sacrificio es suficiente para salvar a aquellos que ama.",
          portada: "",
        },
      ],
      autores: [
        { id: 1, nombre: "Laura Martínez" },
        { id: 2, nombre: "Carlos Gutiérrez" },
        { id: 3, nombre: "Ana Sánchez" },
        { id: 4, nombre: "José Luis Pérez" },
        { id: 5, nombre: "Elena Gómez" },
        { id: 6, nombre: "Ricardo Álvarez" },
        { id: 7, nombre: "Martín López" },
        { id: 8, nombre: "Isabel Martínez" },
        { id: 9, nombre: "Fernando Ruiz" },
        { id: 10, nombre: "Alberto Torres" },
        { id: 11, nombre: "Beatriz Ramírez" },
        { id: 12, nombre: "Carlos Pérez" },
        { id: 13, nombre: "Martina López" },
        { id: 14, nombre: "Javier González" },
        { id: 15, nombre: "Sofía Díaz" },
        { id: 16, nombre: "Lucía González" },
        { id: 17, nombre: "Oscar Fernández" },
        { id: 18, nombre: "Raúl Jiménez" },
        { id: 19, nombre: "Mónica Vargas" },
        { id: 20, nombre: "Victoria Ruiz" },
        { id: 21, nombre: "María Salazar" },
        { id: 22, nombre: "Ricardo Martínez" },
        { id: 23, nombre: "Tomás Sánchez" },
        { id: 24, nombre: "Patricia López" },
        { id: 25, nombre: "José Gómez" },
      ],
      generos: [
        { id: 1, nombre: "Fantasía" },
        { id: 2, nombre: "Ciencia Ficción" },
        { id: 3, nombre: "Terror" },
        { id: 4, nombre: "Aventura" },
        { id: 5, nombre: "Misterio" },
        { id: 6, nombre: "Romántico" },
        { id: 7, nombre: "Histórico" },
        { id: 8, nombre: "Suspenso" },
        { id: 9, nombre: "Magia" },
        { id: 10, nombre: "Ficción histórica" },
        { id: 11, nombre: "Drama" },
        { id: 12, nombre: "Psicológico" },
        { id: 13, nombre: "Distopía" },
      ],
    };
  },
  methods: {
    /*
        async obtenerLibros() {
            const response = await getLibros();
            this.libros = response.data;
        }*/
  },
  computed: {},
};
</script>

<style scoped></style>
