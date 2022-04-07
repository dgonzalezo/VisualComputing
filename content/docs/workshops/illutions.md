
# **Taller de Ilusiones**

### **1. Introduccion**
En este taller se desea explorar la creacion de diferentes ilusiones opticas haciendo uso de la combinacion de diferentes referencias conceptuales basadas en ilusiones que veremos posteriormente.
### **2. Revision bibliografica**

#### Ilusión de radios inversa

![Ilusión de radios inversa](/VisualComputing/sketches/t1/spokes.gif "Ilusión de radios inversa")

Esta ilusión óptica, inventado por Anstis y Rogers en el 2021, se muestra como los radios se mueven continuamente si no se fijan en el centro del círculo. Ahora bien, si miran su centro verán como los radios se mueven de a poco.

**¿Cuál es la razón de esta ilusión?**

Dicha ilusión óptica sucede debido a la escala de grise que maneja el sombreado y los radios, cuando cierta sección de la sombra del círculo comparte el mismo color que un radio, nuestro cerebro lo complemente como uno solo en un instante, y los demás radios hacen contraste para que luego otra sombra pase por ella, y genera la ilusión de movimiento, ahora bien nuestra percepción del ojo al momento de concentrarnos en un punto inhibe de cierta forma la atención periférica.

#### Ilusión de la silueta o la bailarina

![Ilusión de la silueta o la bailarina](/VisualComputing/sketches/t1/KayaharaOriginal.gif "Ilusión de la silueta o la bailarina")

Esta ilusión,creada por un tal Nobuyuki Kayahara,  expone dependiendo de cada persona, en que sentido gira la bailarina.

**¿Cuál es la razón de esta ilusión?**

La razón radica en cómo las personas tratan de interpretar una imagen 2D en 3D, así pues, esta ilusión se aprovecha de la carencia de profundidad y, nosotros mismos tratamos inconscientemente de complementar esa propiedad, por eso dicha confusión, de hecho se puede lograr girando un cuerpo completamente en un ambiente 3D manejando la misma perspectiva y uso de grises, o cuando llegue a la mitad, dicho cuerpo se devuelva en el mismo sentido.

#### El Cubo de Necker


<img src="/VisualComputing/sketches/t1/cubo.png" alt="drawing" style="width:300px;"/>

En esta ilustración,inventada por el cristalógrafo suizo Louis Albert Necker , trata de confundirnos en lo que es aparentemente un cubo, pero sus vértices se superponen según el manejo del sombreado.

En esta ilustración,inventada por el cristalógrafo suizo Louis Albert Necker , trata de confundirnos en lo que es aparentemente un cubo, pero sus vértices se superponen según el manejo del sombreado.

#### Puntos de Fuga

Los puntos de fuga nos permiten analizar la percepcion del punto de vista del observador, al momento de disenar planos se usa esta tecnica para mantener una percepcion congruente. Estas lineas que se trazan y convergen permiten dar interpretacion de profundadad en el espacio.

![Puntos de Fuga](/VisualComputing/sketches/t1/pfuga.jpg "Puntos de fuga")


### **3. Metodos**
Para la exploracion de las animacion se desea hacer uso de diferentes conceptos adquiridos del analisis de las ilusiones anteriormente mencionadas, tomando asi de la ilusion de radios inversa la interpretacion de la modulacion de gris, de la ilusion la silueta o la bailarina la percepcion de giro que se le puede dar a un cuerpo, de la ilusion el Cubo de Necker la interpretacion de 3 dimensiones que se le da a una imagen en 2 dimensiones.
### **4. Resultados**

- Exploracion 1

Trazo de lineas que se interpretan como los vertices de un "solido"

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I1.js" width="420" height="526">}}

- Exploracion 2

Se genera una animacion con los trazos en movimiento para logar una percepcion de giro.

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I2.js" width="420" height="526" >}}

- Exploracion 3

Se dibuja un rectangulo que se mueve de ciclicamente de un lado al otro y se aplica un cambio de tamano modular.

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I3.js" width="420" height="526" >}}

- Exploracion 4

Se aplica una modulacion de grises para dar una ilusion de sombra en el rectangulo.

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I4.js" width="420" height="526" >}}

- Exploracion 5

Se da una guia denotando con lineas verticales el movimiento de las lineas superiores e inferiores y con rectas horizontal el movimiento del rectangulo.

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I5.js" width="420" height="526" >}}


- Exploracion 6

Se experimento la tecnica de puntos de fuga para dar la impresion de un pasillo infinito y asi lograr una percepcion de volumen en el circulo.

{{< p5-iframe sketch="/VisualComputing/sketches/t1/I6.js" width="425" height="425" >}}

### **5. Conclusion**

- Comprender el comportamiento perceptual humano permite junto con técnicas de computación visual generar nuevas ilusiones ópticas 

- La variación de un sentido de profundidad le permite al humano interpretar volúmenes en figuras bidimensionales.

### **#. Referencias**

- [Ilusión de radios inversa](https://michaelbach.de/ot/mot-spokes/index.html)
- [Ilusión de la silueta o la bailarina](https://michaelbach.de/ot/sze-silhouette/index.html)
- [El Cubo de Necker](https://michaelbach.de/ot/sze-Necker/index.html)
- [Puntos de fugo](https://es.wikipedia.org/wiki/Punto_de_fuga)
