#!/bin/bash

# Verifica si se pasaron los argumentos necesarios
if [ "$#" -ne 2 ]; then
    echo "Uso: $0 <ruta_origen> <ruta_destino>"
    exit 1
fi

# Asigna las rutas de origen y destino
RUTA_ORIGEN="$1"
RUTA_DESTINO="$2"

# Verifica que la ruta de origen exista
if [ ! -d "$RUTA_ORIGEN" ]; then
    echo "Error: La ruta de origen '$RUTA_ORIGEN' no existe o no es un directorio."
    exit 1
fi

# Genera el archivo de exclusiones temporal
EXCLUDE_FILE=$(mktemp)
git -C "$RUTA_ORIGEN" ls-files --others --ignored --exclude-standard --directory > "$EXCLUDE_FILE"

# Verifica si el archivo de exclusión está vacío
if [ ! -s "$EXCLUDE_FILE" ]; then
    echo "No se encontraron archivos para excluir según el .gitignore."
fi

# Ejecuta el rsync con el archivo de exclusiones
rsync -av --exclude-from="$EXCLUDE_FILE" "$RUTA_ORIGEN/" "$RUTA_DESTINO/"

# Elimina el archivo de exclusión temporal
rm -f "$EXCLUDE_FILE"

# Mensaje de éxito
echo "Sincronización completada de '$RUTA_ORIGEN' a '$RUTA_DESTINO'."
