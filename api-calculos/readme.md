# Ejercicio APIs: cálculos

La idea es crear un servidor en node.js con Express que tenga 4 APIs con cálculos y una página para probarlas.


### Definición de las APIs

Son 4 APIs que esperan recibir por query string 2 parámetros, num1 y num2, con valores numéricos enteros.

- GET /sumar: retorna num1 + num2
- GET /restar: retorna num1 - num2
- GET /multiplicar: retorna num1 * num2
- GET /dividir: retorna num1/num2

### Respuesta de las APIs

Las 4 APIs responden un objeto en formato JSON con la siguiente estructura:

```javascript
{
    err: //string que contiene mensaje de error si lo hubo
    data: // resultado del cálculo
}
```

- Si el cálculo se pudo hacer, "err" guarda un string vacío y "data" contiene el número resultante.
- Si el cálculo no se pudo hacer, "err" contiene el mensaje de error y "data" está vacío, null o ausente (undefined).


#### Validaciones de las APIs

- Validar que se reciban num1 y num2. Si alguno falta, indicarlo en el mensaje de error de la respuesta.
- En la división, validar que el denominador no sea cero.


#### Página de pruebas

Crear una página (que se sirva desde el servidor cuando se hace GET a "/") que tenga 2 inputs (para num1 y num2), 4 botones (uno para cada operación) y algún elemento más (h o p) para mostrar el resultado. La página no tiene que tener ninguna lógica de validación, eso queda en la API. Si la API responde bien, mostrar el resultado. Si la API responde con error, mostrar el mensaje de error (tener algún elemento div, h o p en la página previsto a tal fin). Al presionar cualquiera de los 4 botones, antes de hacer el llamado, limipar el texto del resultado y el del error.